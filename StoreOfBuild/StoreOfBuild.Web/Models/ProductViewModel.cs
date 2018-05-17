using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StoreOfBuild.Web.Models
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Range(1, long.MaxValue, ErrorMessage = "Number should be more than zero")]
        public int CategoryId { get; set; }
        [Range(1, long.MaxValue, ErrorMessage = "Number should be more than zero")]
        public decimal Price { get; set; }
        public int StockQuatity { get; set; }
    }
}
