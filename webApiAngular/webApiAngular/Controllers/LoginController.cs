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
	    public string Post(string user)
        {
            var a = JsonConvert.DeserializeObject<UserModel>(user);
            return "ok";
        }
    }
}
