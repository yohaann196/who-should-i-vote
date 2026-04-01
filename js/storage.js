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
  // always start from the current CONGRESS_DATA so new members appear for everyone
  const base = JSON.parse(JSON.stringify(CONGRESS_DATA))

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const stored = JSON.parse(saved)
      if (Array.isArray(stored) && stored.length) {
        // build a lookup of stored scores/votes keyed by member id
        const storedMap = {}
        stored.forEach(m => { if (m && m.id) storedMap[m.id] = m })

        // apply stored scores and votes to the current member list
        base.forEach(m => {
          const s = storedMap[m.id]
          if (!s) return
          if (s.voting  != null) m.voting  = s.voting
          if (s.finance != null) m.finance = s.finance
          if (s.scandal != null) m.scandal = s.scandal
          if (s.lobby   != null) m.lobby   = s.lobby
          if (s.notes)           m.notes   = s.notes
          if (s.upvotes)         m.upvotes = s.upvotes
          if (s.downvotes)       m.downvotes = s.downvotes
        })

        // also bring back any user-added members (ids starting with 'u')
        stored.forEach(m => {
          if (m && m.id && m.id.startsWith('u')) base.unshift(m)
        })
      }
    }
  } catch(e) {
    console.warn('localStorage parse failed, using seed data', e)
  }

  return base
}

function saveMembers(members) {
  try {
    // Only persist members that carry non-default data so we don't blow the
    // ~5 MB localStorage quota by serialising all 500+ congress entries every
    // time.  loadMembers() re-inflates missing entries from CONGRESS_DATA on
    // the next load, so it is safe to omit unmodified members here.
    const delta = members.filter(m =>
      m.id.startsWith('u') ||   // user-added member
      m.voting    != null  ||   // has a voting score (0 is a valid score)
      m.finance   != null  ||   // has a finance score
      m.scandal   != null  ||   // has a scandal score
      m.lobby     != null  ||   // has a lobby score
      m.notes     !== ''   ||   // has non-empty notes
      m.upvotes   > 0      ||   // has community upvotes
      m.downvotes > 0           // has community downvotes
    )
    localStorage.setItem(STORAGE_KEY, JSON.stringify(delta))
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
