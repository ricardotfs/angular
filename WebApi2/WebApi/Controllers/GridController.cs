using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class GridController : ApiController
    {
        [Route("api/grid/getColumns")]
        public IHttpActionResult GetColumns(int tipoModulo)
        {
            

            var lista = new List<Column>();

            if (tipoModulo == 6)
            {

                lista.Add(new Column { Name = "Nome", Field = "nome", Width = 150 });
                lista.Add(new Column { Name = "E-mail", Field = "email", Width = 150 });
                lista.Add(new Column { Name = "Senha", Field = "senha", Width = 150 });
                lista.Add(new Column { Name = "Data", Field = "data", Width = 150 });
                lista.Add(new Column { Name = "Numero", Field = "numero", Width = 150 });
                lista.Add(new Column { Name = "Endereço", Field = "endereco", Width = 150 });
                    
                return Ok(new { data = lista });
            }

            return Ok(new { data = lista });
        }

        [Route("api/grid/data")]
        public IHttpActionResult Get(int tipoModulo)
        {
            var lista = new List<dynamic>();

            if (tipoModulo == 99) 
            {

                lista.Add(new { nome = "Ricardo Oliveira", email = "ricardo123@gvp.com", senha = "senhateste", data = "28/02/2020", numero = "100", endereco = "Rua Dimarães Antonio Sandey" });
                lista.Add(new { nome = "Ricardo Oliveira1", email = "ricardo123@gvp.com", senha = "senhateste", data = "28/02/2020", numero = "100", endereco = "Rua Dimarães Antonio Sandey" });
                lista.Add(new { nome = "Ricardo Oliveira2", email = "ricardo123@gvp.com", senha = "senhateste", data = "28/02/2020", numero = "100", endereco = "Rua Dimarães Antonio Sandey" });
                lista.Add(new { nome = "Ricardo Oliveira3", email = "ricardo123@gvp.com", senha = "senhateste", data = "28/02/2020", numero = "100", endereco = "Rua Dimarães Antonio Sandey" });
                lista.Add(new { nome = "Ricardo Oliveira4", email = "ricardo123@gvp.com", senha = "senhateste", data = "28/02/2020", numero = "100", endereco = "Rua Dimarães Antonio Sandey" });
                lista.Add(new { nome = "Ricardo Oliveira5", email = "ricardo123@gvp.com", senha = "senhateste", data = "28/02/2020", numero = "100", endereco = "Rua Dimarães Antonio Sandey" });

                return Ok(new { data = lista });
            }

            var data = CriarDataTable();
            foreach (DataRow dr in data.Rows)
            {
                dynamic obj = new System.Dynamic.ExpandoObject();
                var index = 0;

                foreach (var column in data.Columns)
                {
                    ((IDictionary<String, Object>)obj).Add(column.ToString(), dr[index]);
                    index++;
                }

                lista.Add(obj);
            }

            return Ok(new { data = lista });
        }

        private static DataTable CriarDataTable()
        {
            var dtb_Alunos = new DataTable();
            dtb_Alunos.Columns.Add("AlunoId", typeof(int));
            dtb_Alunos.Columns.Add("Nome", typeof(string));
            dtb_Alunos.Columns.Add("email", typeof(string));
            dtb_Alunos.Columns.Add("senha", typeof(string));
            dtb_Alunos.Columns.Add("data", typeof(string));
            dtb_Alunos.Columns.Add("numero", typeof(string));
            dtb_Alunos.Columns.Add("endereco", typeof(string));
            dtb_Alunos.Rows.Add(1, "MARIANA", "macoratti@yahoo.com", "44669922", "28/02/2020", "100", "Rua D");
            dtb_Alunos.Rows.Add(1, "Macoratti", "macoratti@yahoo.com", "44669922", "28/02/2020","100","Rua D");
            dtb_Alunos.Rows.Add(2, "Jefferson", "jeff@bol.com.br", "88669977", "28/02/2020", "100", "Rua D");
            dtb_Alunos.Rows.Add(3, "Janice", "janjan@uol.com.br", "96885522", "28/02/2020", "100", "Rua D");
            dtb_Alunos.Rows.Add(4, "Jessica", "jessicalang@uol.com.br", "96885522", "28/02/2020", "100", "Rua D");
            dtb_Alunos.Rows.Add(5, "Miriam", "mimi@uol.com.br", "96885522", "28/02/2020", "100", "Rua D");


            return dtb_Alunos;
        }
    }

    public class Column
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("field")]
        public string Field { get; set; }
        [JsonProperty("width")]
        public int Width { get; set; }
    }
}
