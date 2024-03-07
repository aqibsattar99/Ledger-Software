using Ledger.DB;
using Ledger.DB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ledger.Controllers
{
    public class BranchController : Controller
    {
        private readonly ApplicationDB dbcontext;

        public BranchController(ApplicationDB db)
        {
            dbcontext = db;
        }
        public IActionResult Index()
        {
            ViewBag.Branch = dbcontext.Branch.Where(b => b.Status == true).ToList();
            return View();
        }


        [HttpPost]
        public IActionResult Create(Branch B)
        {
            Branch Br = new Branch();
            Br.Name = B.Name;
            Br.Status = true;
            Br.CreatedOn = DateTime.Now;
            Br.CreatedBy = "Aqib";
            Br.EditedOn = DateTime.Now;
            Br.EditedBy = "Aqib";
            dbcontext.Branch.Add(Br);
            dbcontext.SaveChanges();
            return Json("Success !!!");
        }

        [HttpPost]
        public IActionResult GetBranch(int Id)
        {
            var BranchData = dbcontext.Branch.Where(e => e.Id == Id).FirstOrDefault();
            return Json(BranchData);
        }

        [HttpPost]
        public IActionResult Update(Branch B)
        {
            var BData = dbcontext.Branch.Where(e => e.Id == B.Id).FirstOrDefault();
            BData.Name = B.Name;
            BData.Status = true;
            BData.EditedOn = DateTime.Now;
            BData.EditedBy = "Aqib";
            dbcontext.SaveChanges();
            return Json("Success !!!");
        }



    }
}
