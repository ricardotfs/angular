using StoreOfBuild.Domain.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace StoreOfBuild.Domain.Products
{
    public class ProductStorer
    {
        private readonly IProductRepository _productRepository;

        public ProductStorer(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public void Store(Product product)
        {
            var obj = _productRepository.GetById(product.Id);
            DomainException.When(obj == null, "product Invalid");

            if (obj == null)
            {
                product = new Product { Name = product.Name,Price = product.Price,StockQuatity = product.StockQuatity,CategoryId = product.CategoryId};
                _productRepository.Save(product);
            }
          
        }
    }
}
