const personalInfo = {
  title: "Personal info",
  description: "Please provide your name, email address, and phone number",
  nameInput: "e.g. Stephen ",
  emailAddress: "e.g. stephenking@lorem.com",
  phoneInput: "e.g. +254 796598108",
};
const plans = {
  title: "Select Module",
  // disc: "You have the option of monthly or yearly billing",
  option: [
    ["Arcade", "$9/mo", "$90/yr", "./icon-arcade.svg", "0"],
    ["Advanced", "$12/mo", "$120/yr", "./icon-advanced.svg", "1"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "2"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "3"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "4"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "5"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "6"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "7"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "8"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "9"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "10"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "11"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "12"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "13"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "14"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "15"],
    ["pro", "$15/mo", "$120/yr", "./icon-pro.svg", "16"],
  ],
};
const addOns = {
  title: "Pick add-ons",
  disc: "Add-ons help enhance your gaming experience.",
  checkImg: "./icon-checkmark.svg",
  ons: [
    ["Online service", "Access to multiplayer games", "+$1/mo", "+$10/yr", "1"],
    ["Larger storage", "Extra 1TB of cloud save", "+$2/mo", "+$20/yr", "2"],
    [
      "Customizable profile",
      "Custom theme on your profile",
      "+$2/mo",
      "+$20/yr",
      "3",
    ],
  ],
};
const stepsDate = [
  ["STEP 1", "SIGN UP"],
  ["STEP 2", "SELECT MODULES"],
  ["STEP 3", "PAYMENT METHOD"]
];
export { personalInfo, plans, addOns, stepsDate };
