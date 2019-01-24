    var form = $('#conteudo-gvp'),
        form1 = $('.form1'),
        cache_width = form.width(),
        a4 = [595.28, 841.89],
        doc = null;

function createPDF() {

    getCanvas().then(function (canvas) {
        var img = canvas.toDataURL("image/png");

        doc = new jsPDF({ unit: 'mm', format: 'a4' });
        doc.addImage(img, 'JPEG', 0, 0, 211, 298);

        doc.save('Relatorio-de-mencoes.pdf');
        form.width(cache_width);
        Ext.getBody().unmask();
    });

}

function getCanvas() {
    form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
    return html2canvas(form, {
        imageTimeout: 2000,
        removeContainer: true
    });
}