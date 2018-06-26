using crm.Dominio.Command;
using crm.Dominio.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.Handlres
{
    public interface IHandler<T> where T : ICommand
    {
        ICommandResult Create(T obj);
        ICommandResult Update(T obj);
    }
}
