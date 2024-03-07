using Ledger.DB;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Ledger.Utility.GenericRepository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly ApplicationDB dbContext;
        private DbSet<T> entities;
        public GenericRepository(ApplicationDB DB)
        {
            dbContext = DB;
            entities = dbContext.Set<T>();
        }

        public interface IStatusEntity
        {
            bool Status { get; }
        }


        public async Task<List<T>> GetAllAsync(Expression<Func<T, bool>> predicate)
        {
            try
            {
                return await entities.Where(predicate).ToListAsync();
            }
            catch (Exception ex)
            {
                return new List<T>();
            }
        }


        public async Task<bool> AddAsync(T entity)
        {
            entities.Add(entity);
            await dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<T> GetByIdAsync(int id)
        {
            T Data = entities.Find(id);
            return Data;

        }

        public async Task<bool> UpdateAsync(int Id, T entity)
        {
            var chk = await entities.FindAsync(Id);
            if (chk == null)
                return false;

            dbContext.Entry(chk).CurrentValues.SetValues(entity);
            await dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}

