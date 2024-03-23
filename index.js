// Add an Object Property Using Dot or Bracket Notation
const circle = {};
circle.radius = 5;
circle["diameter"] = 10;
circle.circumference = circle.diameter * Math.PI;
circle["area"] = Math.PI * circle.radius ** 2;

// Modify a Property Using Dot or Bracket Notation
const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};
mondayMenu.fries = "Sweet potato";

// Remove a Property from an Object
const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};
delete wednesdayMenu.salad;

// Identify the Relationship Between Arrays and Objects
const myArray = [];
myArray.summary = "Empty array!";
myArray["summary"] = "This array is totally empty.";
myArray.push(2, 3, 5, 7);
