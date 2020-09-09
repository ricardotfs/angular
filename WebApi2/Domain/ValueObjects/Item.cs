using Flunt.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ValueObjects
{
    public class Item: ValueObject
    {
        public Item(string valor)
        {
            Valor = valor;
            AddNotifications(new Contract()
                .Requires()
                .HasMinLen(Valor, 1, "Item.Valor", "Valor deve conter pelo menos 1 caracteres")
            );
        }
        public string Valor { get; }
    }
}
