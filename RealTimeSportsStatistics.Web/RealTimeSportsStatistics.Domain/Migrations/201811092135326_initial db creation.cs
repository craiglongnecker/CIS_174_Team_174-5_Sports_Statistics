namespace RealTimeSportsStatistics.Domain.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialdbcreation : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Teams",
                c => new
                    {
                        TeamId = c.Int(nullable: false, identity: true),
                        TeamCity = c.String(),
                        TeamName = c.String(),
                        ColorOne = c.String(),
                        ColorTwo = c.String(),
                        Wins = c.Int(nullable: false),
                        Losses = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TeamId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Teams");
        }
    }
}
