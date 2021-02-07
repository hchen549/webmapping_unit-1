// Add all scripts to the JS folder
// function myFunc() {
//   const mydiv = document.querySelector("#mydiv");
//   mydiv.innerHTML = "Hello World";
// }

function initialize() {
  cities();
}

//function to create a table with cities and their populations
// function cities() {
//   //define two arrays for cities and population
//   var cities = ["Madison", "Milwaukee", "Green Bay", "Superior"];
//   var population = [233209, 594833, 104057, 27244];

//   const table = document.createElement("table");
//   const columnName = document.createElement("tr");
//   const cityColumn = document.createElement("th");
//   const popColumn = document.createElement("th");

//   cityColumn.innerHTML = "City";
//   popColumn.innerHTML = "Population";

//   columnName.appendChild(cityColumn);
//   columnName.appendChild(popColumn);

//   table.appendChild(columnName);

//   for (let i = 0; i < cities.length; i++) {
//     const row = document.createElement("tr");
//     const cityColumn = document.createElement("th");
//     const popColumn = document.createElement("th");

//     cityColumn.innerHTML = cities[i];
//     popColumn.innerHTML = population[i];

//     row.appendChild(cityColumn);
//     row.appendChild(popColumn);
//     table.appendChild(row);
//   }

//   var mydiv = document.getElementById("mydiv");
//   mydiv.appendChild(table);
// }

function cities() {
  const table = document.createElement("table");
  const columnName = document.createElement("tr");
  const cityColumn = document.createElement("td");
  const popColumn = document.createElement("td");

  cityColumn.innerHTML = "City";
  popColumn.innerHTML = "Population";

  columnName.appendChild(cityColumn);
  columnName.appendChild(popColumn);

  table.appendChild(columnName);
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

  cityPop.forEach((object) => {
    const row = document.createElement("tr");

    for (let property in object) {
      const td = document.createElement("td");
      td.innerHTML = object[property];
      row.appendChild(td);
    }

    table.appendChild(row);
  });

  var mydiv = document.getElementById("mydiv");
  mydiv.appendChild(table);
}
window.onload = initialize();
