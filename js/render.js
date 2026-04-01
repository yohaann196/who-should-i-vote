// render.js - card/modal/pagination rendering

const PER_PAGE = 20

const PARTY_COLORS = {
  R: { bg: '#c0392b', text: '#fff' },
  D: { bg: '#1a56b0', text: '#fff' },
  I: { bg: '#555', text: '#fff' },
  Other: { bg: '#888', text: '#fff' }
}

function getInitials(name) {
  return name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function scoreColor(score) {
  if (score == null) return 'var(--color-muted)'
  if (score >= 75) return '#3B6D11'
  if (score >= 50) return '#BA7517'
  return '#A32D2D'
}

function avgScore(member) {
  const vals = [member.voting, member.finance, member.scandal, member.lobby].filter(v => v != null && v !== '')
  if (!vals.length) return null
  return Math.round(vals.reduce((a, b) => a + Number(b), 0) / vals.length)
}

function renderStatsBar(members) {
  const el = document.getElementById('stats-bar')
  const scored = members.filter(m => avgScore(m) != null).length

  el.innerHTML = `
    <div class="stat-card">
      <div class="stat-num">${members.length}</div>
      <div class="stat-label">total members</div>
    </div>
    <div class="stat-card">
      <div class="stat-num" style="color:#c0392b">${members.filter(m => m.party === 'R').length}</div>
      <div class="stat-label">Republicans</div>
    </div>
    <div class="stat-card">
      <div class="stat-num" style="color:#1a56b0">${members.filter(m => m.party === 'D').length}</div>
      <div class="stat-label">Democrats</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${scored}</div>
      <div class="stat-label">scored</div>
    </div>
  `
}

function createMemberCard(member, votes, onVote, onClick) {
  const score = avgScore(member)
  const col = PARTY_COLORS[member.party] || PARTY_COLORS.Other
  const voted = getUserVote(member.id, votes)
  const voteCheck = canVote(member.id, votes, loadRateData())
  const net = (member.upvotes || 0) - (member.downvotes || 0)
  const netStr = net > 0 ? '+' + net : String(net)

  const card = document.createElement('div')
  card.className = 'member-card'

  // I know I should use a template engine for this but it's fine
  card.innerHTML = `
    <div class="card-header">
      <div class="avatar" style="background:${col.bg}; color:${col.text}">
        ${getInitials(member.name)}
      </div>
      <div class="card-meta">
        <div class="member-name">${member.name}</div>
        <div class="member-title">${member.title}</div>
        <div class="badge-row">
          <span class="badge badge-federal">Federal</span>
          <span class="badge badge-party-${member.party}">${member.party}</span>
          <span class="badge badge-chamber-${member.chamber[0]}">${member.chamber}</span>
        </div>
      </div>
      <div class="score-box">
        <div class="score-num" style="color:${scoreColor(score)}">${score != null ? score : '–'}</div>
        <div class="score-label">integrity</div>
      </div>
    </div>
    <div class="vote-row">
      <span class="vote-tally">▲${member.upvotes || 0} ▼${member.downvotes || 0} &nbsp;·&nbsp; net ${netStr}</span>
      <div class="vote-buttons">
        <button class="vote-btn ${voted === 'up' ? 'voted-up' : ''}" ${!voteCheck.ok || voted ? 'disabled' : ''} data-action="up" data-id="${member.id}">▲ Trust</button>
        <button class="vote-btn ${voted === 'down' ? 'voted-down' : ''}" ${!voteCheck.ok || voted ? 'disabled' : ''} data-action="down" data-id="${member.id}">▼ Flag</button>
      </div>
    </div>
  `

  card.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      onVote(btn.dataset.id, btn.dataset.action)
    })
  })

  card.addEventListener('click', () => onClick(member.id))
  return card
}

