using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;

namespace WebApi.Controllers
{
   // [Authorize]
    public class TicketController : ApiController
    {
        // GET api/<controller>
        [Route("api/ticket/get")]
        public IHttpActionResult Get()
        {
            var lista = new List<Depto>();
            lista.Add(new Depto { id = 1, nome = "Desenvolvimento" });
            lista.Add(new Depto { id = 2, nome = "Comercial" });
            lista.Add(new Depto { id = 3, nome = "Suporte" });
            lista.Add(new Depto { id = 4, nome = "Vendas" });
            lista.Add(new Depto { id = 5, nome = "Sac" });
            lista.Add(new Depto { id = 6, nome = "Atendimento ao cliente" });

            return Ok(new { data = lista });
        }

    }
    public class Depto
    {
        public int id { get; set; }
        public string nome { get; set; }

    }

}