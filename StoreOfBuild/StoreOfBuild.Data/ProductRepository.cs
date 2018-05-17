using StoreOfBuild.Domain;
using StoreOfBuild.Domain.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StoreOfBuild.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Product> All()
        {
            return _context.Products.ToList();
        }

        public Product GetById(int id)
        {
            return _context.Products.SingleOrDefault(x => x.Id == id);
        }

        public void Save(Product entity)
        {
            _context.Products.Add(entity);
            _context.SaveChanges();
        }

        public void Update( Product product)
        {
            var obj = _context.Products.SingleOrDefault(x => x.Id == product.Id);

            obj.Name = product.Name;
            obj.Price = product.Price;
            obj.StockQuatity = product.StockQuatity;
            obj.CategoryId = product.CategoryId;
            _context.SaveChanges();
        }
    }
}
