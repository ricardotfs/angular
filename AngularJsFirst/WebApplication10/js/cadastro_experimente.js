function criaBotao() {
    var frame = document.createElement("iframe");
    frame.id = "iframeShow";
    frame.style.cssText = "outline: currentcolor none medium !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: transparent none repeat scroll 0% 0% !important; opacity: 1 !important; inset: auto 10px 0px auto !important; position: relative !important; border: 0px none !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; height: 550px !important;  width: 100% !important; min-width: 100% !important; max-width: 100% !important; border-radius: 0px !important; transform: rotate(0deg) translateZ(0px) !important; transform-origin: 0px center 0px !important; margin: 0px auto !important; display: block !important;"
    frame.src = "https://app.dialugo.com/app/views/experimentegratis.html";
    var placeHolder = document.getElementsByTagName("dialugoframe")[0];
    placeHolder.appendChild(frame);
}


(function () {
    criaBotao();
})();
