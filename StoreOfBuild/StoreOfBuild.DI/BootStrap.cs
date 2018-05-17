using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using System;
using StoreOfBuild.Data;
using StoreOfBuild.Domain;
using StoreOfBuild.Domain.Products;
using Microsoft.AspNetCore.Identity;

namespace StoreOfBuild.DI
{
    public class BootStrap
    {
        public static void Configure(IServiceCollection services, string connection)
        {
            //services.AddDbContext<ApplicationDbContext>(options =>
            //options.UseSqlServer(connection));

            //services.AddIdentity<ApplicationUser, IdentityRole>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>()
            //    .AddDefaultTokenProviders();

            // services.AddDbContext<ApplicationDbContext>(options =>
            //    options.UseSqlServer(connection));

            //services.AddIdentity<ApplicationUser, IdentityRole>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>()
            //    .AddDefaultTokenProviders();
            //services.AddScoped(typeof(ICategoryRepository), typeof(CategoryRepository));
            //services.AddScoped(typeof(IProductRepository), typeof(ProductRepository));

            services.AddScoped(typeof(CategoryStorer));
        }
    }
}
