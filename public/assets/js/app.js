$(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).find(".burger-id").attr("value");
    console.log("id", burger_id);
    $.ajax({
        method: "PUT",
        url: "/burger/eat/" + burger_id
    }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
    })

})