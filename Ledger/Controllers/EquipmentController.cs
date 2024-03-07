using Ledger.DB;
using Ledger.DB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ledger.Controllers
{
    public class EquipmentController : Controller
    {
        private readonly ApplicationDB dbcontext;

        public EquipmentController(ApplicationDB db)
        {
            dbcontext = db;
        }
        public IActionResult Index()
        {
            ViewBag.Equipment = dbcontext.Equipment.Where(e => e.Status == true).ToList();
            return View();
        }


        [HttpPost]
        public IActionResult Create(Equipment E)
        {
            Equipment Equip = new Equipment();
            Equip.Name = E.Name;
            Equip.Status = true;
            Equip.CreatedOn = DateTime.Now;
            Equip.CreatedBy = "Aqib";
            Equip.EditedOn = DateTime.Now;
            Equip.EditedBy = "Aqib";
            dbcontext.Equipment.Add(Equip);
            dbcontext.SaveChanges();
            return Json("Success !!!");
        }

        [HttpPost]
        public IActionResult GetEquipment(int Id)
        {
            var EqptData = dbcontext.Equipment.Where(e => e.Id == Id).FirstOrDefault();
            return Json(EqptData);
        }

        [HttpPost]
        public IActionResult Update(Equipment E)
        {
            var Equip = dbcontext.Equipment.Where(e => e.Id == E.Id).FirstOrDefault();
            Equip.Name = E.Name;
            Equip.Status = true;
            Equip.EditedOn = DateTime.Now;
            Equip.EditedBy = "Aqib";
            dbcontext.SaveChanges();
            return Json("Success !!!");
        }



    }
}
