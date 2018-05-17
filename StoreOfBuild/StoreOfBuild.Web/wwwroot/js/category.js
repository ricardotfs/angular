function create() {
    var obj = { Id: $("#id").val(), Name: $('#name').val() };
    console.log("Entered method");
    $.ajax({
        type: "POST",
        url: '/Category/CreateEdit',
        data: obj,
        error: function (xhr, status, errorThrown) {
            var err = "Status: " + status + " " + errorThrown;
            console.log(err);
        }
    }).done(function (data) {
        $("#name").val('');
        console.log(data.result);
    })
}