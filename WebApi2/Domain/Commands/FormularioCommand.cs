using Flunt.Notifications;
using Flunt.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Commands
{
    public class FormularioCommand : Notifiable, ICommand
    {
        public int Id { get; set; }
        public List<CampoCommand> Campos { get; set; }
        public void Validate()
        {
            AddNotifications(new Contract()
                .Requires()
                .IsGreaterThan(0, Campos.Count, "Formulario.Campos", "Campos deve ter pelo menos um item")
                );
        }
    }
}
