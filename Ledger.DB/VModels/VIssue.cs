using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ledger.DB.VModels
{
    public class VIssue
    {
        public int Id { get; set; }
        public string? EquipmentName { get; set; }
        public string? BranchName { get; set; }
        public string? Condition { get; set; }
        public string? SerialNo { get; set; }
        public int? Qty { get; set; }
        public string? IssueDate { get; set; }
        public string? IssueVoucher { get; set; }
        public string? MinSheetNo { get; set; }
        public string? IssueTo { get; set; }
        public string? ReceviedBy { get; set; }
        public string? Details { get; set; }
        public int? Status { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? EditedOn { get; set; }
        public string? EditedBy { get; set; }
    }
}
