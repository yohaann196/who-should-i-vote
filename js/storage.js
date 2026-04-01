// storage.js
// handles saving/loading everything to localStorage and the rate limiting stuff

const STORAGE_KEY = 'wsiv-members-v1'
const VOTES_KEY = 'wsiv-votes-v1'
const RATE_KEY = 'wsiv-rate-v1'

// 5 votes per hour felt reasonable
const RATE_LIMIT = 5
const RATE_WINDOW = 60 * 60 * 1000

// fingerprint the browser so people can't just spam votes
// this is not bulletproof but it's good enough
function getFingerprint() {
  const bits = [
    navigator.language,
    screen.width,
    screen.height,
    navigator.hardwareConcurrency || 0,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  ]
  return btoa(bits.join('|'))
}

function loadMembers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch(e) {
    console.warn('localStorage parse failed, falling back to seed data', e)
  }
  // deep clone so we don't accidentally mutate the original array
  return JSON.parse(JSON.stringify(CONGRESS_DATA))
}

function saveMembers(members) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(members))
  } catch(e) {
    // this can fail if storage is full, just silently fail I guess
    console.error('couldnt save members:', e)
  }
}

function loadVotes() {
  try {
    const raw = localStorage.getItem(VOTES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch(e) {
    return {}
  }
}

function saveVotes(votes) {
  localStorage.setItem(VOTES_KEY, JSON.stringify(votes))
}

function loadRateData() {
  try {
    const raw = localStorage.getItem(RATE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch(e) {
    return {}
  }
}

function saveRateData(data) {
  localStorage.setItem(RATE_KEY, JSON.stringify(data))
}

// returns { ok: true } or { ok: false, reason: '...' }
function canVote(memberId, votes, rateData) {
  const fp = getFingerprint()
  const key = fp + '_' + memberId

  if (votes[key]) {
    return { ok: false, reason: 'already voted on this one' }
  }

  const now = Date.now()
  const userData = rateData[fp] || { votes: [] }
  const recentVotes = userData.votes.filter(t => now - t < RATE_WINDOW)

  if (recentVotes.length >= RATE_LIMIT) {
    return { ok: false, reason: `you've hit the limit (${RATE_LIMIT} votes/hour)` }
  }

  return { ok: true }
}

function recordVote(memberId, direction, votes, rateData) {
  const fp = getFingerprint()
  const key = fp + '_' + memberId
  const now = Date.now()

  votes[key] = direction

  if (!rateData[fp]) rateData[fp] = { votes: [] }
  rateData[fp].votes.push(now)

  // trim old timestamps so this doesn't grow forever
  rateData[fp].votes = rateData[fp].votes.filter(t => now - t < RATE_WINDOW)

  saveVotes(votes)
  saveRateData(rateData)
}

function getUserVote(memberId, votes) {
  const fp = getFingerprint()
  return votes[fp + '_' + memberId] || null
}
