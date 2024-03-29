﻿using Domain.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Handlers
{
    public interface IHandler<T> where T : ICommand
    {
        ICommandResult Handler(T command);
    }
}