function renderMemberList(members, page, votes, listId, pagerId, onVote, onClick, onPageChange) {
  const container = document.getElementById(listId)
  const pager = document.getElementById(pagerId)
  container.innerHTML = ''

  if (!members.length) {
    container.innerHTML = '<div class="empty-state">nothing found. try different filters.</div>'
    pager.innerHTML = ''
    return
  }

  const totalPages = Math.max(1, Math.ceil(members.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const slice = members.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  slice.forEach(m => container.appendChild(createMemberCard(m, votes, onVote, onClick)))
  renderPagination(currentPage, totalPages, members.length, pager, onPageChange)
}

function renderPagination(current, total, count, pager, onPageChange) {
  if (total <= 1) {
    pager.innerHTML = `<span class="page-info">${count} members</span>`
    return
  }

  // figure out which page numbers to show
  const start = Math.max(1, current - 2)
  const end = Math.min(total, current + 2)

  let html = `<button class="page-btn" onclick="(${onPageChange})(${current - 1})" ${current === 1 ? 'disabled' : ''}>← prev</button>`

  if (start > 1) {
    html += `<button class="page-btn" onclick="(${onPageChange})(1)">1</button>`
    if (start > 2) html += `<span class="page-ellipsis">…</span>`
  }

  for (let i = start; i <= end; i++) {
    html += `<button class="page-btn ${i === current ? 'page-btn--active' : ''}" onclick="(${onPageChange})(${i})">${i}</button>`
  }

  if (end < total) {
    if (end < total - 1) html += `<span class="page-ellipsis">…</span>`
    html += `<button class="page-btn" onclick="(${onPageChange})(${total})">${total}</button>`
  }

  html += `<button class="page-btn" onclick="(${onPageChange})(${current + 1})" ${current === total ? 'disabled' : ''}>next →</button>`
  html += `<span class="page-info">${count} members</span>`

  pager.innerHTML = html
}

function openModal(member, onSave, onClose) {
  const score = avgScore(member)
  const col = PARTY_COLORS[member.party] || PARTY_COLORS.Other

  const metrics = [
    { label: 'Voting record vs. promises', key: 'voting', val: member.voting },
    { label: 'Campaign finance transparency', key: 'finance', val: member.finance },
    // this one is confusing because higher = cleaner, I should rename it at some point
    { label: 'Scandal score (100 = clean)', key: 'scandal', val: member.scandal },
    { label: 'Lobbying independence', key: 'lobby', val: member.lobby }
  ]

  const bars = metrics.map(m => `
    <div class="metric-row">
      <div class="metric-header">
        <span style="color:var(--color-muted); font-size:13px">${m.label}</span>
        <span style="font-weight:500; font-size:13px; color:${scoreColor(m.val)}">${m.val ?? '–'}</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${m.val ?? 0}%; background:${scoreColor(m.val ?? 0)}"></div>
      </div>
    </div>
  `).join('')

  const inputs = metrics.map(m => `
    <div class="form-group">
      <label for="ms-${m.key}">${m.label}</label>
      <input id="ms-${m.key}" type="number" min="0" max="100" value="${m.val ?? ''}" placeholder="0–100">
    </div>
  `).join('')

  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.innerHTML = `
    <div class="modal">
      <button class="modal-close">×</button>

      <div class="modal-header">
        <div class="avatar avatar--large" style="background:${col.bg}; color:${col.text}">${getInitials(member.name)}</div>
        <div style="flex:1">
          <h2 style="font-size:18px; font-weight:500; margin-bottom:2px">${member.name}</h2>
          <p style="font-size:13px; color:var(--color-muted)">${member.title}</p>
          <div class="badge-row" style="margin-top:6px">
            <span class="badge badge-federal">Federal</span>
            <span class="badge badge-party-${member.party}">${member.party}</span>
            <span class="badge badge-chamber-${member.chamber[0]}">${member.chamber}</span>
          </div>
        </div>
        <div style="text-align:right; flex-shrink:0">
          <div style="font-size:28px; font-weight:500; color:${scoreColor(score)}">${score ?? '–'}</div>
          <div style="font-size:11px; color:var(--color-muted)">overall</div>
        </div>
      </div>

      <h3 class="section-heading">breakdown</h3>
      ${bars}

      ${member.notes ? `<h3 class="section-heading">notes</h3><p style="font-size:13px; color:var(--color-muted); line-height:1.7; margin-bottom:1rem">${member.notes}</p>` : ''}

      <h3 class="section-heading">add/update scores</h3>
      <p style="font-size:12px; color:var(--color-muted); margin-bottom:.75rem">scores are community opinions. please be honest and cite sources in notes if you can.</p>
      <div class="score-form-grid">${inputs}</div>
      <div class="form-group" style="margin-bottom:12px">
        <label for="ms-notes">notes</label>
        <textarea id="ms-notes" rows="3" placeholder="sources, context, receipts...">${member.notes || ''}</textarea>
      </div>
      <button class="btn-primary" id="modal-save">save</button>
    </div>
  `

  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.remove()
      if (onClose) onClose()
    }
  })

  overlay.querySelector('.modal-close').addEventListener('click', () => {
    overlay.remove()
    if (onClose) onClose()
  })

  overlay.querySelector('#modal-save').addEventListener('click', () => {
    const data = {
      voting:  parseScore(overlay.querySelector('#ms-voting').value),
      finance: parseScore(overlay.querySelector('#ms-finance').value),
      scandal: parseScore(overlay.querySelector('#ms-scandal').value),
      lobby:   parseScore(overlay.querySelector('#ms-lobby').value),
      notes:   overlay.querySelector('#ms-notes').value.trim()
    }
    onSave(member.id, data)
    overlay.remove()
  })

  document.getElementById('modal-root').appendChild(overlay)
}

function parseScore(val) {
  if (val === '' || val == null) return null
  const n = Number(val)
  if (isNaN(n)) return null
  return Math.min(100, Math.max(0, n))
}
