using StoreOfBuild.Domain.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain.Products
{
    public class CategoryStorer
    {
        private ICategoryRepository _categoryRepository;

        public CategoryStorer(ICategoryRepository categoryRepsitory)
        {
            _categoryRepository = categoryRepsitory;

        }
        public void Store(int id,string name)
        {
            var category = _categoryRepository.GetById(id);

            if (category == null)
            {
                category = new Category(name);
                _categoryRepository.Save(category);
            }
            else
                category.Update(name);
        }
    }
}
