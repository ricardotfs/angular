using Domain.Enums;
using Flunt.Notifications;
using Flunt.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Commands
{
    public class CampoCommand : Notifiable, ICommand
    {
        public string Nome { get; set; }
        public TipoCampo TipoCampo { get; set; }
        public string Valor { get; set; }
        public string Descricao { get; set; }
        public bool Obrigatorio { get; set; }
        public List<string> Items { get; set; }
        public void Validate()
        {
            AddNotifications(new Contract()
                .Requires()
                .HasMinLen(Nome, 1, "CampoCommand.Nome", "Nome deve conter pelo menos 1 caractere.")
                .IsFalse(Validade(), "CampoCommand.Items", "Items deve conter pelo menos 1 item.")
                );
        }

        public bool Validade()
        {
            if (TipoCampo == TipoCampo.Combo)
                return (Items?.Count ?? 0) != 0;

            return true;
        }

    }
}
