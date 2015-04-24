$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "tryme.txt.numbers",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});