var serviceBase = 'https://api.dialugo.com/';
//  var serviceBase = 'http://localhost:23701/';

var widgetSettings = {};
var buscaChatSettings = true;
var chatAberto = false;
var idUsuarioGVP = "";

(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("head")[0];
    s1.src = 'https://cdn.pubnub.com/sdk/javascript/pubnub.4.27.2.js';
    s0.appendChild(s1);

    setTimeout(function () {
        idUsuarioGVP = localStorage.getItem("idUsuarioGVP");

        console.log(localStorage.getItem("idUsuarioGVP"));

        var objSend = getSession();
        objSend.idAcesso = idUsuarioGVP;
        objSend.registraAcesso = true;

        $.ajax({
            type: "GET",
            url: serviceBase + "api/chat/accessrules?j=" + JSON.stringify(objSend),
            success: function (response) {
                if (response.acao > 0) {
                    if (idUsuarioGVP == null) {
                        localStorage.setItem("idUsuarioGVP", response.idUsuario);
                        idUsuarioGVP = response.idUsuario;
                    }
                    else if (idUsuarioGVP.toString() == "undefined") {
                        localStorage.setItem("idUsuarioGVP", response.idUsuario);
                        idUsuarioGVP = response.idUsuario;
                    }

                    console.log(localStorage.getItem("idUsuarioGVP"));

                    widgetSettings = response.data;
                    criaBotao();

                    setTimeout(function () { checaStatusChat(); }, 5000);

                    var pubnub = new PubNub({
                        publish_key: 'pub-c-969ee8ca-b4a9-4ea4-b5f5-02a0ef43276d',
                        subscribe_key: 'sub-c-a7016bf6-1152-11ea-a365-4a09dafe54f0',
                        ssl: true,
                        uuid: localStorage.getItem("idUsuarioGVP"),
                        key: GVP_AccountKey
                    });
                    pubnub.subscribe({
                        channels: ['DialugoMonitoring'],
                        triggerEvents: ['callback']
                    });
                }
            }
        });

    }, 500);

})();

function criaBotao() {
    var frameHidden = document.createElement("iframe");
    frameHidden.id = "iframeHid";
    frameHidden.style.cssText = "height: 60px !important; min-height: 60px !important; outline: currentcolor none medium !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; opacity: 1 !important; inset: auto 10px 0px auto !important; position: fixed !important; border: 0px none !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; max-height: 60px !important; width: 126px !important; min-width: 126px !important; max-width: 126px !important; border-radius: 0px !important; transform: rotate(0deg) translateZ(0px) !important; transform-origin: 0px center 0px !important; margin: 0px !important; display: block !important;";
    frameHidden.src = "app/views/monitoramentohidden.html";
    frameHidden.onclick = function () {
        if (widgetSettings.settings.isPopUp) {
            var myWindow = window.open("app/views/monitoramento.html?id=" + widgetSettings.id, 'popup', "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,resize=0,width=400,height=600,left=240,top=212");
            myWindow.focus();
        }
        else {
            chatAberto = true;
            document.getElementById("iframeHid").remove();
            criaChat();
        }
    };

    if (!widgetSettings.settings.somenteMonitoramento)
        document.body.appendChild(frameHidden);

    montaOffline();
}
function criaChat() {
    var frame = document.createElement("iframe");
    frame.id = "iframeShow";
    frame.style.cssText = "height: 522px !important; min-height: 522px !important; max-height: 60px !important; outline: currentcolor none medium !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; background: transparent none repeat scroll 0% 0% !important; opacity: 1 !important; inset: auto 10px 0px auto !important; position: fixed !important; border: 0px none !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; width: 350px !important; min-width: 350px !important; max-width: 350px !important; border-radius: 0px !important; transform: rotate(0deg) translateZ(0px) !important; transform-origin: 0px center 0px !important; margin: 0px !important; display: block !important;"
    frame.src = "app/views/monitoramento.html?id=" + widgetSettings.id;
    frame.onclick = function () {
        chatAberto = false;
        document.getElementById("iframeShow").remove();
        criaBotao();
    };
    document.body.appendChild(frame);
}
function checaStatusChat() {
    setTimeout(function () {
        var objSend = getSession();
        objSend.idAcesso = idUsuarioGVP;
        objSend.registraAcesso = false;

        if (buscaChatSettings && !chatAberto) {
            buscaChatSettings = false;
            $.ajax({
                type: "GET",
                url: serviceBase + "api/chat/accessrules?j=" + JSON.stringify(objSend),
                success: function (response) {
                    buscaChatSettings = true;
                    if (response.acao > 0) {
                        if (idUsuarioGVP == null) {
                            localStorage.setItem("idUsuarioGVP", response.idUsuario);
                            idUsuarioGVP = response.idUsuario;
                        }
                        if (idUsuarioGVP == "undefined") {
                            localStorage.setItem("idUsuarioGVP", response.idUsuario);
                            idUsuarioGVP = response.idUsuario;
                        }

                        widgetSettings = response.data;
                        $('#HiddButton', $('#iframeHid').contents()).css({
                            "color": widgetSettings.style.headerFontColor,
                            "background-color": widgetSettings.style.headerBgColor
                        });
                        $('#HiddButton', $('#iframeHid').contents()).html(widgetSettings.conteudo.txtAlerta);
                    }
                }
            });
        }

        checaStatusChat();
    }, 2000);
}
function mobileAndTabletcheck() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
function getSession() {
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    var strMyBrowser = isOpera ? "pli-opera" :
        isFirefox ? "pli-firefox" :
        isSafari ? "pli-safari" :
        isIE ? "pli-internet-explorer" :
        isEdge ? "pli-windows-microsoft" :
        isChrome ? "pli-chrome" :
        isBlink ? "pli-redhat" :
        "pli-debian";

    var objSend = { key: GVP_AccountKey, ismobile: mobileAndTabletcheck(), browser: strMyBrowser, currentPage: window.location.href.replace("#", "_"), lastPage: document.referrer };

    return objSend;
}
function montaOffline() {
    setTimeout(function () {
        $('#HiddButton', $('#iframeHid').contents()).css({
            "color": widgetSettings.style.headerFontColor,
            "background-color": widgetSettings.style.headerBgColor
        });
        $('#HiddButton', $('#iframeHid').contents()).html(widgetSettings.conteudo.txtAlerta);
        buscaChatSettings = true;
    }, 2000);
}
