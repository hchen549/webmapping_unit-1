//initialize function called when the script loads
function initialize() {
  cities();
}

//function to create a table with cities and their populations
function cities() {
  //define two arrays for cities and population
  var cityPop = [
    {
      city: "Madison",
      population: 233209,
    },
    {
      city: "Milwaukee",
      population: 594833,
    },
    {
      city: "Green Bay",
      population: 104057,
    },
    {
      city: "Superior",
      population: 27244,
    },
  ];

  //append the table element to the div
  $("#mydiv").append("<table>");

  //append a header row to the table
  $("table").append("<tr>");

  //add the "City" and "Population" columns to the header row
  $("tr").append("<th>City</th><th>Population</th>");

  //loop to add a new row for each city
  for (var i = 0; i < cityPop.length; i++) {
    //assign longer html strings to a variable
    var rowHtml =
      "<tr><td>" +
      cityPop[i].city +
      "</td><td>" +
      cityPop[i].population +
      "</td></tr>";
    //add the row's html string to the table
    $("table").append(rowHtml);
  }

  addColumns(cityPop);
  addEvents();
}

// Add a new column to the table whose value depends on the cities' population
function addColumns(cityPop) {
  $("tr").each(function (i) {
    // Add rows under the new column
    if (i == 0) {
      // Add a header for the new column
      $(this).append("<th>City Size</th>");
    } else {
      var citySize;
      // Determine the appropriate category based on the population of cities
      if (cityPop[i - 1].population < 100000) {
        citySize = "Small";
      } else if (cityPop[i - 1].population < 500000) {
        citySize = "Medium";
      } else {
        citySize = "Large";
      }
      //  Add a new cell in the last column
      $(this).append("<td>" + citySize + "</td>");
    }
  });
}

// Add two events associated with action on the table
function addEvents() {
  // Add an event listeners when mouse over the table
  $("table").mouseover(function () {
    var color = "rgb(";

    // Randomly create three number for the color
    for (var i = 0; i < 3; i++) {
      // Randomly generate a number from 0 to 255
      var random = Math.round(Math.random() * 255);

      color += random;

      //   Add comma or ending parentheses depending on the location of the number
      if (i < 2) {
        color += ",";
      } else {
        color += ")";
      }
    }
    // Reset the color value
    $(this).css("color", color);
  });

  //   Define a new function triggered by clicking on the table
  function clickme() {
    alert("Hey, you clicked me!");
  }

  //   Add eventListener for click on the table
  $("table").on("click", clickme);
}

//call the initialize function when the document has loaded
$(document).ready(initialize);
