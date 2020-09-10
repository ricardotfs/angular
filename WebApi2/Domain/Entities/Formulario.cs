using Domain.ValueObjects;
using Flunt.Validations;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Entities
{
    public class Formulario : Base
    {
        private IList<Campo> _campos;

        public Formulario(int id)
        {
            Id = id;
            AddNotifications(new Contract()
                .Requires()
                .IsGreaterThan(0, Id, "Formulario.Id", "Id deve maior que zero.")
                );

            _campos = new List<Campo>();
        }

        public Formulario()
        {
            _campos = new List<Campo>();
        }
        public IReadOnlyCollection<Campo> Campos { get { return _campos.ToArray(); } }


        public void AddItem(Campo campo)
        {
            var exist = Validate(campo.Nome);

            AddNotifications(new Contract()
                .Requires()
                .IsFalse(exist, "Campo", "Ja existe um campo com o mesmo nome cadastrado.")
           );

            if (Valid)
                _campos.Add(campo);
        }
        public bool Validate(string nome)
        {
            return _campos.Any(p => p.Nome == nome);
        }
    }
}
