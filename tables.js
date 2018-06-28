$.get("/api/tables/", function(data) {
    console.log(data)
    $("#reservations").html("");
    $("#waitList").html("");
    var reservationListData = data.slice(0, 5);
    var waitListData = data.slice(5);
    for(var i=0; i<reservationListData.length; i++){
        $("#reservations").append($("<div>").attr("class", "alert alert-secondary").attr("role", "alert").attr("id", "reservation" + i));
        $("#reservation" + i).append($("<span>").attr("class", "badge badge-pill badge-primary").attr("id", "res" + i));
        $("#res" + i).html(i + 1);
        $("#reservation" + i).append(" | " + reservationListData[i].name)  
    };
    for(var i = 0; i < waitListData.length; i++){
    
        $("#waitList").append($("<div>").attr("class", "alert alert-secondary").attr("role", "alert").attr("id", "waitList" + i));
        $("#waitList" + i).append($("<span>").attr("class", "badge badge-pill badge-primary").attr("id", "wl" + i));
        $("#wl" + i).html(i + 1);
        $("#waitList" + i).append(" | " + waitListData[i].name)  
    };
});
