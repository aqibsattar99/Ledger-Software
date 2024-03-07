using Ledger.DB;
using Ledger.DB.Models;
using Ledger.DB.VModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rotativa.AspNetCore;

namespace Ledger.Controllers
{
    public class IssueController : Controller
    {
        private readonly ApplicationDB dbcontext;

        public IssueController(ApplicationDB db)
        {
            dbcontext = db;
        }
        public IActionResult Index()
        {
            ViewBag.Branch = dbcontext.Branch.ToList();
            ViewBag.Equipment = dbcontext.Equipment.ToList();

            List<VIssue> Issue = dbcontext.Issue
                .Where(i=>i.Status == true)
                .Select(i => new VIssue
            {
                Id = i.Id,
                EquipmentName = i.Equipment.Name,
                BranchName = i.Branch.Name,
                Condition = i.Condition,
                SerialNo = i.SerialNo,
                Qty = i.Qty,
                IssueVoucher = i.IssueVoucher,
                IssueTo = i.IssueTo,
                ReceviedBy = i.ReceviedBy

            }).ToList();
            return View(Issue);
        }

        [HttpPost]
        public IActionResult Create(Issue I)
        {
            Issue ID = new Issue();
            ID.EquipmentId = I.EquipmentId;
            ID.BranchId = I.BranchId;
            ID.Condition = I.Condition;
            ID.SerialNo = I.SerialNo;
            ID.Qty = I.Qty;
            ID.IssueDate = I.IssueDate;
            ID.IssueVoucher = I.IssueVoucher;
            ID.MinSheetNo = I.MinSheetNo;
            ID.IssueTo = I.IssueTo;
            ID.ReceviedBy = I.ReceviedBy;
            ID.Details = I.Details;
            ID.Status = true;
            ID.CreatedOn = DateTime.Now;
            ID.CreatedBy = "Aqib";
            ID.EditedOn = DateTime.Now;
            ID.EditedBy = "Aqib";
            dbcontext.Issue.Add(ID);
            dbcontext.SaveChanges();
            return Json("Success !!!");
        }

        [HttpPost]
        public IActionResult GetIssue(int Id)
        {
            var IssueData = dbcontext.Issue.Where(e => e.Id == Id && e.Status == true).FirstOrDefault();
            return Json(IssueData);
        }
          [HttpPost]
        public IActionResult GetDetail(int Id)
        {
            var IssueData = dbcontext.Issue.Where(e => e.Id == Id && e.Status == true).FirstOrDefault();
            var Issue = dbcontext.Issue
               .Where(i => i.Id == Id)
               .Select(i => new VIssue
               {
                   Id = i.Id,
                   EquipmentName = i.Equipment.Name,
                   BranchName = i.Branch.Name,
                   Condition = i.Condition,
                   SerialNo = i.SerialNo,
                   Qty = i.Qty,
                   IssueDate = i.IssueDate,
                   IssueVoucher = i.IssueVoucher,
                   MinSheetNo = i.MinSheetNo,
                   IssueTo = i.IssueTo,
                   ReceviedBy = i.ReceviedBy,
                   Details = i.Details,
                   CreatedBy = i.CreatedBy
               }).FirstOrDefault();
            return Json(Issue);
        }

         
       



        [HttpPost]
        public IActionResult Update(Issue I)
        {
            Issue ID = dbcontext.Issue.Where(i => i.Id == I.Id).FirstOrDefault();
            ID.BranchId = I.BranchId;
            ID.Condition = I.Condition;
            ID.SerialNo = I.SerialNo;
            ID.Qty = I.Qty;
            ID.IssueDate = I.IssueDate;
            ID.IssueVoucher = I.IssueVoucher;
            ID.MinSheetNo = I.MinSheetNo;
            ID.IssueTo = I.IssueTo;
            ID.ReceviedBy = I.ReceviedBy;
            ID.Details = I.Details;
            ID.Status = true;
           
            ID.EditedOn = DateTime.Now;
            ID.EditedBy = "Aqib";
            dbcontext.SaveChanges();
            return Json("Success !!!");
        }



        [HttpGet]
        public IActionResult PrintIssue(int Id)
        {
            var IssueData = dbcontext.Issue.Where(e => e.Id == Id && e.Status == true).FirstOrDefault();
            var Issue = dbcontext.Issue
               .Where(i => i.Id == Id)
               .Select(i => new VIssue
               {
                   Id = i.Id,
                   EquipmentName = i.Equipment.Name,
                   BranchName = i.Branch.Name,
                   Condition = i.Condition,
                   SerialNo = i.SerialNo,
                   Qty = i.Qty,
                   IssueDate = i.IssueDate,
                   IssueVoucher = i.IssueVoucher,
                   MinSheetNo = i.MinSheetNo,
                   IssueTo = i.IssueTo,
                   ReceviedBy = i.ReceviedBy,
                   Details = i.Details,
                   CreatedBy = i.CreatedBy
               }).FirstOrDefault();

            return new ViewAsPdf("Printing/PrintIE", Issue)
            {
                CustomSwitches = "--disable-smart-shrinking ",
                PageSize = Rotativa.AspNetCore.Options.Size.A4,
                PageOrientation = Rotativa.AspNetCore.Options.Orientation.Portrait

            };
        }
    }
}
