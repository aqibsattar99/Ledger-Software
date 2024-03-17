using Ledger.DB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ledger.DB
{
    public class ApplicationDB : DbContext
    {
        public ApplicationDB(DbContextOptions<ApplicationDB> options) : base(options)
        {

        }
        public DbSet<Branch> Branch { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
        public DbSet<Issue> Issue { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
