using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Security.Claims;


using System.Diagnostics;
using System.Threading.Tasks;
using System.Web;

namespace WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Usuario")]
    public class UsuarioController : ApiController
    {
        [Route("Get")]
        public IHttpActionResult Get()
        {
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;

            return Ok(new { Acao = 1, Msg = "sa" });
        }

        [Route("GetInfo")]
        public IHttpActionResult GetInfo()
        {
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
            var usuario = principal.Claims.Where(c => c.Type == "NomeUsuario").Single().Value;

            return Ok(new { Acao = 1, Msg = "sa" });
        }

        [AllowAnonymous]
        [Route("MudarFoto")]
        public async Task<HttpResponseMessage> PostFormData()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            string root = HttpContext.Current.Server.MapPath("~/midia");
            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                //VERIFICA SE EXISTE A PASTA, SE PODE SALVAR E SALVA UMA COPIA DOS ARQUIVOS
                await Request.Content.ReadAsMultipartAsync(provider);

                //VARIAVEL QUE PASSAMOS NO POST
                var variavel = provider.FormData[0].ToString();

                foreach (MultipartFileData file in provider.FileData)
                {
                    var fileName = file.Headers.ContentDisposition.FileName.ToString().Replace("\"", "");
                    var extensao = System.IO.Path.GetExtension(fileName);

                    // DELETAR O ARQUIVO ANTES DE CRIAR
                    try { System.IO.File.Delete(root + @"\" + variavel + extensao); }
                    catch { /* NÃO EXISTIA O ARQUIVO AINDA */ }

                    System.IO.File.Copy(file.LocalFileName, root + @"\" + variavel + extensao);
                    System.IO.File.Delete(file.LocalFileName);
                }

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}
