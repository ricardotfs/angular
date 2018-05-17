using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain.Products
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get;  set; }

        public Category(string name)
        {
            ValidateNameSetName(name);
        }

        private void ValidateNameSetName(string name)
        {
            DomainException.When(!string.IsNullOrWhiteSpace(name), "Name is required");
            Name = name;
        }

        public void Update(string name)
        {
            ValidateNameSetName(name);
        }
    }
}
