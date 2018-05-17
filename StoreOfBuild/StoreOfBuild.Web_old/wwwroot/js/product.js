function save() {
    var obj = {
        Id: $("#productId").val(),
        Name: $('#productName').val(),
        CategoryId: $('#productCategoryId').val(),
        Price: $('#productPrice').val(),
        StockQuatity: $('#productStockQuatity').val(),

    };
    console.log("Entered method");
    $.ajax({
        type: "POST",
        url: '/Product/Edit',
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