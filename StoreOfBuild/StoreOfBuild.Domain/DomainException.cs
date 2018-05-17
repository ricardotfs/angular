using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain
{
    public class DomainException : Exception
    {
        public DomainException(string message) : base(message)
        {
        }

        public static void When(bool hasValid,string error)
        {
            if (!hasValid)
                throw new DomainException(error);
        }  
    }
}
