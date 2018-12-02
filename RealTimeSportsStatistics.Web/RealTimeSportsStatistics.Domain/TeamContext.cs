using RealTimeSportsStatistics.Domain.Entities;
using System.Data.Entity;

namespace RealTimeSportsStatistics.Domain
{
    public class TeamContext : DbContext
    {
        public DbSet<Team> Teams { get; set; }
        public DbSet<Statistics> Statistics { get; set; }
    }
}
