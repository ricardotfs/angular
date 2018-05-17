using StoreOfBuild.Domain.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain
{
    public interface ICategoryRepository
    {
        Category GetById(int id);
        void Save(Category entity);
        IEnumerable<Category> All();
    }
}
