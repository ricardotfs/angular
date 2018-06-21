using crm.Dominio.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace crm.Dominio.Handlres
{
    public interface IHandler<T> where T:ICommand
    {
        ICommand Create(T obj);
    }
}
