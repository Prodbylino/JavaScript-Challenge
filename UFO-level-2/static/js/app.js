// read data from data.js
var tableData = data;

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

//Filter
// Select the filter button
var button = d3.select("#filter-btn");
// Select the reset button
var reset_button = d3.select("#reset-btn");

// Select the form
// Create event handlers 
button.on("click", filterTable);
reset_button.on("click", resetTable);


function filterTable() {
  // Prevent the page from refreshing
   d3.event.preventDefault();

  // Clear all the previous html
  d3.select("tbody").html("");
  
  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  // Filter the data by the values entered into the input fields
  input_value_list = [inputValueDate,inputValueCity,inputValueState,inputValueCountry,inputValueShape];
  filteredData = tableData;
  input_value_list.forEach(element => {
      switch(element !== ""){
        case element === inputValueDate:
          filteredData = filteredData.filter( filtered_data => filtered_data.datetime === inputValueDate);
          break;
        case element === inputValueCity:
          filteredData = filteredData.filter( filtered_data => filtered_data.city === inputValueCity);
          break;
        case element === inputValueState:
          filteredData = filteredData.filter( filtered_data => filtered_data.state === inputValueState);
          break;
        case element === inputValueCountry:
          filteredData = filteredData.filter( filtered_data => filtered_data.country === inputValueCountry);
          break;
        case element === inputValueShape:
          filteredData = filteredData.filter( filtered_data => filtered_data.shape === inputValueShape);
          break;
        default:
          filteredData = filteredData; // don't do anything if error
      }; 
  }); 
  // Return the filtered table
  console.log(filteredData);
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
