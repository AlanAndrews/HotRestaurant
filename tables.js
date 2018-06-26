$.get("/api/tables/", function(data) {
console.log(data);
for(var i=0; i<4; i++){
    if (data[i]) {
        $("#Tables").show();
        var table=$("<div>");
        table.text(data[i].id);
        $("#Tables").append(table);
    }
    else {
        $("#name").text("There are no reservations");
        $("#Tables").hide();
    }
}
if(data.length>4){
    for(var i=4; i<data.length; i++){
        if (data[i]) {
            $("#Waitlist").show();
            var table=$("<div>");
            table.text(data[i].id);
            $("#Waitlist").append(table);
        }
        else {
            $("#name").text("There is no waitlist");
            $("#Waitlist").hide();
        }
    }
}
});
