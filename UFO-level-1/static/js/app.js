// get data from data.js
var tableData = data;

// Display the table
// Clear all the previous html
d3.select("tbody").html("");
// Display the table
var tbody = d3.select("tbody");
tableData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// PART 2 - Form filter
// Select the button
var button = d3.select("#filter-btn");
// Select the reset button
var reset_button = d3.select("#reset-btn");
// Select the form
var form = d3.select("form");
// Create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// Reset the table on click
reset_button.on("click", resetTable);


function filterTable() {
  // Prevent the page from refreshing
   d3.event.preventDefault();
  // Clear all the previous html
  d3.select("tbody").html("");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // filter the data
  var filteredData = tableData.filter( filtered_data => filtered_data.datetime === inputValue);

  // Return the filtered table
  console.log(filteredData)
  var tbody = d3.select("tbody");
  filteredData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

function resetTable(){
  // Clear all the previous html
  d3.select("tbody").html("");
  // Get display the unfiltered data again in the table
  var tbody = d3.select("tbody");
  tableData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};