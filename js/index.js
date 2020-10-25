function loadMetaData(jsonArray) {
    console.log("Loaded");

    $.each(jsonArray, function(arrayKey, arrayItem ) {
        console.log(arrayItem.Year)
        /* This is a template string a mixture of JS and HTML */
        var articleCard = `<div class="articleCard"> <h1>${arrayItem.title} </h1> <h2>${arrayItem.Authors}</h2> <p>${arrayItem.Journal} </p> </div>`
        $("#outputDiv").append(articleCard)
        /* console.log(jsonArray[arrayItem].Year) */
        /* console.log(arrayItem.Year) */
        /* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
      }); 

    
};



$(document).ready(function () {
    
    loadMetaData(metadata);
/*     $.getJSON("https://gist.github.com/dahaynes/a944c39f21c97fcd8d92c9eff7afc4c2.js", function (data) {
        console.log(data.name); // Prints: Harry
        console.log(data.age); // Prints: 14
    }).fail(function () {
        console.log("An error has occurred.");
    }); */

    
});


var metadata = [
    
    {
        "type": "peer-review",
        "title": "Array Databases",
        "Journal": "The Geographic Information Science & Technology Body of Knowledge",
        "Year": 2020,
        "Authors": "Haynes, D.,"
    },
    {
        "type": "peer-review",
        "title": "IPUMS Terra: Integrated Big Heterogeneous Spatio-Temporal Data Analysis System",
        "Journal": "Journal of Geographical Systems",
        "Year": 2018,
        "Authors": "Haynes, D., Jokela, A., Manson, S.,"
    },
    {
        "type": "peer-review",
        "title": "Terra Populus’ Architecture for Integrated Big Geospeatial Services",
        "Journal": "Transactions in GIS",
        "Year": 2017,
        "Authors": "Haynes, D., Manson, S., Shook, E.,"
    },
    {
        "type": "peer-review",
        "title": "Terra Populus: Workflows for Integrating and Harmonizing Geospatial Population and Environmental Data",
        "Journal": "Journal of Map and Geography Libraries",
        "Year": 2015,
        "Authors": "Kugler, T., Van Riper, D., Mason, S., Haynes, D., Donato, J., Stinebaugh, K.,"
    }
]

console.log("here it is",  metadata)

