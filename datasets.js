/***********************
 * YEAR COLLECTIONS
 ***********************/
const YEAR_COLLECTIONS = [
  { year: "2024", collection: "acs2024", survey: "acs_1yr" },
  { year: "2023", collection: "acs2023", survey: "acs_1yr" },
  { year: "2022", collection: "acs2022", survey: "acs_1yr" },
  { year: "2021", collection: "acs2021", survey: "acs_1yr" },
  { year: "2020", collection: "acs2020", survey: "acs_1yr" },
  { year: "2019", collection: "acs2019", survey: "acs_1yr" },
  { year: "2010", collection: "acs2010", survey: "acs_3yr" },
  { year: "2008", collection: "acs2008", survey: "acs_3yr" }
];

/***********************
 * TREND COLLECTIONS
 ***********************/
const TREND_COLLECTIONS = [
  { collection: "acs2020trend" },
  { collection: "acs2016trend" },
  { collection: "acs2010trend" },
  { collection: "acs2008trend" }
];

/***********************
 * MASTER DATASET LIST
 ***********************/
const BASE_DATASETS = [

  // Population
  { id: "AsianPop", topic: ["population","race"], keywords: ["asian","population"] },
  { id: "HispPop", topic: ["population","race"], keywords: ["hispanic","latino","population"] },
  { id: "ImmPop", topic: ["population","immigration"], keywords: ["immigrant","foreign born","population"] },
  { id: "PopCA", topic: ["population","geography"], keywords: ["california","population"] },
  { id: "PopGA", topic: ["population","geography"], keywords: ["georgia","population"] },
  { id: "PopGeo", topic: ["population","geography"], keywords: ["geographic","population"] },
  { id: "PopMI", topic: ["population","geography"], keywords: ["michigan","population"] },
  { id: "PopUSA", topic: ["population"], keywords: ["usa","united states","population"] },

  // Poverty
  { id: "FamPov", topic: ["poverty","family"], keywords: ["family","poverty"] },
  { id: "PopPov", topic: ["poverty", "population"], keywords: ["poverty"] },
  { id: "PovEduc", topic: ["poverty","education"], keywords: ["poverty","education"] },
  { id: "EldrPov", topic: ["poverty","aging"], keywords: ["elderly","poverty","65+"] },
  { id: "ChildPov", topic: ["poverty","children"], keywords: ["children","poverty"] },
  { id: "MarPov_W", topic: ["poverty","marital"], keywords: ["women","marriage","poverty"] },

  // Earnings / Income
  { id: "Earn", topic: ["earnings","income"], keywords: ["earnings","income","wages"] },
  { id: "EarnAsian", topic: ["earnings"], keywords: ["asian","earnings"] },
  { id: "EarnAsianAll", topic: ["earnings"], keywords: ["asian","earnings"] },
  { id: "EarnHisp", topic: ["earnings"], keywords: ["hispanic","earnings"] },
  { id: "EarnHispAll", topic: ["earnings"], keywords: ["hispanic","earnings"] },

  // Education
  { id: "EducAsian", topic: ["education"], keywords: ["asian","education"] },
  { id: "EducAsianAll", topic: ["education"], keywords: ["asian","education"] },
  { id: "EducImm", topic: ["education","immigration"], keywords: ["immigrant","education"] },
  { id: "EducOccup", topic: ["education","occupation"], keywords: ["education","occupation"] },
  { id: "ChildGrad", topic: ["education","children"], keywords: ["children","graduation","education"] },
  { id: "ChildSch", topic: ["education","children"], keywords: ["children","school"] },
  { id: "EmpEduc", topic: ["education","employment"], keywords: ["education","employment"] },
  { id: "MarEduc", topic: ["education","marital"], keywords: ["marriage","education"] },

  // Employment
  { id: "Employ", topic: ["employment","labor"], keywords: ["employment","labor force"] },
  { id: "EmpAsian", topic: ["employment"], keywords: ["asian","employment"] },
  { id: "EmpAsianAll", topic: ["employment"], keywords: ["asian","employment"] },
  { id: "EmpHisp", topic: ["employment"], keywords: ["hispanic","employment"] },
  { id: "EmpHispAll", topic: ["employment"], keywords: ["hispanic","employment"] },
  { id: "Emp_W", topic: ["employment","gender"], keywords: ["women","employment"] },
  { id: "EldrEmp", topic: ["employment","aging"], keywords: ["elderly","employment"] },

  // Marital / Family
  { id: "MarAsian", topic: ["marital","family"], keywords: ["asian","marriage"] },
  { id: "MarHisp", topic: ["marital","family"], keywords: ["hispanic","marriage"] },
  { id: "Mar_M", topic: ["marital","gender"], keywords: ["men","marriage"] },
  { id: "Mar_W", topic: ["marital","gender"], keywords: ["women","marriage"] },
  { id: "MarEmp_W", topic: ["marital","employment"], keywords: ["women","marriage","employment"] },
  { id: "Cohab_M", topic: ["family"], keywords: ["cohabitation","men"] },
  { id: "Cohab_W", topic: ["family"], keywords: ["cohabitation","women"] },
  { id: "Households", topic: ["households","family"], keywords: ["household","family"] },

  // Occupation
  { id: "Occup", topic: ["occupation"], keywords: ["occupation","jobs"] },
  { id: "OccupAsian", topic: ["occupation"], keywords: ["asian","occupation"] },
  { id: "OccupAsianAll", topic: ["occupation"], keywords: ["asian","occupation"] },
  { id: "OccupHisp", topic: ["occupation"], keywords: ["hispanic","occupation"] },
  { id: "OccupHispAll", topic: ["occupation"], keywords: ["hispanic","occupation"] },
  { id: "OccupImm_25", topic: ["occupation","immigration"], keywords: ["immigrant","occupation", "immigration"] },
  { id: "OccupImm_35", topic: ["occupation","immigration"], keywords: ["immigrant","occupation", "immigration"] },
  { id: "Doctors", topic: ["occupation"], keywords: ["doctors","medical"] },
  { id: "Lawyers", topic: ["occupation"], keywords: ["lawyers","legal"] },

  // Housing
  { id: "Housing", topic: ["households"], keywords: ["housing","rent","home"] },

  // Aging / Disability
  { id: "EldrDisab", topic: ["disability","aging"], keywords: ["elderly","disability"] },
  { id: "EldrHH", topic: ["households","aging"], keywords: ["elderly","household"] }
];



