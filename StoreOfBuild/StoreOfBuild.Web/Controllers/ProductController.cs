using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StoreOfBuild.Domain;
using StoreOfBuild.Domain.Products;
using StoreOfBuild.Web.Models;

namespace StoreOfBuild.Web.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public IActionResult Index()
        {
            var objs = _productRepository.All();
            var models = objs.Select(x => new ProductViewModel { Id = x.Id, Name = x.Name, CategoryId = x.CategoryId, Price = x.Price, StockQuatity = x.StockQuatity }).ToList();
            return View(models);
        }
        public IActionResult Edit(int id)
        {
            var obj = _productRepository.GetById(id);
            var model = new ProductViewModel { Id = obj.Id, Name = obj.Name, CategoryId = obj.CategoryId, Price = obj.Price, StockQuatity = obj.StockQuatity };
            return View(model);
        }
        [HttpPost]
        public IActionResult Edit(ProductViewModel viewModel)
        {
            var obj = new Product { Id = viewModel.Id, CategoryId = viewModel.CategoryId, Name = viewModel.Name, Price = viewModel.Price, StockQuatity = viewModel.StockQuatity };
            _productRepository.Update(obj);
            return View();
        }
    }
}