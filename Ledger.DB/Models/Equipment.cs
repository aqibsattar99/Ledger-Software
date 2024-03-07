using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Ledger.DB.Models
{
    public class Equipment
    {
        [Key]
        public int Id { get; set; }
        
        public string? Name { get; set; }

        public bool? Status { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? EditedOn { get; set; }
        public string? EditedBy { get; set; }

    }
}
