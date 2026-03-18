const topicChips = document.querySelectorAll(".topic-chip");
const yearSelect = document.getElementById("yearSelect");
const collectionTypeSelect = document.getElementById("collectionTypeSelect");
const searchBox = document.getElementById("searchBox");

let selectedTopics = [];


/***********************
 * RENDER RESULTS
 ***********************/
function render(list) {

  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = "<em>No matching datasets</em>";
    return;
  }

  const sorted = [...list].sort((a, b) => {

    // sort by year first (descending)
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) return yearDiff;

    // collection priority
    const typePriority = {
      main: 1,
      trend: 2,
      state: 3
    };

    const typeDiff =
      (typePriority[a.collectionType] || 99) -
      (typePriority[b.collectionType] || 99);

    if (typeDiff !== 0) return typeDiff;

    // alphabetical
    return a.id.localeCompare(b.id);

  });

  sorted.forEach(d => {

    container.innerHTML += `
      <div class="dataset-card ${d.collectionType}">
        <div class="dataset-id">${d.collection} - ${d.id}</div>
        <div class="dataset-meta">${d.year}</div>
      </div>
    `;

  });

}


/***********************
 * APPLY FILTERS
 ***********************/
function applyFilters() {

  const year = yearSelect.value.toLowerCase();
  const collectionType = collectionTypeSelect.value.toLowerCase();
  const query = searchBox.value.toLowerCase().trim();

  const tokens = query.split(/\s+/).filter(Boolean);

  const filtered = DATASETS.filter(d => {

    // OR filtering for topics
    const matchTopic =
      selectedTopics.length === 0 ||
      selectedTopics.some(topic =>
        d.topic.some(t => t.includes(topic))
      );

    // exact year match
    const matchYear =
      !year || d.yearTag.includes(year);

    // collection filter
    const matchCollection =
      !collectionType || d.collectionType === collectionType;

    // keyword search
    const matchText =
      tokens.length === 0 ||
      tokens.every(token =>
        d.keywords.some(k => k.includes(token))
      );

    return matchTopic && matchYear && matchCollection && matchText;

  });

  render(filtered);

}


/***********************
 * TOPIC CHIP TOGGLE
 ***********************/
topicChips.forEach(chip => {

  chip.addEventListener("click", () => {

    chip.classList.toggle("active");

    const topic = chip.dataset.topic;

    if (selectedTopics.includes(topic)) {

      selectedTopics = selectedTopics.filter(t => t !== topic);

    } else {

      selectedTopics.push(topic);

    }

    applyFilters();

  });

});


/***********************
 * MENU COLOR STYLING
 ***********************/
function colorCollectionMenu() {

  collectionTypeSelect.classList.remove(
    "menu-main",
    "menu-trend",
    "menu-state"
  );

  if (collectionTypeSelect.value === "main")
    collectionTypeSelect.classList.add("menu-main");

  if (collectionTypeSelect.value === "trend")
    collectionTypeSelect.classList.add("menu-trend");

  if (collectionTypeSelect.value === "state")
    collectionTypeSelect.classList.add("menu-state");

}


/***********************
 * EVENT LISTENERS
 ***********************/
collectionTypeSelect.addEventListener("change", () => {
  colorCollectionMenu();
  applyFilters();
});

yearSelect.addEventListener("change", applyFilters);

searchBox.addEventListener("input", applyFilters);


/***********************
 * INITIAL LOAD
 ***********************/
render(DATASETS);
