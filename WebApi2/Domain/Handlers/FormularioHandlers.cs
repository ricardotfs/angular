using Domain.Commands;
using Domain.Entities;
using Domain.Queries;
using Domain.Repositories;
using Domain.ValueObjects;
using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Handlers
{
    public class FormularioHandlers : Notifiable, IHandler<FormularioCommand>
    {
        private IFormularioRepository _repository;

        public FormularioHandlers(IFormularioRepository repository)
        {
            _repository = repository;
        }

        public ICommandResult Handle(FormularioCommand command)
        {
            var formulario = new Formulario();

            command.Validate();
            if (command.Invalid)
            {
                AddNotifications(command);
                return new CommandResult(false, "Não foi possível criar o Formulario");
            }

            foreach (var item in command.Campos)
            {
                formulario.AddItem(new Campo(item.Nome, item.TipoCampo, item.Valor, item.Descricao, item.Obrigatorio));
                AddNotifications(item);
            }

            if (Invalid)
                return new CommandResult(false, "Não foi possível criar o formulario");

            _repository.CreateFormulario(formulario);

            return new CommandResult(true, "Formulário criado com sucesso");

        }
    }
}
