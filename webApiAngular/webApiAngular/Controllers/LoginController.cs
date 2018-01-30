using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webApiAngular.Models;

namespace webApiAngular.Controllers
{
    [Route("api/login")]
    public class LoginController : ApiController
    {
        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }
        // POST api/values
        [HttpPost]
        public string Post([FromBody] UserModel user)
        {
            return "ok";
        }
    }
}
