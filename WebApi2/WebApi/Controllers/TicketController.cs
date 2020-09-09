using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class TicketController : ApiController
    {
        [Route("api/ticket/get")]
        public IHttpActionResult Get()
        {
            var obj = new
            {
                id = 0,
                guid = "de3db502-0a33-4e47-a0bb-35b6235503ca",
                isActive = false,
                balance = "$3,489.00",
                picture = "http=//placehold.it/32x32",
                age = 30,
                name = "Sandoval Mclean",
                gender = "male",
                company = "Zolavo",
                email = "sandovalmclean@zolavo.com",
                phone = "+1 (902) 569-2412"
            };

            return Ok(new { data = new List<object> { obj} });
        }
    }
        
    public class Ticket
    {
        public int id { get; set; }
        public string name { get; set; }
    }
}
