/***********************
 * COLLECTIONS
 ***********************/
const YEAR_COLLECTIONS = [
  { year: "2019", collection: "acs2019", survey: "acs_1yr" },
  { year: "2021", collection: "acs2021", survey: "acs_1yr" },
  { year: "2022", collection: "acs2022", survey: "acs_1yr" },
  { year: "2023", collection: "acs2023", survey: "acs_1yr" }
];

const TREND_COLLECTIONS = [
  { collection: "acs2020trend" },
  { collection: "acs2016trend" },
  { collection: "acs2010trend" },
  { collection: "acs2008trend" }
];

/***********************
 * BASE DATASETS (1-YEAR ACS)
 ***********************/
const BASE_DATASETS = [

  // Population / Race
  { id: "AsianPop", race: ["asian"], topic: ["population"], age: [], keywords: ["asian", "population", "race"] },
  { id: "HispPop", race: ["hispanic"], topic: ["population"], age: [], keywords: ["hispanic", "latino", "population"] },

  // Children
  { id: "ChildGrad", topic: ["education"], age: ["18-24"], keywords: ["children", "youth", "18-24", "graduation", "education"] },
  { id: "ChildPov", topic: ["poverty"], age: ["children"], keywords: ["children", "poverty"] },
  { id: "ChildSch", topic: ["education"], age: ["children"], keywords: ["children", "school", "attendance"] },

  // Cohabitation
  { id: "Cohab_M", topic: ["family"], age: ["15+"], sex: ["male"], keywords: ["cohabitation", "male", "men", "15+"] },
  { id: "Cohab_W", topic: ["family"], age: ["15+"], sex: ["female"], keywords: ["cohabitation", "female", "women", "15+"] },

  // Professions
  { id: "Doctors", topic: ["occupation", "health"], age: ["25-64"], keywords: ["doctors", "medical", "healthcare", "25-64"] },
  { id: "Lawyers", topic: ["occupation", "law"], age: ["25-64"], keywords: ["lawyers", "legal", "25-64"] },

  // Earnings
  { id: "Earn", topic: ["earnings"], age: ["16+"], keywords: ["earnings", "income", "wages", "16+"] },
  { id: "EarnAsian", race: ["asian"], topic: ["earnings"], age: ["25-34"], keywords: ["asian", "earnings", "25-34"] },
  { id: "EarnAsianAll", race: ["asian"], topic: ["earnings"], age: ["16+"], keywords: ["asian", "earnings", "16+"] },
  { id: "EarnHisp", race: ["hispanic"], topic: ["earnings"], age: ["25-34"], keywords: ["hispanic", "earnings", "25-34"] },
  { id: "EarnHispAll", race: ["hispanic"], topic: ["earnings"], age: ["16+"], keywords: ["hispanic", "earnings", "16+"] },

  // Education
  { id: "EducAsian", race: ["asian"], topic: ["education"], age: ["25-34"], keywords: ["asian", "education", "25-34"] },
  { id: "EducAsianAll", race: ["asian"], topic: ["education"], age: ["25+"], keywords: ["asian", "education", "25+"] },
  { id: "EducImm", topic: ["education"], age: ["25+"], keywords: ["immigrant", "education", "25+"] },
  { id: "EducOccup", topic: ["education", "occupation"], age: ["25+"], keywords: ["education", "occupation", "25+"] },

  // Elderly
  { id: "Elderly", topic: ["population"], age: ["65+"], keywords: ["elderly", "seniors", "65+"] },
  { id: "EldrDisab", topic: ["disability"], age: ["65+"], keywords: ["elderly", "disability", "65+"] },
  { id: "EldrEmp", topic: ["employment"], age: ["65+"], keywords: ["elderly", "employment", "65+"] },
  { id: "EldrHH", topic: ["households"], age: ["65+"], keywords: ["elderly", "household", "65+"] },
  { id: "EldrPov", topic: ["poverty"], age: ["65+"], keywords: ["elderly", "poverty", "65+"] },

  // Employment
  { id: "EmpAsian", race: ["asian"], topic: ["employment"], age: ["16-34"], keywords: ["asian", "employment", "16-34"] },
  { id: "EmpAsianAll", race: ["asian"], topic: ["employment"], age: ["16+"], keywords: ["asian", "employment", "16+"] },
  { id: "EmpEduc", topic: ["employment", "education"], age: ["16+"], keywords: ["employment", "education", "16+"] },
  { id: "EmpHisp", race: ["hispanic"], topic: ["employment"], age: ["16-34"], keywords: ["hispanic", "employment", "16-34"] },
  { id: "EmpHispAll", race: ["hispanic"], topic: ["employment"], age: ["16+"], keywords: ["hispanic", "employment", "16+"] },
  { id: "Employ", topic: ["employment"], age: ["16+"], keywords: ["employment", "labor force", "16+"] },
  { id: "Emp_W", topic: ["employment"], age: ["25-34"], sex: ["female"], keywords: ["women", "employment", "25-34"] },

  // Households / Housing
  { id: "Households", topic: ["households"], age: ["15+"], keywords: ["household", "family", "15+"] },
  { id: "Housing", topic: ["housing"], age: ["15+"], keywords: ["housing", "home", "rent", "15+"] },

  // Marital
  { id: "MarAsian", race: ["asian"], topic: ["marital"], age: ["15+"], keywords: ["asian", "marriage", "15+"] },
  { id: "MarEduc", topic: ["marital", "education"], age: ["15+"], keywords: ["marriage", "education", "15+"] },
  { id: "MarEmp_W", topic: ["marital", "employment"], age: ["25-34"], sex: ["female"], keywords: ["women", "marriage", "employment", "25-34"] },
  { id: "MarHisp", race: ["hispanic"], topic: ["marital"], age: ["15+"], keywords: ["hispanic", "marriage", "15+"] },
  { id: "MarPov_W", topic: ["marital", "poverty"], age: ["16+"], sex: ["female"], keywords: ["women", "marriage", "poverty", "16+"] },
  { id: "Mar_M", topic: ["marital"], age: ["23-28"], sex: ["male"], keywords: ["men", "marriage", "23-28"] },
  { id: "Mar_W", topic: ["marital"], age: ["23-28"], sex: ["female"], keywords: ["women", "marriage", "23-28"] },

  // Occupation
  { id: "Occup", topic: ["occupation"], age: ["16+"], keywords: ["occupation", "jobs", "16+"] },
  { id: "OccupAsian", race: ["asian"], topic: ["occupation"], age: ["25-34"], keywords: ["asian", "occupation", "25-34"] },
  { id: "OccupAsianAll", race: ["asian"], topic: ["occupation"], age: ["16+"], keywords: ["asian", "occupation", "16+"] },
  { id: "OccupHisp", race: ["hispanic"], topic: ["occupation"], age: ["24-34"], keywords: ["hispanic", "occupation", "24-34"] },
  { id: "OccuHispAll", race: ["hispanic"], topic: ["occupation"], age: ["16+"], keywords: ["hispanic", "occupation", "16+"] },
  { id: "OccupImm_25", topic: ["occupation"], age: ["25-34"], keywords: ["immigrant", "occupation", "25-34"] },
  { id: "OccupImm_35", topic: ["occupation"], age: ["35-44"], keywords: ["immigrant", "occupation", "35-44"] },

  // Poverty / Structure
  { id: "FamPov", topic: ["poverty"], keywords: ["family", "poverty"] },
  { id: "PovEduc", topic: ["poverty", "education"], age: ["25+"], keywords: ["poverty", "education", "25+"] },
  { id: "PopPov", topic: ["poverty"], keywords: ["population", "poverty"] },
  { id: "PopStruc", topic: ["population structure"], keywords: ["population structure", "age", "gender"] },

  // Location
  { id: "PopCA", topic: ["population"], keywords: ["california", "ca", "population"] },
  { id: "PopGA", topic: ["population"], keywords: ["georgia", "ga", "population"] },
  { id: "PopGeo", topic: ["population"], keywords: ["geographic", "geo", "population"] },
  { id: "PopMI", topic: ["population"], keywords: ["michigan", "mi", "population"] },
  { id: "PopUSA", topic: ["population"], keywords: ["usa", "united states", "population"] }
];

