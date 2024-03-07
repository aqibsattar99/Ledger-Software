
using Ledger.DB;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Ledger.Controllers
{
    public class DashboardController : Controller
    {
        private readonly ApplicationDB dbcontext;
        public DashboardController(ApplicationDB db)
        {
            dbcontext = db;
        }

        public IActionResult Index()
        {
            ViewBag.Equipment = dbcontext.Equipment.Where(e=>e.Status == true).ToList().Count();
            ViewBag.Branch = dbcontext.Branch.Where(b => b.Status == true).ToList().Count();
            ViewBag.Issued = dbcontext.Issue.Where(i => i.Status == true).ToList().Count();
            return View();
        }

        
    }
}
