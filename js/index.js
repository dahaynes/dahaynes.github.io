function loadMetaData() {
    console.log("Loaded");
    data = $.getJSON("C:\git\dahaynes.github.io\js\articles-metadata.json"), function(data)  {
    var items = [];
    /* $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      }); */
    $.each(data, function(i, field) {
        console.log(field)
        }) 
    }
};


$(document).ready(function () {
    
    loadMetaData()

    
});



