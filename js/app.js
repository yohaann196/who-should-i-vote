// app.js - main app logic

// global state, yeah I know, it works fine for something this small
const state = {
  members: [],
  votes: {},
  rateData: {},
  query: '',
  party: '',
  chamber: '',
  stateFilter: '',
  page: 1
}

document.addEventListener('DOMContentLoaded', () => {
  state.members = loadMembers()
  state.votes = loadVotes()
  state.rateData = loadRateData()

  console.log(`loaded ${state.members.length} members`) // useful to keep around

  populateStateFilter()
  renderStatsBar(state.members)
  refreshList()
  refreshLeaderboard()
  wireUpListeners()
})

// ---- filtering ----

function getFiltered() {
  const q = state.query.toLowerCase().trim()

  return state.members.filter(m => {
    if (q && !m.name.toLowerCase().includes(q) && !m.title.toLowerCase().includes(q)) return false
    if (state.party && m.party !== state.party) return false
    if (state.chamber && m.chamber !== state.chamber) return false
    if (state.stateFilter && !m.title.includes(state.stateFilter)) return false
    return true
  })
}

// ---- rendering ----

function refreshList() {
  renderMemberList(
    getFiltered(),
    state.page,
    state.votes,
    'member-list',
    'pagination',
    handleVote,
    handleCardClick,
    goToPage
  )
}

function refreshLeaderboard() {
  const el = document.getElementById('leaderboard-list')
  el.innerHTML = ''

  const scored = [...state.members]
    .filter(m => avgScore(m) != null)
    .sort((a, b) => avgScore(b) - avgScore(a))
    .slice(0, 50)

  if (!scored.length) {
    el.innerHTML = '<div class="empty-state">no one has been scored yet.<br>click a member card to add scores.</div>'
    return
  }

  scored.forEach(m => el.appendChild(createMemberCard(m, state.votes, handleVote, handleCardClick)))
}

// ---- event handlers ----

function handleVote(memberId, direction) {
  const check = canVote(memberId, state.votes, state.rateData)
  if (!check.ok) {
    showToast(check.reason, 'warning')
    return
  }

  const member = state.members.find(m => m.id === memberId)
  if (!member) return

  recordVote(memberId, direction, state.votes, state.rateData)

  if (direction === 'up') member.upvotes = (member.upvotes || 0) + 1
  else member.downvotes = (member.downvotes || 0) + 1

  saveMembers(state.members)
  refreshList()
  refreshLeaderboard()
  showToast(direction === 'up' ? '▲ marked as trustworthy' : '▼ flagged', 'info')
}

function handleCardClick(memberId) {
  const member = state.members.find(m => m.id === memberId)
  if (!member) return
  openModal(member, handleScoreSave, null)
}

function handleScoreSave(memberId, data) {
  const member = state.members.find(m => m.id === memberId)
  if (!member) return

  // only update fields that were actually filled in
  if (data.voting != null) member.voting = data.voting
  if (data.finance != null) member.finance = data.finance
  if (data.scandal != null) member.scandal = data.scandal
  if (data.lobby != null) member.lobby = data.lobby
  if (data.notes !== undefined) member.notes = data.notes

  saveMembers(state.members)
  renderStatsBar(state.members)
  refreshList()
  refreshLeaderboard()
  showToast('saved!', 'success')
}

function handleAddMember(e) {
  e.preventDefault()

  const name = document.getElementById('add-name').value.trim()
  const title = document.getElementById('add-title').value.trim()

  if (!name || !title) {
    showToast('name and title are required', 'warning')
    return
  }

  const newMember = {
    id: 'u' + Date.now(),
    name,
    title,
    party: document.getElementById('add-party').value,
    chamber: document.getElementById('add-chamber').value,
    level: 'Federal',
    voting: parseScore(document.getElementById('add-voting').value),
    finance: parseScore(document.getElementById('add-finance').value),
    scandal: parseScore(document.getElementById('add-scandal').value),
    lobby: parseScore(document.getElementById('add-lobby').value),
    notes: document.getElementById('add-notes').value.trim(),
    upvotes: 0,
    downvotes: 0
  }

  state.members.unshift(newMember)
  saveMembers(state.members)
  document.getElementById('add-form').reset()
  renderStatsBar(state.members)
  setTab('browse')
  refreshList()
  showToast(`${newMember.name} added`, 'success')
}

// ---- tabs ----

function setTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(p => { p.hidden = p.dataset.tab !== tabName })
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('tab-btn--active', b.dataset.tab === tabName))
  if (tabName === 'leaderboard') refreshLeaderboard()
}

// ---- pagination ----

function goToPage(p) {
  state.page = p
  refreshList()
  document.getElementById('member-list').scrollIntoView({ behavior: 'smooth', block: 'start' })
}

window.goToPage = goToPage // needs to be global for onclick attributes in pagination

// ---- filters ----

function setParty(party) {
  state.party = party === 'all' ? '' : party
  state.page = 1
  document.querySelectorAll('[data-party-filter]').forEach(btn => {
    btn.classList.toggle('filter-btn--active', btn.dataset.partyFilter === (state.party || 'all'))
  })
  refreshList()
}

function populateStateFilter() {
  const select = document.getElementById('state-filter')
  if (!select) return

  // pull state abbreviations out of member titles
  // titles are like "Senator, TX" or "Rep. TX-21"
  // this is a bit fragile but works well enough
  const states = [...new Set(
    state.members.map(m => {
      const match = m.title.match(/,\s*([A-Z]{2})\b/)
      return match ? match[1] : null
    }).filter(Boolean)
  )].sort()

  states.forEach(s => {
    const opt = document.createElement('option')
    opt.value = s
    opt.textContent = s
    select.appendChild(opt)
  })
}

// ---- toasts ----

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container')
  if (!container) return

  const toast = document.createElement('div')
  toast.className = `toast toast--${type}`
  toast.textContent = msg
  container.appendChild(toast)

  requestAnimationFrame(() => toast.classList.add('toast--visible'))

  setTimeout(() => {
    toast.classList.remove('toast--visible')
    toast.addEventListener('transitionend', () => toast.remove(), { once: true })
  }, 2800)
}

// ---- wiring ----

function wireUpListeners() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => setTab(btn.dataset.tab))
  })

  document.querySelectorAll('[data-party-filter]').forEach(btn => {
    btn.addEventListener('click', () => setParty(btn.dataset.partyFilter))
  })

  const search = document.getElementById('search-input')
  if (search) {
    search.addEventListener('input', () => {
      state.query = search.value
      state.page = 1
      refreshList()
    })
  }

  const chamberSelect = document.getElementById('chamber-filter')
  if (chamberSelect) {
    chamberSelect.addEventListener('change', () => {
      state.chamber = chamberSelect.value
      state.page = 1
      refreshList()
    })
  }

  const stateSelect = document.getElementById('state-filter')
  if (stateSelect) {
    stateSelect.addEventListener('change', () => {
      state.stateFilter = stateSelect.value
      state.page = 1
      refreshList()
    })
  }

  const addForm = document.getElementById('add-form')
  if (addForm) addForm.addEventListener('submit', handleAddMember)
}
