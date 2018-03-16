// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body

// 1: On Load

// First thing: ask the back end for json with all animals
$.getJSON("/all", function(data) {
// Call our function to generate a table body
    displayResults(data); //this is not run until all functions are run. JavaScript (the way it works)...
    //... async all the way. Calls display data last.. First grabs the JSON with the .get and loads that into ...
    //... into data. ->
});
// ==========

// -> Then runs that data into this function after its been grabbed from server. This displays
// the html.
function displayResults(data) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  data.forEach(function(zooAnimals) {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr><td>" + zooAnimals.name + "</td>" +
        "<td>" + zooAnimals.numlegs + "</td>" +
        "<td>" + zooAnimals.class + "</td>" +
        "<td>" + zooAnimals.weight + "</td>" +
        "<td>" + zooAnimals.whatIWouldReallyCallIt + "</td></tr>");
  });

}


// Bonus function to change "active" header
function setActive(selector) {
  // remove and apply 'active' class to distinguish which column we sorted by
  $("th").removeClass("active");
  $(selector).addClass("active");
}





// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#weight-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#animal-weight");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/weight", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#name-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#animal-name");

  // Do an api call to the back end for json with all animals sorted by name
  $.getJSON("/name", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });



});