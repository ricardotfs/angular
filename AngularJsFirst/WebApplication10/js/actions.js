
function validaCampos(form) {

    var passou = true;

    $("#" + form + " .required").each(function (key, value) {
        $(value).removeClass("hasRequired");
        if (value.tagName == "SELECT") {
            if ($(value).val() === "0" || $(value).val() === "" || $(value).val() === "?") {
                $(value).addClass("hasRequired");
                passou = false;
            }
        }
        else { 
            if ($(value).val() === "") {
                $(value).addClass("hasRequired");
                passou = false;
            }
        }
    });

    return passou;
}
function startFunctions() {
    setTimeout(function () {
        $(".datepicker").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Data); });
            $(this).blur(function () { Mascara(this, Data); });

            $(this).datepicker({
                language: 'pt-BR'
            });
        });
        $(".timepicker").each(function (key, value) {
            $(this).timepicker({
                timeFormat: 'h:mm:ss p',
                autoclose: true,
                showInputs: false,
                disableFocus: true,
                defaultTime: false
            });
        });
        $(".datepicker2").each(function (key, value) {
            $(this).datetimepicker({
                locale: 'pt-br',
                icons: {
                    time: "pli-time-clock",
                    date: "pli-calendar-4",
                    up: "pli-triangle-arrow-up",
                    down: "pli-triangle-arrow-down",
                    previous: "pli-arrow-back",
                    next: "pli-arrow-forward"
                },
                stepping: 5
            });
        });
        
        $(".numero").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Integer); });
            $(this).blur(function () { Mascara(this, Integer); });
        });
        $(".hora").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Hora); });
            $(this).blur(function () { Mascara(this, HoraBlur); });
        });
        $(".telefone").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Telefone); });
            $(this).blur(function () { Mascara(this, Telefone); });
        });
        $(".valor").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Valor); });
            $(this).blur(function () {
                Mascara(this, Valor);
                if (this.value.length > 0 && this.value.length < 3)
                    this.value = this.value + ",00";
            });
        });
        $(".cpf").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Cpf); });
            $(this).blur(function () { Mascara(this, Cpf); });
        });
        $(".cnpj").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Cnpj); });
            $(this).blur(function () { Mascara(this, Cnpj); });
        });
        $(".cep").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Cep); });
            $(this).blur(function () { Mascara(this, Cep); });
        });
        $(".site").each(function (key, value) {
            $(this).keypress(function () { Mascara(this, Site); });
            $(this).blur(function () { Mascara(this, Site); });
        });
        $(".textEditor").each(function (key, value) {
            $(this).summernote({
                height: '230px'
            });
        });

        var textAreas = [].slice.call(document.querySelectorAll('textarea'));

        textAreas.forEach(function (el) {            
            el.style.boxSizing = el.style.mozBoxSizing = 'border-box';
            el.style.overflowY = 'hidden';

            var minHeight = el.scrollHeight;

            if (minHeight == 0) minHeight = 50;

            el.addEventListener('input', function () { adjustHeight(el, minHeight); });
            window.addEventListener('resize', function () { adjustHeight(el, minHeight); });

            adjustHeight(el, minHeight);
        });

    }, 1);
}

function adjustHeight(textareaElement, minHeight) {
    var outerHeight = parseInt(window.getComputedStyle(textareaElement).height, 10);
    var diff = outerHeight - textareaElement.clientHeight;
    textareaElement.style.height = minHeight;
    textareaElement.style.height = Math.max(minHeight, textareaElement.scrollHeight + diff) + 'px';
}

function ExportToXLSX(NomePlanilha, dados) {
    alasql('SELECT * INTO XLSX("' + NomePlanilha + '.xlsx", {headers:true}) \ FROM ?', [dados]);
}

function addLoaderAction() { $("#loaderAction").addClass("la-animate"); }
function removeLoaderAction() { $("#loaderAction").removeClass("la-animate"); }

function addLoaderActionResult() { $("#loaderAction2").addClass("la-animate"); }
function removeLoaderActionResult() { $("#loaderAction2").removeClass("la-animate"); $("#pnlDadosCabecalho").removeClass("hide"); }

// Desabilita a função voltar do backspace.
$(document).unbind('keydown').bind('keydown', function (event) {
    if (event.keyCode === 8) {
        var doPrevent = true;
        var types = ["text", "password", "file", "search", "email", "number", "date", "color", "datetime", "datetime-local", "month", "range", "search", "tel", "time", "url", "week"];
        var d = $(event.srcElement || event.target);
        var disabled = d.prop("readonly") || d.prop("disabled");
        if (!disabled) {
            if (d[0].isContentEditable) {
                doPrevent = false;
            } else if (d.is("input")) {
                var type = d.attr("type");
                if (type) {
                    type = type.toLowerCase();
                }
                if (types.indexOf(type) > -1) {
                    doPrevent = false;
                }
            } else if (d.is("textarea")) {
                doPrevent = false;
            }
        }
        if (doPrevent) {
            event.preventDefault();
            return false;
        }
    }
});

