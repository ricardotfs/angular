using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Security.Claims;

namespace WebApi.Controllers
{
    [Authorize]
    public class AcessoController : ApiController
    {

        public static bool Logar(string login, string senha)
        {
            if (login == "admin" && senha == "admin")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
