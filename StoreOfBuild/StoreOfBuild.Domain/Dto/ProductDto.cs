using StoreOfBuild.Domain.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain.Dto
{
    public class ProductDto
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public int CatetoryId { get; set; }
        public Category Category { get; private set; }
        public decimal Price { get; private set; }
        public int StockQuatity { get; set; }
    }
}
