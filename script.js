const topicChips = document.querySelectorAll(".topic-chip");
const yearSelect = document.getElementById("yearSelect");
const collectionTypeSelect = document.getElementById("collectionTypeSelect");
const searchBox = document.getElementById("searchBox");
const clearBtn = document.getElementById("clearFiltersBtn");

let selectedTopics = [];
let userHasInteracted = false;


/***********************
 * RENDER
 ***********************/
function render(list, showMessage = false) {

  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = showMessage
      ? "<em>No matching datasets</em>"
      : "<em>Select filters to view datasets</em>";
    return;
  }

  const sorted = [...list].sort((a, b) => {

    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) return yearDiff;

    const typePriority = { main: 1, trend: 2, state: 3 };

    const typeDiff =
      (typePriority[a.collectionType] || 99) -
      (typePriority[b.collectionType] || 99);

    if (typeDiff !== 0) return typeDiff;

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

  const year = yearSelect.value;
  const collectionType = collectionTypeSelect.value;
  const query = searchBox.value.toLowerCase().trim();
  const tokens = query.split(/\s+/).filter(Boolean);



  const filtered = DATASETS.filter(d => {

    const matchTopic =
      selectedTopics.length === 0 ||
      selectedTopics.every(topic => d.topic.includes(topic));

    const matchYear =
      year ? d.yearTag.includes(year) : true;

    const matchCollection =
      collectionType ? d.collectionType === collectionType : true;

    const matchText =
      tokens.length === 0 ||
      tokens.every(token =>
        d.keywords.some(k => k.includes(token))
      );

    return matchTopic && matchYear && matchCollection && matchText;
  });

  render(filtered, true);
}


/***********************
 * TOPIC CLICK
 ***********************/
topicChips.forEach(chip => {

  chip.addEventListener("click", () => {

    userHasInteracted = true;

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
 * DROPDOWN EVENTS
 ***********************/
collectionTypeSelect.addEventListener("change", () => {
  userHasInteracted = true;
  colorCollectionMenu();
  applyFilters();
});

yearSelect.addEventListener("change", () => {
  userHasInteracted = true;
  applyFilters();
});

searchBox.addEventListener("input", () => {
  userHasInteracted = true;
  applyFilters();
});


/***********************
 * CLEAR FILTERS
 ***********************/
clearBtn.addEventListener("click", () => {

  // 🔥 remove selection visually
  yearSelect.selectedIndex = -1;
  collectionTypeSelect.selectedIndex = -1;

  // remove color
  collectionTypeSelect.classList.remove(
    "menu-main",
    "menu-trend",
    "menu-state"
  );

  // reset topics
  selectedTopics = [];
  topicChips.forEach(chip => chip.classList.remove("active"));

  userHasInteracted = false;

  render([], false);
});


/***********************
 * MENU COLOR
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
 * INITIAL LOAD
 ***********************/
colorCollectionMenu();   // shows blue on load
applyFilters();
