using Ledger.DB;
using Ledger.DB.Models;
using Ledger.Utility.GenericRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace Ledger.Controllers
{
    public class AccessController : Controller
    {
        private readonly IGenericRepository<Users> dbcontext;

        public AccessController(IGenericRepository<Users> db)
        {
            dbcontext = db;
        }
        public IActionResult Index()
        {

            //var result = dbcontext.GetByIdAsync(u => u.username == Logindetails.username && m.password == Logindetails.password).FirstOrDefault();
            //if (result != null)
            //{
            //    // Goto Dashboard

            //    Session["Name"] = result.name;
            //    Session["Type"] = result.type;
            //    Session["ID"] = result.id;

            //    return RedirectToAction("index", "Dashboard");
            //}
            //else
            //{
            //    // Error Highlight
            //    ViewBag.Message = string.Format("Incorrect Login Details!");
            //    return View();
            //}

            ViewBag.Branch = dbcontext.GetAllAsync(x=>x.Status == true).Result;
            return View();
        }


        //[HttpPost]
        //public IActionResult Create(Branch B)
        //{
        //    B.CreatedOn = DateTime.Now;
        //    B.CreatedBy = "Aqib";
        //    B.EditedOn = DateTime.Now;
        //    B.EditedBy = "Aqib";
        //    B.Status = true;

        //    dbcontext.AddAsync(B);
            
        //    return Json("Success !!!");
        //}

        //[HttpPost]
        //public IActionResult GetBranch(int Id)
        //{
        //    var BranchData = dbcontext.GetByIdAsync(Id).Result;
        //    return Json(BranchData);
        //}

        //[HttpPost]
        //public IActionResult Update(Branch B)
        //{
        //    B.Status = true;
        //    B.EditedBy = "Aqib";
        //    B.EditedOn = DateTime.Now;

        //    var Result = dbcontext.UpdateAsync(B.Id, B).Result;
        //    if (Result == true)
        //    {
        //        return Json("Updated !!!");
        //    }
        //    return Json("Error !!!");
        //}



    }
}
