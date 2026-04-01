// data.js
// all 528 members of the 119th congress, hardcoded because I didn't want to deal with an API
// sources: congress.gov + wikipedia
// last updated april 2026, will probably get stale but whatever
//
// each member: { id, name, title, party, chamber, level, voting, finance, scandal, lobby, notes, upvotes, downvotes }
// scores are null by default, filled in by community

const CONGRESS_DATA = [
  // ─── SENATE ───────────────────────────────────────────────────────────────

  // Alabama
  { id: "c1",   name: "Tommy Tuberville",       title: "Senator, AL", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c2",   name: "Katie Britt",             title: "Senator, AL", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Alaska
  { id: "c3",   name: "Lisa Murkowski",          title: "Senator, AK", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c4",   name: "Dan Sullivan",            title: "Senator, AK", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Arizona
  { id: "c5",   name: "Mark Kelly",              title: "Senator, AZ", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c6",   name: "Ruben Gallego",           title: "Senator, AZ", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Arkansas
  { id: "c7",   name: "John Boozman",            title: "Senator, AR", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c8",   name: "Tom Cotton",              title: "Senator, AR", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // California
  { id: "c9",   name: "Alex Padilla",            title: "Senator, CA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c10",  name: "Adam Schiff",             title: "Senator, CA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Colorado
  { id: "c11",  name: "Michael Bennet",          title: "Senator, CO", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c12",  name: "John Hickenlooper",       title: "Senator, CO", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Connecticut
  { id: "c13",  name: "Richard Blumenthal",      title: "Senator, CT", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c14",  name: "Chris Murphy",            title: "Senator, CT", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Delaware
  { id: "c15",  name: "Chris Coons",             title: "Senator, DE", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c16",  name: "Lisa Blunt Rochester",    title: "Senator, DE", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Florida
  { id: "c17",  name: "Rick Scott",              title: "Senator, FL", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c18",  name: "Ashley Moody",            title: "Senator, FL", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Appointed Jan 2025 after Marco Rubio resigned to become Secretary of State.", upvotes: 0, downvotes: 0 },

  // Georgia
  { id: "c19",  name: "Jon Ossoff",              title: "Senator, GA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c20",  name: "Raphael Warnock",         title: "Senator, GA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Hawaii
  { id: "c21",  name: "Mazie Hirono",            title: "Senator, HI", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c22",  name: "Brian Schatz",            title: "Senator, HI", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Idaho
  { id: "c23",  name: "Mike Crapo",              title: "Senator, ID", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c24",  name: "Jim Risch",               title: "Senator, ID", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Illinois
  { id: "c25",  name: "Dick Durbin",             title: "Senator, IL", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Retiring in 2026 after 44 years in Congress.", upvotes: 0, downvotes: 0 },
  { id: "c26",  name: "Tammy Duckworth",         title: "Senator, IL", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Indiana
  { id: "c27",  name: "Todd Young",              title: "Senator, IN", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c28",  name: "Jim Banks",               title: "Senator, IN", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Iowa
  { id: "c29",  name: "Chuck Grassley",          title: "Senator, IA", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Oldest serving senator; has served since 1981.", upvotes: 0, downvotes: 0 },
  { id: "c30",  name: "Joni Ernst",              title: "Senator, IA", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Announced she will not seek re-election in 2026.", upvotes: 0, downvotes: 0 },

  // Kansas
  { id: "c31",  name: "Jerry Moran",             title: "Senator, KS", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c32",  name: "Roger Marshall",          title: "Senator, KS", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Kentucky
  { id: "c33",  name: "Mitch McConnell",         title: "Senator, KY", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Senate Majority Leader; served since 1985. Not seeking re-election in 2026.", upvotes: 0, downvotes: 0 },
  { id: "c34",  name: "Rand Paul",               title: "Senator, KY", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Louisiana
  { id: "c35",  name: "Bill Cassidy",            title: "Senator, LA", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c36",  name: "John Kennedy",            title: "Senator, LA", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Maine
  { id: "c37",  name: "Susan Collins",           title: "Senator, ME", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "One of the most moderate Senate Republicans; has voted against party on several key bills.", upvotes: 0, downvotes: 0 },
  { id: "c38",  name: "Angus King",              title: "Senator, ME", party: "I", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Independent who caucuses with Democrats. Former Governor of Maine.", upvotes: 0, downvotes: 0 },

  // Maryland
  { id: "c39",  name: "Chris Van Hollen",        title: "Senator, MD", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c40",  name: "Angela Alsobrooks",       title: "Senator, MD", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Elected in 2024; formerly Prince George's County Executive.", upvotes: 0, downvotes: 0 },

  // Massachusetts
  { id: "c41",  name: "Elizabeth Warren",        title: "Senator, MA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Known for progressive consumer protection advocacy and anti-corruption work.", upvotes: 0, downvotes: 0 },
  { id: "c42",  name: "Ed Markey",               title: "Senator, MA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Co-author of the Green New Deal resolution.", upvotes: 0, downvotes: 0 },

  // Michigan
  { id: "c43",  name: "Gary Peters",             title: "Senator, MI", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Not seeking re-election in 2026.", upvotes: 0, downvotes: 0 },
  { id: "c44",  name: "Elissa Slotkin",          title: "Senator, MI", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former CIA analyst and House member; elected to Senate in 2024.", upvotes: 0, downvotes: 0 },

  // Minnesota
  { id: "c45",  name: "Amy Klobuchar",           title: "Senator, MN", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c46",  name: "Tina Smith",              title: "Senator, MN", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Not seeking re-election in 2026.", upvotes: 0, downvotes: 0 },

  // Mississippi
  { id: "c47",  name: "Roger Wicker",            title: "Senator, MS", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c48",  name: "Cindy Hyde-Smith",        title: "Senator, MS", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Missouri
  { id: "c49",  name: "Josh Hawley",             title: "Senator, MO", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Objected to 2020 election certification on Jan 6, 2021.", upvotes: 0, downvotes: 0 },
  { id: "c50",  name: "Eric Schmitt",            title: "Senator, MO", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Montana
  { id: "c51",  name: "Steve Daines",            title: "Senator, MT", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Announced he will not seek re-election in 2026.", upvotes: 0, downvotes: 0 },
  { id: "c52",  name: "Tim Sheehy",              title: "Senator, MT", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Navy SEAL; elected in 2024.", upvotes: 0, downvotes: 0 },

  // Nebraska
  { id: "c53",  name: "Deb Fischer",             title: "Senator, NE", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c54",  name: "Pete Ricketts",           title: "Senator, NE", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Governor of Nebraska; appointed to Senate in 2023.", upvotes: 0, downvotes: 0 },

  // Nevada
  { id: "c55",  name: "Catherine Cortez Masto", title: "Senator, NV", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First Latina elected to the US Senate.", upvotes: 0, downvotes: 0 },
  { id: "c56",  name: "Jacky Rosen",             title: "Senator, NV", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // New Hampshire
  { id: "c57",  name: "Jeanne Shaheen",          title: "Senator, NH", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Retiring in 2026 after announcing she will not seek re-election.", upvotes: 0, downvotes: 0 },
  { id: "c58",  name: "Maggie Hassan",           title: "Senator, NH", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // New Jersey
  { id: "c59",  name: "Cory Booker",             title: "Senator, NJ", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Delivered the longest Senate floor speech in history (25+ hours) in March 2025.", upvotes: 0, downvotes: 0 },
  { id: "c60",  name: "Andy Kim",                title: "Senator, NJ", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former House member; won Senate seat in 2024.", upvotes: 0, downvotes: 0 },

  // New Mexico
  { id: "c61",  name: "Martin Heinrich",         title: "Senator, NM", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c62",  name: "Ben Ray Luján",           title: "Senator, NM", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // New York
  { id: "c63",  name: "Chuck Schumer",           title: "Senator, NY", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Senate Minority Leader.", upvotes: 0, downvotes: 0 },
  { id: "c64",  name: "Kirsten Gillibrand",      title: "Senator, NY", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // North Carolina
  { id: "c65",  name: "Thom Tillis",             title: "Senator, NC", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Announced he will not seek re-election in 2026.", upvotes: 0, downvotes: 0 },
  { id: "c66",  name: "Ted Budd",                title: "Senator, NC", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // North Dakota
  { id: "c67",  name: "John Hoeven",             title: "Senator, ND", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c68",  name: "Kevin Cramer",            title: "Senator, ND", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Ohio
  { id: "c69",  name: "Jon Husted",              title: "Senator, OH", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Appointed to fill JD Vance's seat after Vance became VP. Special election in 2026.", upvotes: 0, downvotes: 0 },
  { id: "c70",  name: "Bernie Moreno",           title: "Senator, OH", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Elected in 2024; defeated incumbent Sherrod Brown.", upvotes: 0, downvotes: 0 },

  // Oklahoma
  { id: "c71",  name: "James Lankford",          title: "Senator, OK", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c72",  name: "Alan Armstrong",          title: "Senator, OK", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Appointed March 2026 after Markwayne Mullin resigned to become Secretary of Homeland Security.", upvotes: 0, downvotes: 0 },

  // Oregon
  { id: "c73",  name: "Ron Wyden",               title: "Senator, OR", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Longest-serving current Democratic senator; known for privacy and internet freedom work.", upvotes: 0, downvotes: 0 },
  { id: "c74",  name: "Jeff Merkley",            title: "Senator, OR", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Pennsylvania
  { id: "c75",  name: "Bob Casey",               title: "Senator, PA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Defeated in 2024 re-election bid by Dave McCormick.", upvotes: 0, downvotes: 0 },
  { id: "c76",  name: "John Fetterman",          title: "Senator, PA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Lieutenant Governor of Pennsylvania; elected in 2022 after suffering a stroke.", upvotes: 0, downvotes: 0 },

  // Rhode Island
  { id: "c77",  name: "Jack Reed",               title: "Senator, RI", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Ranking member of the Senate Armed Services Committee.", upvotes: 0, downvotes: 0 },
  { id: "c78",  name: "Sheldon Whitehouse",      title: "Senator, RI", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Known for long-running climate change floor speeches.", upvotes: 0, downvotes: 0 },

  // South Carolina
  { id: "c79",  name: "Lindsey Graham",          title: "Senator, SC", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c80",  name: "Tim Scott",               title: "Senator, SC", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Ran for president in 2024 before dropping out.", upvotes: 0, downvotes: 0 },

  // South Dakota
  { id: "c81",  name: "John Thune",              title: "Senator, SD", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Senate Majority Leader since January 2025.", upvotes: 0, downvotes: 0 },
  { id: "c82",  name: "Mike Rounds",             title: "Senator, SD", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Tennessee
  { id: "c83",  name: "Marsha Blackburn",        title: "Senator, TN", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c84",  name: "Bill Hagerty",            title: "Senator, TN", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former US Ambassador to Japan under Trump.", upvotes: 0, downvotes: 0 },

  // Texas
  { id: "c85",  name: "John Cornyn",             title: "Senator, TX", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c86",  name: "Ted Cruz",                title: "Senator, TX", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Flew to Cancún during Texas winter storm crisis (Feb 2021). Objected to 2020 election certification.", upvotes: 0, downvotes: 0 },

  // Utah
  { id: "c87",  name: "Mike Lee",                title: "Senator, UT", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c88",  name: "John Curtis",             title: "Senator, UT", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former House member; won Mitt Romney's Senate seat in 2024.", upvotes: 0, downvotes: 0 },

  // Vermont
  { id: "c89",  name: "Bernie Sanders",          title: "Senator, VT", party: "I", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Democratic Socialist independent who caucuses with Democrats. Two-time presidential candidate.", upvotes: 0, downvotes: 0 },
  { id: "c90",  name: "Peter Welch",             title: "Senator, VT", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Virginia
  { id: "c91",  name: "Mark Warner",             title: "Senator, VA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c92",  name: "Tim Kaine",               title: "Senator, VA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Hillary Clinton's 2016 vice-presidential pick.", upvotes: 0, downvotes: 0 },

  // Washington
  { id: "c93",  name: "Maria Cantwell",          title: "Senator, WA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c94",  name: "Patty Murray",            title: "Senator, WA", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Senate President pro tempore emerita; one of the longest-serving Senate Democrats.", upvotes: 0, downvotes: 0 },

  // West Virginia
  { id: "c95",  name: "Shelley Moore Capito",    title: "Senator, WV", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c96",  name: "Jim Justice",             title: "Senator, WV", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Governor of West Virginia; owns Greenbrier resort.", upvotes: 0, downvotes: 0 },

  // Wisconsin
  { id: "c97",  name: "Tammy Baldwin",           title: "Senator, WI", party: "D", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First openly gay person elected to the Senate.", upvotes: 0, downvotes: 0 },
  { id: "c98",  name: "Ron Johnson",             title: "Senator, WI", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Wyoming
  { id: "c99",  name: "John Barrasso",           title: "Senator, WY", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Senate Majority Whip.", upvotes: 0, downvotes: 0 },
  { id: "c100", name: "Cynthia Lummis",          title: "Senator, WY", party: "R", chamber: "Senate", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Bitcoin advocate; announced she will not seek re-election in 2026.", upvotes: 0, downvotes: 0 },

  // ─── HOUSE ────────────────────────────────────────────────────────────────

  // Alabama (7)
  { id: "c101", name: "Jerry Carl",              title: "Rep. AL-1", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c102", name: "Barry Moore",             title: "Rep. AL-2", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c103", name: "Mike Rogers",             title: "Rep. AL-3", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c104", name: "Robert Aderholt",         title: "Rep. AL-4", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c105", name: "Dale Strong",             title: "Rep. AL-5", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c106", name: "Gary Palmer",             title: "Rep. AL-6", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c107", name: "Terri Sewell",            title: "Rep. AL-7", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Alaska (1)
  { id: "c108", name: "Nick Begich",             title: "Rep. AK-At Large", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Arizona (9)
  { id: "c109", name: "David Schweikert",        title: "Rep. AZ-1", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c110", name: "Eli Crane",               title: "Rep. AZ-2", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c111", name: "Yassamin Ansari",         title: "Rep. AZ-3", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Freshman elected in 2024; Democratic class president.", upvotes: 0, downvotes: 0 },
  { id: "c112", name: "Greg Stanton",            title: "Rep. AZ-4", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c113", name: "Andy Biggs",              title: "Rep. AZ-5", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Member of the House Freedom Caucus.", upvotes: 0, downvotes: 0 },
  { id: "c114", name: "Juan Ciscomani",          title: "Rep. AZ-6", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c115", name: "Raúl Grijalva",           title: "Rep. AZ-7", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c116", name: "Debbie Lesko",            title: "Rep. AZ-8", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c117", name: "Paul Gosar",              title: "Rep. AZ-9", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Censured by House in Nov 2021 for posting an animated video depicting violence against colleagues.", upvotes: 0, downvotes: 0 },

  // Arkansas (4)
  { id: "c118", name: "Rick Crawford",           title: "Rep. AR-1", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c119", name: "French Hill",             title: "Rep. AR-2", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c120", name: "Steve Womack",            title: "Rep. AR-3", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c121", name: "Bruce Westerman",         title: "Rep. AR-4", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // California — selected high-profile members (full list continues in data/congress.json)
  { id: "c123", name: "Jared Huffman",           title: "Rep. CA-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c124", name: "Kevin Kiley",             title: "Rep. CA-3",  party: "I", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Left Republican Party March 2026; registered as Independent.", upvotes: 0, downvotes: 0 },
  { id: "c126", name: "Tom McClintock",          title: "Rep. CA-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c132", name: "Nancy Pelosi",            title: "Rep. CA-11", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Speaker of the House (2007–2011, 2019–2023).", upvotes: 0, downvotes: 0 },
  { id: "c135", name: "Eric Swalwell",           title: "Rep. CA-14", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c138", name: "Ro Khanna",               title: "Rep. CA-17", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c148", name: "Mike Garcia",             title: "Rep. CA-27", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c157", name: "Ted Lieu",                title: "Rep. CA-36", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c163", name: "Robert Garcia",           title: "Rep. CA-42", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First openly gay immigrant elected to Congress.", upvotes: 0, downvotes: 0 },
  { id: "c166", name: "Maxine Waters",           title: "Rep. CA-45", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "One of the longest-serving House members; known for \"reclaiming her time\".", upvotes: 0, downvotes: 0 },
  { id: "c169", name: "Darrell Issa",            title: "Rep. CA-48", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Colorado
  { id: "c174", name: "Lauren Boebert",          title: "Rep. CO-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Member of House Freedom Caucus. Switched districts from CO-3 to CO-4 for 2024.", upvotes: 0, downvotes: 0 },
  { id: "c176", name: "Jason Crow",              title: "Rep. CO-6",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Army Ranger; was an impeachment manager in 2021.", upvotes: 0, downvotes: 0 },
  { id: "c177", name: "Joe Neguse",              title: "Rep. CO-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c180", name: "Diana DeGette",           title: "Rep. CO-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Connecticut
  { id: "c183", name: "Rosa DeLauro",            title: "Rep. CT-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Ranking member of the House Appropriations Committee.", upvotes: 0, downvotes: 0 },
  { id: "c184", name: "Jim Himes",               title: "Rep. CT-4",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c185", name: "Jahana Hayes",            title: "Rep. CT-5",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former National Teacher of the Year.", upvotes: 0, downvotes: 0 },

  // Delaware
  { id: "c186", name: "Sarah McBride",           title: "Rep. DE-At Large", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First openly transgender person elected to Congress.", upvotes: 0, downvotes: 0 },

  // Florida
  { id: "c187", name: "Jimmy Patronis",          title: "Rep. FL-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Won April 2025 special election to fill Matt Gaetz's seat.", upvotes: 0, downvotes: 0 },
  { id: "c192", name: "Randy Fine",              title: "Rep. FL-6",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Won April 2025 special election to fill Mike Waltz's seat.", upvotes: 0, downvotes: 0 },
  { id: "c196", name: "Maxwell Frost",           title: "Rep. FL-10", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First Gen Z member of Congress; elected in 2022.", upvotes: 0, downvotes: 0 },
  { id: "c199", name: "Anna Paulina Luna",       title: "Rep. FL-13", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c205", name: "Byron Donalds",           title: "Rep. FL-19", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Received Republican presidential nomination votes in the 2025 Speaker vote.", upvotes: 0, downvotes: 0 },
  { id: "c207", name: "Brian Mast",              title: "Rep. FL-21", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Army veteran who lost both legs in Afghanistan.", upvotes: 0, downvotes: 0 },
  { id: "c209", name: "Jared Moskowitz",         title: "Rep. FL-23", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Georgia
  { id: "c214", name: "Sanford Bishop",          title: "Rep. GA-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "One of the longest-serving House members.", upvotes: 0, downvotes: 0 },
  { id: "c217", name: "Nikema Williams",         title: "Rep. GA-5",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Chair of the Georgia Democratic Party.", upvotes: 0, downvotes: 0 },
  { id: "c221", name: "Andrew Clyde",            title: "Rep. GA-9",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Compared January 6 to a \"normal tourist visit\".", upvotes: 0, downvotes: 0 },

  // Hawaii
  { id: "c227", name: "Ed Case",                 title: "Rep. HI-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c228", name: "Jill Tokuda",             title: "Rep. HI-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Idaho
  { id: "c229", name: "Russ Fulcher",            title: "Rep. ID-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c230", name: "Mike Simpson",            title: "Rep. ID-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Illinois
  { id: "c234", name: "Jesús García",            title: "Rep. IL-4",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c238", name: "Raja Krishnamoorthi",     title: "Rep. IL-8",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c239", name: "Jan Schakowsky",          title: "Rep. IL-9",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c242", name: "Mike Bost",               title: "Rep. IL-12", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c244", name: "Lauren Underwood",        title: "Rep. IL-14", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First Black woman and first millennial to represent Illinois in Congress.", upvotes: 0, downvotes: 0 },
  { id: "c246", name: "Darin LaHood",            title: "Rep. IL-16", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Indiana
  { id: "c248", name: "Frank Mrvan",             title: "Rep. IN-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c252", name: "Victoria Spartz",         title: "Rep. IN-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Ukrainian-born; vocal about the war in Ukraine.", upvotes: 0, downvotes: 0 },
  { id: "c254", name: "André Carson",            title: "Rep. IN-7",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c268", name: "Thomas Massie",           title: "Rep. KY-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Libertarian-leaning Republican; often votes alone against his party.", upvotes: 0, downvotes: 0 },

  // Iowa
  { id: "c257", name: "Ashley Hinson",           title: "Rep. IA-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c258", name: "Mariannette Miller-Meeks",title: "Rep. IA-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c259", name: "Zach Nunn",               title: "Rep. IA-3",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c260", name: "Randy Feenstra",          title: "Rep. IA-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Kansas
  { id: "c261", name: "Tracey Mann",             title: "Rep. KS-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c263", name: "Sharice Davids",          title: "Rep. KS-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First Native American woman elected from Kansas; former MMA fighter.", upvotes: 0, downvotes: 0 },

  // Kentucky
  { id: "c265", name: "James Comer",             title: "Rep. KY-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Chair of the House Oversight Committee.", upvotes: 0, downvotes: 0 },
  { id: "c266", name: "Brett Guthrie",           title: "Rep. KY-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c267", name: "Morgan McGarvey",         title: "Rep. KY-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Louisiana
  { id: "c271", name: "Steve Scalise",           title: "Rep. LA-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "House Majority Leader.", upvotes: 0, downvotes: 0 },
  { id: "c273", name: "Clay Higgins",            title: "Rep. LA-3",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c274", name: "Mike Johnson",            title: "Rep. LA-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Speaker of the House since October 2023.", upvotes: 0, downvotes: 0 },
  { id: "c275", name: "Julia Letlow",            title: "Rep. LA-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c276", name: "Garret Graves",           title: "Rep. LA-6",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Maine
  { id: "c277", name: "Chellie Pingree",         title: "Rep. ME-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c278", name: "Jared Golden",            title: "Rep. ME-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "One of the most conservative House Democrats; uses ranked-choice voting district.", upvotes: 0, downvotes: 0 },

  // Maryland
  { id: "c279", name: "Andy Harris",             title: "Rep. MD-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c283", name: "Steny Hoyer",             title: "Rep. MD-5",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former House Majority Leader.", upvotes: 0, downvotes: 0 },
  { id: "c286", name: "Jamie Raskin",            title: "Rep. MD-8",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Lead House impeachment manager in Trump's second impeachment trial.", upvotes: 0, downvotes: 0 },

  // Massachusetts
  { id: "c287", name: "Richard Neal",            title: "Rep. MA-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Ranking member of the Ways and Means Committee.", upvotes: 0, downvotes: 0 },
  { id: "c288", name: "Jim McGovern",            title: "Rep. MA-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c291", name: "Katherine Clark",         title: "Rep. MA-5",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "House Minority Whip.", upvotes: 0, downvotes: 0 },
  { id: "c293", name: "Ayanna Pressley",         title: "Rep. MA-7",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Member of \"The Squad\"; first Black woman elected to Congress from Massachusetts.", upvotes: 0, downvotes: 0 },

  // Michigan
  { id: "c298", name: "Hillary Scholten",        title: "Rep. MI-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c305", name: "Haley Stevens",           title: "Rep. MI-11", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c306", name: "Rashida Tlaib",           title: "Rep. MI-12", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Member of \"The Squad\"; first Palestinian-American woman elected to Congress.", upvotes: 0, downvotes: 0 },

  // Minnesota
  { id: "c309", name: "Angie Craig",             title: "Rep. MN-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c312", name: "Ilhan Omar",              title: "Rep. MN-5",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Member of \"The Squad\"; one of the first two Muslim women elected to Congress.", upvotes: 0, downvotes: 0 },
  { id: "c313", name: "Tom Emmer",               title: "Rep. MN-6",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "House Majority Whip.", upvotes: 0, downvotes: 0 },

  // Mississippi
  { id: "c317", name: "Bennie Thompson",         title: "Rep. MS-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Chair of the January 6 Select Committee.", upvotes: 0, downvotes: 0 },

  // Missouri
  { id: "c320", name: "Wesley Bell",             title: "Rep. MO-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Defeated Cori Bush in the 2024 primary.", upvotes: 0, downvotes: 0 },
  { id: "c321", name: "Ann Wagner",              title: "Rep. MO-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c324", name: "Emanuel Cleaver",         title: "Rep. MO-5",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c325", name: "Sam Graves",              title: "Rep. MO-6",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Montana
  { id: "c328", name: "Ryan Zinke",              title: "Rep. MT-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Secretary of the Interior under Trump.", upvotes: 0, downvotes: 0 },
  { id: "c329", name: "Troy Downing",            title: "Rep. MT-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Nebraska
  { id: "c330", name: "Mike Flood",              title: "Rep. NE-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c331", name: "Don Bacon",               title: "Rep. NE-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "One of the more moderate House Republicans.", upvotes: 0, downvotes: 0 },
  { id: "c332", name: "Adrian Smith",            title: "Rep. NE-3",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Nevada
  { id: "c333", name: "Dina Titus",              title: "Rep. NV-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c335", name: "Susie Lee",               title: "Rep. NV-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c336", name: "Steven Horsford",         title: "Rep. NV-4",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // New Hampshire
  { id: "c337", name: "Chris Pappas",            title: "Rep. NH-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c338", name: "Annie Kuster",            title: "Rep. NH-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // New Jersey
  { id: "c339", name: "Donald Norcross",         title: "Rep. NJ-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c340", name: "Jefferson Van Drew",      title: "Rep. NJ-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Switched from Democrat to Republican in 2019.", upvotes: 0, downvotes: 0 },
  { id: "c342", name: "Christopher Smith",       title: "Rep. NJ-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Elected in 1980; one of the longest-serving House members.", upvotes: 0, downvotes: 0 },
  { id: "c343", name: "Josh Gottheimer",         title: "Rep. NJ-5",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Co-chair of the bipartisan Problem Solvers Caucus.", upvotes: 0, downvotes: 0 },
  { id: "c345", name: "Tom Kean Jr.",            title: "Rep. NJ-7",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c346", name: "Rob Menendez",            title: "Rep. NJ-8",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Son of former Sen. Bob Menendez.", upvotes: 0, downvotes: 0 },
  { id: "c350", name: "Bonnie Watson Coleman",   title: "Rep. NJ-12", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // New Mexico
  { id: "c351", name: "Teresa Leger Fernández",  title: "Rep. NM-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c352", name: "Gabe Vasquez",            title: "Rep. NM-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // New York
  { id: "c354", name: "Nick LaLota",             title: "Rep. NY-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c355", name: "Andrew Garbarino",        title: "Rep. NY-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c361", name: "Hakeem Jeffries",         title: "Rep. NY-8",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "House Minority Leader; first Black person to lead a party in Congress.", upvotes: 0, downvotes: 0 },
  { id: "c363", name: "Dan Goldman",             title: "Rep. NY-10", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c364", name: "Nicole Malliotakis",      title: "Rep. NY-11", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c365", name: "Jerrold Nadler",          title: "Rep. NY-12", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Ranking member of the House Judiciary Committee.", upvotes: 0, downvotes: 0 },
  { id: "c367", name: "Alexandria Ocasio-Cortez",title: "Rep. NY-14", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Member of \"The Squad\". Known for small-dollar fundraising and rejecting corporate PAC money.", upvotes: 0, downvotes: 0 },
  { id: "c368", name: "Ritchie Torres",          title: "Rep. NY-15", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c370", name: "Mike Lawler",             title: "Rep. NY-17", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c373", name: "Paul Tonko",              title: "Rep. NY-20", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c377", name: "Claudia Tenney",          title: "Rep. NY-24", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c378", name: "Joseph Morelle",          title: "Rep. NY-25", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // North Carolina
  { id: "c380", name: "Don Davis",               title: "Rep. NC-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c382", name: "Greg Murphy",             title: "Rep. NC-3",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c383", name: "Valerie Foushee",         title: "Rep. NC-4",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c388", name: "Richard Hudson",          title: "Rep. NC-9",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Chair of the National Republican Congressional Committee.", upvotes: 0, downvotes: 0 },
  { id: "c391", name: "Alma Adams",              title: "Rep. NC-12", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c393", name: "Tim Moore",               title: "Rep. NC-14", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former North Carolina House Speaker.", upvotes: 0, downvotes: 0 },

  // North Dakota
  { id: "c394", name: "Julie Fedorchak",         title: "Rep. ND-At Large", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Ohio
  { id: "c396", name: "Joyce Beatty",            title: "Rep. OH-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c397", name: "Jim Jordan",              title: "Rep. OH-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Chair of the House Judiciary Committee. Failed Speaker bid in Oct 2023 after 3 floor votes.", upvotes: 0, downvotes: 0 },
  { id: "c398", name: "Bob Latta",               title: "Rep. OH-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c401", name: "Warren Davidson",         title: "Rep. OH-8",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c402", name: "Marcy Kaptur",            title: "Rep. OH-9",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Longest-serving woman in Congressional history.", upvotes: 0, downvotes: 0 },
  { id: "c403", name: "Mike Turner",             title: "Rep. OH-10", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Chair of the House Intelligence Committee.", upvotes: 0, downvotes: 0 },
  { id: "c404", name: "Emilia Sykes",            title: "Rep. OH-13", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Oklahoma
  { id: "c407", name: "Kevin Hern",              title: "Rep. OK-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c409", name: "Frank Lucas",             title: "Rep. OK-3",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c410", name: "Tom Cole",                title: "Rep. OK-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Chair of the House Appropriations Committee.", upvotes: 0, downvotes: 0 },
  { id: "c411", name: "Stephanie Bice",          title: "Rep. OK-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Oregon
  { id: "c412", name: "Suzanne Bonamici",        title: "Rep. OR-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c414", name: "Earl Blumenauer",         title: "Rep. OR-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Known for his bicycle pin; drug policy reform advocate.", upvotes: 0, downvotes: 0 },
  { id: "c415", name: "Val Hoyle",               title: "Rep. OR-4",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c417", name: "Maxine Dexter",           title: "Rep. OR-6",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Freshman elected 2024.", upvotes: 0, downvotes: 0 },

  // Pennsylvania
  { id: "c418", name: "Brian Fitzpatrick",       title: "Rep. PA-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Co-chair of the Problem Solvers Caucus; one of the most bipartisan House members.", upvotes: 0, downvotes: 0 },
  { id: "c419", name: "Brendan Boyle",           title: "Rep. PA-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c420", name: "Dwight Evans",            title: "Rep. PA-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c421", name: "Madeleine Dean",          title: "Rep. PA-4",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Was an impeachment manager in Trump's second impeachment trial.", upvotes: 0, downvotes: 0 },
  { id: "c423", name: "Chrissy Houlahan",        title: "Rep. PA-6",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c426", name: "Dan Meuser",              title: "Rep. PA-9",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c427", name: "Scott Perry",             title: "Rep. PA-10", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former chair of the House Freedom Caucus. Phone was seized by FBI in 2022 investigation.", upvotes: 0, downvotes: 0 },
  { id: "c429", name: "Summer Lee",              title: "Rep. PA-12", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First Black woman elected to Congress from Pennsylvania.", upvotes: 0, downvotes: 0 },
  { id: "c431", name: "Guy Reschenthaler",       title: "Rep. PA-14", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Rhode Island
  { id: "c434", name: "Gabe Amo",                title: "Rep. RI-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Won 2023 special election.", upvotes: 0, downvotes: 0 },
  { id: "c435", name: "Seth Magaziner",          title: "Rep. RI-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // South Carolina
  { id: "c436", name: "Nancy Mace",              title: "Rep. SC-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c437", name: "Joe Wilson",              title: "Rep. SC-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Known for shouting \"You lie!\" at President Obama during a 2009 joint address.", upvotes: 0, downvotes: 0 },
  { id: "c440", name: "Ralph Norman",            title: "Rep. SC-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Member of the House Freedom Caucus.", upvotes: 0, downvotes: 0 },
  { id: "c441", name: "James Clyburn",           title: "Rep. SC-6",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former House Majority Whip; credited with reviving Biden's 2020 primary campaign.", upvotes: 0, downvotes: 0 },

  // South Dakota
  { id: "c443", name: "Dusty Johnson",           title: "Rep. SD-At Large", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Tennessee
  { id: "c444", name: "Diana Harshbarger",       title: "Rep. TN-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c445", name: "Tim Burchett",            title: "Rep. TN-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Voted to oust Kevin McCarthy as Speaker in 2023.", upvotes: 0, downvotes: 0 },
  { id: "c447", name: "Scott DesJarlais",        title: "Rep. TN-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c448", name: "Andy Ogles",              title: "Rep. TN-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c450", name: "Matt Van Epps",           title: "Rep. TN-7",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Won December 2025 special election to replace Mark Green.", upvotes: 0, downvotes: 0 },
  { id: "c452", name: "Steve Cohen",             title: "Rep. TN-9",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Texas
  { id: "c454", name: "Dan Crenshaw",            title: "Rep. TX-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former Navy SEAL; lost an eye in combat.", upvotes: 0, downvotes: 0 },
  { id: "c461", name: "Al Green",                title: "Rep. TX-9",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Censured by the House in March 2025 for interrupting Trump's joint address.", upvotes: 0, downvotes: 0 },
  { id: "c462", name: "Michael McCaul",          title: "Rep. TX-10", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c465", name: "Ronny Jackson",           title: "Rep. TX-13", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former White House physician under Obama and Trump.", upvotes: 0, downvotes: 0 },
  { id: "c468", name: "Veronica Escobar",        title: "Rep. TX-16", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c472", name: "Joaquin Castro",          title: "Rep. TX-20", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Twin brother of former HUD Secretary Julián Castro.", upvotes: 0, downvotes: 0 },
  { id: "c473", name: "Chip Roy",                title: "Rep. TX-21", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "House Freedom Caucus member; frequently bucks GOP leadership.", upvotes: 0, downvotes: 0 },
  { id: "c474", name: "Troy Nehls",              title: "Rep. TX-22", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c480", name: "Henry Cuellar",           title: "Rep. TX-28", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Indicted on bribery charges in May 2024 alongside his wife.", upvotes: 0, downvotes: 0 },
  { id: "c481", name: "Sylvia Garcia",           title: "Rep. TX-29", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c485", name: "Marc Veasey",             title: "Rep. TX-33", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c486", name: "Lloyd Doggett",           title: "Rep. TX-35", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c488", name: "Wesley Hunt",             title: "Rep. TX-38", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Utah
  { id: "c489", name: "Blake Moore",             title: "Rep. UT-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c490", name: "Celeste Maloy",           title: "Rep. UT-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c492", name: "Burgess Owens",           title: "Rep. UT-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Former NFL player.", upvotes: 0, downvotes: 0 },

  // Vermont
  { id: "c493", name: "Becca Balint",            title: "Rep. VT-At Large", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First woman and first openly gay person to represent Vermont in Congress.", upvotes: 0, downvotes: 0 },

  // Virginia
  { id: "c494", name: "Rob Wittman",             title: "Rep. VA-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c495", name: "Jen Kiggans",             title: "Rep. VA-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c496", name: "Bobby Scott",             title: "Rep. VA-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c498", name: "Ben Cline",               title: "Rep. VA-6",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c500", name: "Don Beyer",               title: "Rep. VA-8",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c502", name: "Suhas Subramanyam",       title: "Rep. VA-10", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Freshman elected 2024.", upvotes: 0, downvotes: 0 },
  { id: "c503", name: "Eugene Vindman",          title: "Rep. VA-11", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Twin brother of LTC Alexander Vindman; both were key figures in Trump's first impeachment.", upvotes: 0, downvotes: 0 },

  // Washington
  { id: "c504", name: "Suzan DelBene",           title: "Rep. WA-1",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c505", name: "Rick Larsen",             title: "Rep. WA-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c506", name: "Marie Gluesenkamp Perez", title: "Rep. WA-3",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Auto-shop owner; represents a competitive district Trump won twice.", upvotes: 0, downvotes: 0 },
  { id: "c507", name: "Dan Newhouse",            title: "Rep. WA-4",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "One of 10 House Republicans who voted to impeach Trump in 2021.", upvotes: 0, downvotes: 0 },
  { id: "c509", name: "Derek Kilmer",            title: "Rep. WA-6",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c510", name: "Pramila Jayapal",         title: "Rep. WA-7",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Chair of the Congressional Progressive Caucus.", upvotes: 0, downvotes: 0 },
  { id: "c511", name: "Kim Schrier",             title: "Rep. WA-8",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c512", name: "Adam Smith",              title: "Rep. WA-9",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Ranking member of the House Armed Services Committee.", upvotes: 0, downvotes: 0 },
  { id: "c513", name: "Marilyn Strickland",      title: "Rep. WA-10", party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "First Korean-American woman elected to Congress.", upvotes: 0, downvotes: 0 },

  // West Virginia
  { id: "c514", name: "Carol Miller",            title: "Rep. WV-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c515", name: "Riley Moore",             title: "Rep. WV-2",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Wisconsin
  { id: "c516", name: "Bryan Steil",             title: "Rep. WI-1",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c517", name: "Mark Pocan",              title: "Rep. WI-2",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Co-chair of the Congressional Progressive Caucus.", upvotes: 0, downvotes: 0 },
  { id: "c518", name: "Derrick Van Orden",       title: "Rep. WI-3",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c519", name: "Gwen Moore",              title: "Rep. WI-4",  party: "D", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c520", name: "Scott Fitzgerald",        title: "Rep. WI-5",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c521", name: "Glenn Grothman",          title: "Rep. WI-6",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },
  { id: "c522", name: "Tom Tiffany",             title: "Rep. WI-7",  party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "", upvotes: 0, downvotes: 0 },

  // Wyoming
  { id: "c524", name: "Harriet Hageman",         title: "Rep. WY-At Large", party: "R", chamber: "House", level: "Federal", voting: null, finance: null, scandal: null, lobby: null, notes: "Defeated Liz Cheney in the 2022 Republican primary with Trump's endorsement.", upvotes: 0, downvotes: 0 },
];
