using Domain.Enums;
using Flunt.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ValueObjects
{
    public class Combo : Campo
    {
        private IList<Item> _itens;
        public Combo(int id, string nome, TipoCampo tipoCampo, string valor, string descricao, bool obrigatorio)
            : base(id, nome, tipoCampo, valor, descricao, obrigatorio)
        {
            _itens = new List<Item>();
        }
        public Combo(string nome, TipoCampo tipoCampo, string valor, string descricao, bool obrigatorio)
            : base(nome, tipoCampo, valor, descricao, obrigatorio)
        {
            _itens = new List<Item>();
        }

        public IReadOnlyCollection<Item> Items { get { return _itens.ToArray(); } }

        public void AddItem(Item item)
        {
            AddNotifications(new Contract()
            .Requires()
                .AreNotEquals(0, item.Valor, "Campo.Item", "Este Campo é obrigatório")
                .IsFalse(Validar(item.Valor), "Campo.Item.Valor", "Este este valor ja foi cadastrado.")
                );


            if (Valid)
                _itens.Add(item);
        }

        private bool Validar(string value)
        {
            return _itens.Any(p => p.Valor == value);
        }
    }
}
