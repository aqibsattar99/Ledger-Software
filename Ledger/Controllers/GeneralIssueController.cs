using Ledger.DB;
using Ledger.DB.Models;
using Ledger.Utility.GenericRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rotativa.AspNetCore;
using System;


namespace Ledger.Controllers
{
    public class GeneralIssueController : Controller
    {
        private readonly ApplicationDB dbcontext;
        private readonly IGenericRepository<Issue> dbrepo;
        private readonly Random _random = new Random();

        public GeneralIssueController(ApplicationDB db, IGenericRepository<Issue> repo)
        {
            dbcontext = db;
            dbrepo = repo;
        }
        public IActionResult Index()
        {
            ViewBag.Branch = dbcontext.Branch.Where(e=>e.Status == true).ToList();
            ViewBag.Equipment = dbcontext.Equipment.Where(e => e.Status == true).ToList();

            List<IssueVM> Issue = dbcontext.Issue
                .Where(i=>i.Status == true)
                .Select(i => new IssueVM
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


        // Function to generate a unique random number
        private int RandomNo()
        {
            List<int> usedNumbers = new List<int>();
            int randomNumber;
            do
            {
                randomNumber = _random.Next(500, 49999); // Generate a random number between 1000 and 9999
            } while (usedNumbers.Contains(randomNumber));
                usedNumbers.Add(randomNumber);

            return randomNumber;
        }

        [HttpPost]
        public IActionResult Create(Issue I)
        {

            int randomNumber = RandomNo();
            I.Status = true;
            I.CreatedOn = DateTime.Now;
            I.CreatedBy = "Aqib";


            I.IssueVoucher = "IV/"+ randomNumber +"/IT";

            
            dbcontext.Issue.Add(I);
            dbcontext.SaveChanges();
            return Json("Success !!!");
        }


        [HttpPost]
        public IActionResult GetAll()
        {
            var Data = dbcontext.Issue.Where(e => e.Status == true)
                        .OrderByDescending(e => e.CreatedOn)
                        .Select(i => new IssueVM
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
                            Remarks = i.Remarks,
                            CreatedBy = i.CreatedBy
                        }).ToList();

            return Json(new { data = Data });



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
               .Select(i => new IssueVM
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
                   Remarks = i.Remarks,
                   CreatedBy = i.CreatedBy
               }).FirstOrDefault();
            return Json(Issue);
        }

         
       



        [HttpPost]
        public async Task<IActionResult> Update(Issue I)
        {
            
            I.Status = true;
            I.EditedOn = DateTime.Now;
            I.EditedBy = "Aqib";


            var R = await dbrepo.UpdateAsync(I.Id, I);
            if (R)
            {
                return Json("Success !!!");
            }
            return Json("Error !!!");

        }



        [HttpGet]
        public IActionResult PrintIssue(int Id)
        {
            var IssueData = dbcontext.Issue.Where(e => e.Id == Id && e.Status == true).FirstOrDefault();
            var Issue = dbcontext.Issue
               .Where(i => i.Id == Id)
               .Select(i => new IssueVM
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
                   Remarks = i.Remarks,
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
