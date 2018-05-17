using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StoreOfBuild.Domain;
using StoreOfBuild.Domain.Products;
using StoreOfBuild.Web.Models;

namespace StoreOfBuild.Web.Controllers
{
    [Authorize(Roles ="Admin, Manager")]
    public class CategoryController : Controller
    {
        private readonly CategoryStorer _categoryStorer;
        private readonly ICategoryRepository _categoryRepsitory;

        public CategoryController(CategoryStorer categoryStorer, ICategoryRepository categoryRepsitory)
        {
            _categoryStorer = categoryStorer;
            _categoryRepsitory = categoryRepsitory;
        }
        public IActionResult Index()
        {
            var list = _categoryRepsitory.All();
            var model = list.Select(x => new CategoryViewModel { Id = x.Id, Name = x.Name });
            return View(model);
        }

        public IActionResult CreateEdit(int id)
        {
            var obj = _categoryRepsitory.GetById(id);

            if (obj == null)
                return View();

            var view = new CategoryViewModel { Id = obj.Id, Name = obj.Name };

            return View(view);
        }
        [HttpPost]
        public IActionResult CreateEdit(CategoryViewModel view)
        {
            _categoryStorer.Store(view.Id, view.Name);
            return View();
        }
    }
}