/***********************
 * TREND DATASETS
 ***********************/
const TREND_DATASETS = [
  {
    id: "educ",
    topic: ["education"],
    age: ["25+"],
    keywords: ["education", "25+", "adults"]
  },
  {
    id: "EducOccup",
    topic: ["education", "occupation"],
    age: ["16+"],
    keywords: ["education", "occupation", "16+", "working age"]
  },
  {
    id: "Elderly",
    topic: ["population"],
    age: ["65+"],
    keywords: ["elderly", "aging", "65+", "seniors"]
  },
  {
    id: "Employ",
    topic: ["employment"],
    age: ["16+"],
    keywords: ["employment", "labor force", "16+", "working age"]
  },
  {
    id: "FamPov",
    topic: ["poverty"],
    age: ["15+"],
    keywords: ["family", "poverty", "15+"]
  },
  {
    id: "Household",
    topic: ["households"],
    age: ["15+"],
    keywords: ["household", "family", "15+"]
  },
  {
    id: "Marital",
    topic: ["marital"],
    age: ["15+"],
    keywords: ["marital", "marriage", "15+"]
  },
  {
    id: "Pop",
    topic: ["population"],
    keywords: ["population"]
  },
  {
    id: "PopPov",
    topic: ["poverty"],
    keywords: ["poverty"]
  },
  {
    id: "PopStruc",
    topic: ["population structure"],
    keywords: ["population structure", "age", "gender"]
  }
];


/***********************
 * BUILD DATASETS
 ***********************/
const YEAR_DATASETS = YEAR_COLLECTIONS.flatMap(y =>
  BASE_DATASETS.map(d => ({
    id: d.id,
    race: (d.race || []).map(v => v.toLowerCase()),
    topic: (d.topic || []).map(v => v.toLowerCase()),
    age: (d.age || []).map(v => v.toLowerCase()),
    sex: (d.sex || []).map(v => v.toLowerCase()),
    yearTag: [y.year],
    keywords: [...(d.keywords || []).map(v => v.toLowerCase()), y.year],
    year: y.year,
    collection: y.collection,
    survey: y.survey
  }))
);

const TREND_DATASET_EXPANDED = TREND_COLLECTIONS.flatMap(t =>
  TREND_DATASETS.map(d => ({
    id: d.id,
    race: [],
    topic: (d.topic || []).map(v => v.toLowerCase()),
    age: (d.age || []).map(v => v.toLowerCase()),
    sex: [],
    yearTag: ["trend"],
    keywords: [...(d.keywords || []).map(v => v.toLowerCase()), "trend"],
    year: "trend",
    collection: t.collection,
    survey: "trend"
  }))
);

const DATASETS = [...YEAR_DATASETS, ...TREND_DATASET_EXPANDED];
