function replaceImgText(html) {
    var index = 0;
    arrayPaginadoBobyEmail = [];
    html = html.replace(/<img[^>]*src="data:image\/(bmp|dds|gif|jpg|jpeg|png|psd|pspimage|tga|thm|tif|tiff|yuv|ai|eps|ps|svg);base64,.*?"[^>]*>/gi,
        function (img) {
            index = index + 1; 
            arrayPaginadoBobyEmail.push({ index: index + '!@#imgeHere!@#', img: img });
            return index + '!@#imgeHere!@#';
    });
    return html.trim();
}
