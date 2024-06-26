﻿using Ledger.DB;
using Ledger.DB.Models;
using Ledger.Utility.GenericRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace Ledger.Controllers
{
    public class BranchController : Controller
    {
        private readonly IGenericRepository<Branch> dbcontext;
        private readonly ApplicationDB _db;

        public BranchController(IGenericRepository<Branch> repo, ApplicationDB db)
        {
            dbcontext = repo;
            _db = db;
        }
        public IActionResult Index()
        {
            ViewBag.Branch = dbcontext.GetAllAsync(x=>x.Status == true).Result;
            return View();
        }

        [HttpPost]
        public IActionResult GetAll()

        {
            var Data = _db.Branch.Where(e => e.Status == true)
                                       .OrderByDescending(e => e.CreatedOn)
                                       .ToList();

            return Json(new { data = Data });



        }

        [HttpPost]
        public IActionResult Create(Branch B)
        {
            B.CreatedOn = DateTime.Now;
            B.CreatedBy = "Aqib";
            B.Status = true;

            dbcontext.AddAsync(B);
            
            return Json("Success !!!");
        }

        [HttpPost]
        public IActionResult GetBranch(int Id)
        {
            var BranchData = dbcontext.GetByIdAsync(Id).Result;
            return Json(BranchData);
        }

        [HttpPost]
        public IActionResult Update(Branch B)
        {
            B.Status = true;
            B.EditedBy = "Aqib";
            B.EditedOn = DateTime.Now;

            var Result = dbcontext.UpdateAsync(B.Id, B).Result;
            if (Result == true)
            {
                return Json("Updated !!!");
            }
            return Json("Error !!!");
        }



    }
}
