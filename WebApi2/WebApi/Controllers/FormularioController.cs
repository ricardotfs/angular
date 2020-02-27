using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class FormularioController : ApiController
    {
        [Route("api/formulario/get")]
        public IHttpActionResult Get(int tipoModulo)
        {
            var lista = new Formulario();

            if(tipoModulo == 6)
            {
                lista.Campos.Add(new Campos { id = "nome", nome = "Nome", tipo = "text", valor = "Ricardo Oliveira" });
                lista.Campos.Add(new Campos { id = "email", nome = "E-mail", tipo = "email", valor = "ricardo123@gvp.com" });
                
                return Ok(new { data = lista });
            }
            lista.Campos.Add(new Campos { id = "txtnome", nome="Nome", tipo = "text", valor = "Ricardo Oliveira" });
            lista.Campos.Add(new Campos { id = "txtemail", nome = "E-mail", tipo = "email", valor = "ricardo123@gvp.com" });
            lista.Campos.Add(new Campos { id = "txtsenha", nome = "Senha", tipo = "password", valor = "senhateste" });
            lista.Campos.Add(new Campos { id = "txtdata", nome = "Data", tipo = "date", valor = "2020-01-15" });
            lista.Campos.Add(new Campos { id = "txtnumero", nome = "Numero", tipo = "number", valor = "100" });
            lista.Campos.Add(new Campos { id = "txtendereco", nome = "Endereço", tipo = "text", valor = "Rua Dimarães Antonio Sandey" });

            return Ok(new { data = lista });
        }

    }
    public class Formulario
    {
        public List<Campos> Campos { get; set; } = new List<Campos>();
    }
    public class Campos
    {
        public string id { get; set; }
        public string nome { get; set; }
        public string tipo { get; set; }
        public string valor { get; set; }
    }
}

