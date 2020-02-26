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
                lista.Campos.Add(new Campos { nome = "nome", tipo = "text", valor = "Ricardo Oliveira" });
                lista.Campos.Add(new Campos { nome = "email", tipo = "email", valor = "ricardo123@gvp.com" });
                
                return Ok(new { data = lista });
            }
            lista.Campos.Add(new Campos { nome = "nome", tipo = "text", valor = "Ricardo Oliveira" });
            lista.Campos.Add(new Campos { nome = "email", tipo = "email", valor = "ricardo123@gvp.com" });
            lista.Campos.Add(new Campos { nome = "senha", tipo = "password", valor = "senhateste" });
            lista.Campos.Add(new Campos { nome = "Data", tipo = "date", valor = "2020-01-13" });
            lista.Campos.Add(new Campos { nome = "numero", tipo = "number", valor = "100" });
            lista.Campos.Add(new Campos { nome = "endereco", tipo = "text", valor = "Rua Dimarães Antonio Sandey" });

            return Ok(new { data = lista });
        }

    }
    public class Formulario
    {
        public List<Campos> Campos { get; set; } = new List<Campos>();
    }
    public class Campos
    {
        public string nome { get; set; }
        public string tipo { get; set; }
        public string valor { get; set; }
    }
}

