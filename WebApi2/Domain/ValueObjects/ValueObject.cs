using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ValueObjects
{
    public class ValueObject: Notifiable
    {
        public int Id { get; protected set; }
    }
}
