using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class AdmController : ApiController
    {
        [Route("api/adm/getFields")]
        [HttpGet]
        public IHttpActionResult Get(int tipoModulo)
        {
            var lista = new Formulario();

            if (tipoModulo == 6)
            {

                lista.Campos.Add(new Campos { id = "txtnome", nome = "Nome", tipo = "0", valor = "Ricardo Oliveira", toolTip = "Informe o nome do cliente" });
                lista.Campos.Add(new Campos { id = "txtemail", nome = "E-mail", tipo = "0", valor = "ricardo123@gvp.com", toolTip = "Informe o e-mail do clieente" });
                lista.Campos.Add(new Campos { id = "txtsenha", nome = "Senha", tipo = "0", valor = "senhateste", toolTip = "Infome a senha do cliente" });
                lista.Campos.Add(new Campos { id = "txtdata", nome = "Data", tipo = "0", valor = "28/02/2020", toolTip = "Informe a data de cadastro" });
                lista.Campos.Add(new Campos { id = "txtnumero", nome = "Numero", tipo = "1", valor = "100", toolTip = "Informe o valor" , itens = new List<valor>() { new valor { item = "item1" }, new valor { item = "item2" } } });
                lista.Campos.Add(new Campos { id = "txtendereco", nome = "Endereço", tipo = "0", valor = "Rua Dimarães Antonio Sandey", toolTip = "Informe o logradouro do cliente" });

                return Ok(new { data = lista });
            }

            if (tipoModulo == 4)
            {

                lista.Campos.Add(new Campos { id = "txtnome", nome = "Nome", tipo = "0", valor = "Ricardo Oliveira", toolTip = "Informe o nome do cliente" });
                lista.Campos.Add(new Campos { id = "txtnumero", nome = "Numero", tipo = "1", valor = "100", toolTip = "Informe o valor", itens = new List<valor>() { new valor { item = "item1" }, new valor { item = "item2" } } });
                lista.Campos.Add(new Campos { id = "txtendereco", nome = "Endereço", tipo = "0", valor = "Rua Dimarães Antonio Sandey", toolTip = "Informe o logradouro do cliente" });

                return Ok(new { data = lista });
            }
            return Ok(new { data = lista });
        }
        [Route("api/adm/salvar")]
        [HttpGet]
        public IHttpActionResult Post(List<Campos> list)
        {
            
            return Ok(new { data = "OK" });
        }
    }
}
