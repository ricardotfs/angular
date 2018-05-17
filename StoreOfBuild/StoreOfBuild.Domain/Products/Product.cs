using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain.Products
{
    public class Product
    {
        public int Id { get;   set; }
        public string Name { get;  set; }
        public int CategoryId { get;  set; }
        public decimal Price { get;  set; }
        public int StockQuatity { get; set; }
        //public Product(string name, int  categoryId,decimal price,int stockQuantity)
        //{
        //    ValidateValues(name, categoryId, price, stockQuantity);

        //    SetProperties(name, categoryId, price, stockQuantity);
        //}
        public void Update(string name, int categoryId, decimal price, int stockQuantity)
        {
            ValidateValues(name, categoryId, price, stockQuantity);

            SetProperties(name, categoryId, price, stockQuantity);
        }
        private void SetProperties(string name, int categoryId, decimal price, int stockQuantity)
        {
            Name = name;
            CategoryId = categoryId;
            Price = price;
            StockQuatity = stockQuantity;
        }

        private static void ValidateValues(string name, int categoryId, decimal price, int stockQuantity)
        {
            DomainException.When(string.IsNullOrWhiteSpace(name), "Name is required");
            DomainException.When(categoryId > 0, "Category is required");
            DomainException.When(price < 0, "Price is required");
            DomainException.When(stockQuantity < 0, "Stock quantity is required");
        }

    }
}
