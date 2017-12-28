using Gvp.IdeaApi.Bll;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Gvp.IdeaApi.Filters
{
    public class BasicAuhtenticationAttribute : AuthorizationFilterAttribute
    {
        private Guid TOKEN;
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            var authorizationHeader = actionContext.Request.Headers.Authorization;
            var idc = 0;
            var bl = new AuthorizationBl();
            try
            {
                idc = Convert.ToInt32(authorizationHeader.Scheme);
                TOKEN = bl.Authorization(idc);
            }
            catch 
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
                return;
            }
            
            if (authorizationHeader.Parameter != TOKEN.ToString().ToUpper())
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            }
        }
    }
}