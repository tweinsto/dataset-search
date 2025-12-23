const searchBox = document.getElementById("searchBox");

function getChecked(cls) {
  return [...document.querySelectorAll(`.${cls}:checked`)]
    .map(el => el.value.toLowerCase());
}

function render(list) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = "<em>No matching datasets</em>";
    return;
  }

  // ---- SORTING LOGIC ----
  const yearOrder = {
    "acs2023": 1,
    "acs2022": 2,
    "acs2021": 3,
    "acs2019": 4,
    "acs2020trend": 5,
    "acs2016trend": 6,
    "acs2010trend": 7,
    "acs2008trend": 8
  };

  const sorted = [...list].sort((a, b) => {
    // primary: collection order
    const orderA = yearOrder[a.collection] ?? 99;
    const orderB = yearOrder[b.collection] ?? 99;

    if (orderA !== orderB) return orderA - orderB;

    // secondary: dataset name (stable, alphabetical)
    return a.id.localeCompare(b.id);
  });

  // ---- RENDER ----
  sorted.forEach(d => {
    container.innerHTML += `
      <div class="dataset-card">
        <div class="dataset-id">
          ${d.collection} – ${d.id}
        </div>
        <div class="dataset-meta">
          ${d.year}
        </div>
      </div>
    `;
  });
}


function applyFilters() {
  const q = searchBox.value.toLowerCase().trim();
  const tokens = q.split(/\s+/).filter(Boolean);

  const races = getChecked("race");
  const topics = getChecked("topic");
  const sexes = getChecked("sex");
  const ages = getChecked("age");
  const years = getChecked("year");

  const filtered = DATASETS.filter(d => {
    // TEXT SEARCH (multi-token AND)
    const matchText =
      tokens.length === 0 ||
      tokens.every(token =>
        d.keywords.some(k => k.includes(token))
      );

    const matchRace =
      races.length === 0 || races.some(r => d.race.includes(r));

    const matchTopic =
      topics.length === 0 || topics.some(t => d.topic.includes(t));

    const matchSex =
      sexes.length === 0 ||
      (d.sex && sexes.some(s => d.sex.includes(s)));

    const matchAge =
      ages.length === 0 ||
      (d.age && ages.some(a => d.age.includes(a)));

    // YEAR LOGIC (trend mutually exclusive)
    const hasTrend = years.includes("trend");
    const hasNumericYear = years.some(y => y !== "trend");
    if (hasTrend && hasNumericYear) return false;

    const matchYear =
      years.length === 0 || years.some(y => d.yearTag.includes(y));

    return (
      matchText &&
      matchRace &&
      matchTopic &&
      matchSex &&
      matchAge &&
      matchYear
    );
  });

  render(filtered);
}


// Event listeners
document.addEventListener("input", applyFilters);
document.addEventListener("change", applyFilters);

// Initial render
render(DATASETS);
