namespace RealTimeSportsStatistics.Domain.Migrations
{
    using RealTimeSportsStatistics.Domain.Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<RealTimeSportsStatistics.Domain.TeamContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(RealTimeSportsStatistics.Domain.TeamContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

            /*context.Teams.AddOrUpdate(x => x.TeamId,
            new Team()
            {
                TeamId = 99,
                TeamCity = "DMACC",
                TeamName = "Bears",
                ColorOne = "blue",
                ColorTwo = "white"
                Wins = 0,
                Losses = 0

            }
            ); */
        }
    }
}
