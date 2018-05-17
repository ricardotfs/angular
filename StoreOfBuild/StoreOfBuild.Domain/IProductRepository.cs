using StoreOfBuild.Domain.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain
{
    public interface IProductRepository
    {
        Product GetById(int id);
        void Save(Product entity);
        IEnumerable<Product> All();
        void Update(Product product);
    }
}
