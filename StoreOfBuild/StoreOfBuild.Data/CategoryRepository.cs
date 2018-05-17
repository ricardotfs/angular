using StoreOfBuild.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using StoreOfBuild.Domain.Products;

namespace StoreOfBuild.Data
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ApplicationDbContext _context;

        public CategoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> All()
        {
            return _context.Categories.ToList();
        }

        public Category GetById(int id)
        {
            return _context.Categories.SingleOrDefault(x => x.Id == id);
        }

        public void Save(Category entity)
        {
            _context.Categories.Add(entity);
            _context.SaveChanges();
        }
    }
}
