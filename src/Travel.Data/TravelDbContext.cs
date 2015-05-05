using Microsoft.Data.Entity;
using Travel.Data.Models;

namespace Travel.Data
{
	public class TravelDbContext : DbContext
    {
		public DbSet<Sight> Sights { get; set; }

		protected override void OnConfiguring(DbContextOptions options)
		{
			options.UseSqlServer(@"Server=YASEN-LAPTOP;Database=travel;Trusted_Connection=True;MultipleActiveResultSets=true");
		}
	}
}