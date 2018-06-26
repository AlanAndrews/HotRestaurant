 $("#add-btn").on("click", function(event) {
      event.preventDefault();
      var newTable = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        id: $("#id").val().trim()
      };

      // Question: What does this code do??
      $.post("/api/tables", newTable)
        .then(function(data) {
          console.log("reserve.html", data);
          alert("Adding reservation");
        });
});