const TREND_DATASETS = [
  { id: "educ", topic: ["education"], keywords: ["education","trend"] },
  { id: "EducOccup", topic: ["education","occupation"], keywords: ["education","occupation","trend"] },
  { id: "Elderly", topic: ["aging"], keywords: ["elderly","aging","trend"] },
  { id: "Employ", topic: ["employment"], keywords: ["employment","labor","trend"] },
  { id: "FamPov", topic: ["poverty","family"], keywords: ["family","poverty","trend"] },
  { id: "Household", topic: ["households","family"], keywords: ["household","family","trend"] },
  { id: "Marital", topic: ["marital","family"], keywords: ["marriage","marital","trend"] },
  { id: "Pop", topic: ["population"], keywords: ["population","trend"] },
  { id: "PopPov", topic: ["poverty"], keywords: ["poverty","trend"] },
  { id: "PopStruc", topic: ["population"], keywords: ["population structure","age","trend"] }
];



const STATE_COLLECTIONS = [
  { year: "2008", collection: "geo2008"},
  { year: "2010", collection: "geo2010"},
  { year: "2012", collection: "geo2012"},
  { year: "2016", collection: "geo2016" },
  { year: "2020", collection: "geo2020"}, 
  { year: "2021", collection: "geo2021"}, 
  { year: "2023", collection: "geo2023"},
  { year: "2024", collection: "geo2024"}
];


/***********************
 * BUILD YEAR DATASETS
 ***********************/
const YEAR_DATASETS = YEAR_COLLECTIONS.flatMap(y =>
  BASE_DATASETS.map(d => ({
    id: d.id,
    race: (d.race || []).map(v => v.toLowerCase()),
    topic: (d.topic || []).map(v => v.toLowerCase()),
    age: (d.age || []).map(v => v.toLowerCase()),
    sex: (d.sex || []).map(v => v.toLowerCase()),
    yearTag: [String(y.year)],
    keywords: [...(d.keywords || []).map(v => v.toLowerCase()), y.year],
    year: y.year,
    collection: y.collection,
    survey: y.survey,
    collectionType: "main"   //  NEW
  }))
);

/***********************
 * BUILD TREND DATASETS
 ***********************/
const TREND_DATASET_EXPANDED = TREND_COLLECTIONS.flatMap(t => {

  // Extract year from collection string
  const trendYear = t.collection.match(/\d{4}/)[0];

  return TREND_DATASETS.map(d => ({
    id: d.id,
    topic: d.topic.map(v => v.toLowerCase()),
    yearTag: [trendYear],      //  now filterable by year
    keywords: [...d.keywords.map(v => v.toLowerCase()), trendYear],
    year: trendYear,           //  shows real year
    collection: t.collection,
    survey: "trend",
    collectionType: "trend"
  }));

});


const STATES = [
"AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL",
"GA","HI","IA","ID","IL","IN","KS","KY","LA","MA",
"MD","ME","MI","MN","MO","MS","MT","NC","ND","NE",
"NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI",
"SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"
];

const STATE_NAMES = {
  "AL":"alabama","AK":"alaska","AZ":"arizona","AR":"arkansas","CA":"california",
  "CO":"colorado","CT":"connecticut","DE":"delaware","FL":"florida","GA":"georgia",
  "HI":"hawaii","ID":"idaho","IL":"illinois","IN":"indiana","IA":"iowa",
  "KS":"kansas","KY":"kentucky","LA":"louisiana","ME":"maine","MD":"maryland",
  "MA":"massachusetts","MI":"michigan","MN":"minnesota","MS":"mississippi",
  "MO":"missouri","MT":"montana","NE":"nebraska","NV":"nevada","NH":"new hampshire",
  "NJ":"new jersey","NM":"new mexico","NY":"new york","NC":"north carolina",
  "ND":"north dakota","OH":"ohio","OK":"oklahoma","OR":"oregon","PA":"pennsylvania",
  "RI":"rhode island","SC":"south carolina","SD":"south dakota","TN":"tennessee",
  "TX":"texas","UT":"utah","VT":"vermont","VA":"virginia","WA":"washington",
  "WI":"wisconsin","WV":"west virginia","WY":"wyoming","DC":"district of columbia",
  "STATES":"all"
};


/***********************
 * BUILD GEO DATASETS
 ***********************/
const GEO_DATASETS = STATE_COLLECTIONS.flatMap(g => {

  const states = [...STATES, "STATES"];

  return states.map(s => {

    const stateName = STATE_NAMES[s] || "states";

    return {
      id: `Earn_${s}`,

      topic: ["earnings", "employment", "geography"],

      yearTag: [String(g.year)],

      keywords: [
        s.toLowerCase(),   // "mi"
        stateName,         // "michigan"
        g.year
      ],

      year: g.year,
      collection: g.collection,
      survey: "geo",
      collectionType: "state"
    };

  });

});

/***********************
 * FINAL
 ***********************/
const DATASETS = [
  ...YEAR_DATASETS,
  ...TREND_DATASET_EXPANDED,
  ...GEO_DATASETS
];
