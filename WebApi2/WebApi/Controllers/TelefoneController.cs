using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    [Authorize]
    public class TelefoneController : ApiController
    {
        [Route("api/telefone/post")]
        public IHttpActionResult Post(List<Telefone> telefone)
        {
            var teste = telefone;

            return Ok(new { status = "ok", msg = "telefone salvo com sucesso." });
        }

    }
    public class Telefone
    {
        [JsonProperty("nome")]
        public string Nome { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("senha")]
        public string Senha { get; set; }

    }
}
