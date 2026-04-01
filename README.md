# who-should-i-vote 🗳️

It's a community tracker for every member of the 119th Congress. You can rate them on stuff that actually matters — do they vote the way they campaigned? Who's funding them? Any scandals? That kind of thing.

No backend. No database. No login.

---

## just open index.html

Seriously that's it. No npm install. No build step. I specifically avoided all of that because I hate setting up projects.

If you want a local server for some reason:

```bash
python3 -m http.server 8080
```

then go to localhost:8080. But again, just opening the file works fine.

---

## how it works

528 congress members hardcoded in `js/data.js`. I know hardcoding is bad, I'll probably hook it up to the ProPublica Congress API at some point but that felt like a rabbit hole for a Saturday afternoon project.

Scores are 0-100 for four things:
- voting record (do they actually vote how they said they would)
- campaign finance (are they taking corporate PAC money or not)
- scandal score (higher = cleaner, I know it's backwards but it felt right when I set it up and now I don't want to change it)
- lobbying — basically are they owned by an industry or not

click any card to score someone. community vote buttons are rate limited to 5/hr per browser so you can't spam them.

---

## file structure

```
index.html
css/style.css     - got kinda long ngl
js/data.js        - all the congress members
js/storage.js     - localstorage + rate limiting
js/render.js      - card/modal rendering
js/app.js         - wires everything together
data/congress.json
```

---

## known issues

- state filter is janky sometimes, might match wrong state if a name contains a state abbreviation
- the scandal score being "higher = cleaner" was a mistake that I'm now too lazy to fix
- some of my House data might already be slightly out of date, there are constantly special elections happening


## contributing

PRs welcome, just don't add a build system. This is supposed to be a simple static site.

If you add members please double-check they're actually current.

---

