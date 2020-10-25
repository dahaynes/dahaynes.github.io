function loadMetaData(jsonArray) {
    console.log("Loaded");
    
    $.each(jsonArray, function(arrayKey, arrayItem ) {
        console.log(arrayItem.highlights)
        var theHighlights = '<ul>'
         $.each(arrayItem.highlights, function(c, highlight){
            console.log(highlight)
            theHighlights = theHighlights+  `<li>${highlight}</li>`
             console.log(theHighlights)
        });
        var highlighlist = theHighlights + "</ul>";
        console.log(highlighlist)


        /* This is a template string a mixture of JS and HTML */
        var articleCard = `<div class="articleCard">
                            <div class="articleTitle">${arrayItem.title} </div> 
                            <div class="author">${arrayItem.author}</div> <div class="articleYear">${arrayItem.year} </div><div class="articleJournal">${arrayItem.journal} </div> 
                            <div class="doi"><a href="${arrayItem.doi}">Get the article</a></div>
                            <div class="abstract">See the abstract</div>
                            <div class="articleDescription">${arrayItem.abstract}</div>
                            <div class="articleHighlights">See Article Highlights</div>
                            <div class="highlightText">${highlighlist}</div>
                            <div class="citation">${arrayItem.cite}</div>
                            </div>
                            `
        $("#outputDiv").append(articleCard)
        /* console.log(jsonArray[arrayItem].year) */
        /* console.log(arrayItem.year) */
        /* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
      }); 

    
};




$(document).ready(function () {
    
    loadMetaData(metadata);

    $(".abstract").on("click", function () {
        console.log("I was clicked")


    });


    
});


var metadata = [
    
    {
        "type": "peer-review",
        "title": "Array Databases",
        "journal": "The Geographic Information Science & Technology Body of Knowledge",
        "year": 2020,
        "author": "Haynes, D.,",
        "doi": "10.22224/gistbok/2019.3.2",
        "highlights": ["Review of Array Databases", "thing2", "SciDB"],
        "abstract": "Array Databases are a class of No-SQL databases that store, manage, and analyze data whose natural structures are arrays. With the growth of large volumes of spatial data (i.e., satellite imagery) there is a pressing need to have new ways to store and manipulate array data. Currently, there are several databases and platforms that have extended their initial architectures to support for multidimensional arrays. However, extending a platform to support a multidimensional array comes at a performance cost, when compared to Array Databases who specialize in the storage, retrieval, and processing of n-dimensional data."
    },
    {
        "type": "peer-review",
        "title": "IPUMS Terra: Integrated Big Heterogeneous Spatio-Temporal Data Analysis System",
        "journal": "journal of Geographical Systems",
        "year": 2018,
        "author": "Haynes, D., Jokela, A., Manson, S.,",
        "doi": "10.1007/s10109-018-0277-2"
    },
    {
        "type": "peer-review",
        "title": "Terra Populus’ Architecture for Integrated Big Geospatial Services",
        "journal": "Transactions in GIS",
        "year": 2017,
        "author": "Haynes, D., Manson, S., Shook, E.,"
    },
    {
        "type": "peer-review",
        "title": "Terra Populus: Workflows for Integrating and Harmonizing Geospatial Population and Environmental Data",
        "journal": "journal of Map and Geography Libraries",
        "year": 2015,
        "author": "Kugler, T., Van Riper, D., Mason, S., Haynes, D., Donato, J., Stinebaugh, K.,"
    }
]

console.log("here it is",  metadata)

