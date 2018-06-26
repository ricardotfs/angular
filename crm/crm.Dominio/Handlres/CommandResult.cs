using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.Handlres
{
    public class CommandResult : ICommandResult
    {
        public CommandResult(bool success, string message, ICollection<string> erros)
        {
            Success = success;
            Message = message;
            Erros = erros;
        }
        public CommandResult(bool success, string message)
        {
            Success = success;
            Message = message;
        }
        public CommandResult(bool success, string message,int id)
        {
            Success = success;
            Message = message;
            Id = id;
        }
        public int Id { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }
        public ICollection<string> Erros { get; set; } = new List<string>();
    }
}
