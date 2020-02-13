/*
*    Script:    Mascaras em Javascript
*    Autor:    Matheus Biagini de Lima Dias
*    Data:    26/08/2008
*    Obs:    
*/
/*Função Pai de Mascaras*/
function Mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}

/*Função que Executa os objetos*/
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

/*Função que Determina as expressões regulares dos objetos*/
function leech(v) {
    v = v.replace(/o/gi, "0")
    v = v.replace(/i/gi, "1")
    v = v.replace(/z/gi, "2")
    v = v.replace(/e/gi, "3")
    v = v.replace(/a/gi, "4")
    v = v.replace(/s/gi, "5")
    v = v.replace(/t/gi, "7")
    return v
}

/*Função que permite apenas numeros*/
function Integer(v) {
    return v.replace(/\D/g, "")
}


/*Função que padroniza telefone (11) 4184-1241*/
function Telefone(v) {

    if (v.length > 12) { return v.replace(/\D/g, ""); }

    if (v.substring(2, 3) == "9") {
        v = v.replace(/\D/g, "")
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2")
        v = v.replace(/(\d{5})(\d)/, "$1-$2")
    }
    else {
        v = v.replace(/\D/g, "")
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2")
        v = v.replace(/(\d{4})(\d)/, "$1-$2")
    }
    return v
}

/*Função que padroniza telefone (11) 41841241*/
function TelefoneCall(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2")
    return v
}

/*Função que padroniza CPF*/
function Cpf(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")

    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return v
}

/*Função que padroniza CEP*/
function Cep(v) {
    v = v.replace(/D/g, "")
    v = v.replace(/^(\d{5})(\d)/, "$1-$2")
    return v
}

/*Função que padroniza CNPJ*/
function Cnpj(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    v = v.replace(/(\d{4})(\d)/, "$1-$2")
    return v
}

/*Função que permite apenas numeros Romanos*/
function Romanos(v) {
    v = v.toUpperCase()
    v = v.replace(/[^IVXLCDM]/g, "")

    while (v.replace(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/, "") != "")
        v = v.replace(/.$/, "")
    return v
}

/*Função que padroniza o Site*/
function Site(v) {
    v = v.replace(/^http:\/\/?/, "")
    dominio = v
    caminho = ""
    if (v.indexOf("/") > -1)
        dominio = v.split("/")[0]
    caminho = v.replace(/[^\/]*/, "")
    dominio = dominio.replace(/[^\w\.\+-:@]/g, "")
    caminho = caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g, "")
    caminho = caminho.replace(/([\?&])=/, "$1")
    if (caminho != "") dominio = dominio.replace(/\.+$/, "")
    v = dominio + caminho
    return v
}

/*Função que padroniza DATA*/
function Data(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{2})(\d)/, "$1/$2")
    v = v.replace(/(\d{2})(\d)/, "$1/$2")
    if (v.length >= 11) { v = v.substring(0, 9); }
    return v
}

/*Função que padroniza DATA*/
function Hora(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{2})(\d)/, "$1:$2")

    if (v.length >= 3) {

        hora = 0;
        minuto = 0;

        if (v.indexOf(":") > -1) {
            hora = v.split(":")[0]
            minuto = v.split(":")[1]
        }

        if (hora > 23) { hora = 23 }
        if (minuto > 59) { minuto = 59 }

        return hora + ":" + minuto;
    }
    else { return v }
}
function HoraBlur(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{2})(\d)/, "$1:$2")

    if (v.length >= 3) {

        hora = 0;
        minuto = 0;

        if (v.indexOf(":") > -1) {
            hora = v.split(":")[0]
            minuto = v.split(":")[1]
        }

        if (hora > 23) { hora = 23 }
        if (minuto > 59) { minuto = 59 }

        return hora + ":" + minuto;
    }
    else if (v.length == 0) { return "00:00" }
    else if (v.length == 1) { return "0" + v + ":00" }
    else if (v.length == 2) { return v + ":00" }
    else { return v }
}

/*Função que padroniza valor monétario*/
function Valor(v) {
    v = v.replace(/\D/g, "") //Remove tudo o que não é dígito
    v = v.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/, "$1.$2");
    //v=v.replace(/(\d{3})(\d)/g,"$1,$2")
    v = v.replace(/(\d)(\d{2})$/, "$1,$2") //Coloca ponto antes dos 2 últimos digitos
    return v
}

/*Função que padroniza Area*/
function Area(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d)(\d{2})$/, "$1.$2")
    return v

}

function getData(a) {
    hoje = new Date();
    dia = hoje.getDate();
    mes = hoje.getMonth();
    ano = hoje.getFullYear();
    if (dia < 10)
        dia = "0" + dia;
    if (ano < 2000)
        ano = "19" + ano;

    mes = (mes + 1);

    if (mes.toString().length == 1)
        mes = "0" + mes;

    //O mes começa em Zero, então soma-se 1
    a.val(dia + "/" + mes + "/" + ano);
}

function validaDat(campo, valor) {
    var date = valor;
    var ardt = new Array;
    var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
    ardt = date.split("/");
    erro = false;
    if (date.search(ExpReg) == -1) {
        erro = true;
    }
    else if (((ardt[1] == 4) || (ardt[1] == 6) || (ardt[1] == 9) || (ardt[1] == 11)) && (ardt[0] > 30))
        erro = true;
    else if (ardt[1] == 2) {
        if ((ardt[0] > 28) && ((ardt[2] % 4) != 0))
            erro = true;
        if ((ardt[0] > 29) && ((ardt[2] % 4) == 0))
            erro = true;
    }
    if (erro) {
        if (valor != "") {
            alert(valor + " não é uma data válida!");
            campo.focus();
            campo.value = "";
        }
        return false;
    }
    return true;
}

function MascaraData(obj, Hoje) {

    $(obj).keypress(function () { Mascara(this, Data); });
    $(obj).blur(function () { validaDat(this, this.value); });

    if (Hoje)
        getData(obj);
}


function getDataInicioMes(a) {
    hoje = new Date();
    dia = hoje.getDate();
    mes = hoje.getMonth();
    ano = hoje.getFullYear();
    if (dia < 10)
        dia = "0" + dia;
    if (ano < 2000)
        ano = "19" + ano;

    mes = (mes + 1);

    if (mes.toString().length == 1)
        mes = "0" + mes;

    //O mes começa em Zero, então soma-se 1
    a.val("01/" + mes + "/" + ano);
}