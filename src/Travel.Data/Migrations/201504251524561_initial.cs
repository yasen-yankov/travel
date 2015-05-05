using Microsoft.Data.Entity.Relational.Migrations;
using Microsoft.Data.Entity.Relational.Migrations.Builders;
using Microsoft.Data.Entity.Relational.Migrations.MigrationsModel;
using System;

namespace Travel.Data.Migrations
{
    public partial class initial : Migration
    {
        public override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable("Sight",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Latitude = c.String(),
                        Longitude = c.String(),
                        Name = c.String()
                    })
                .PrimaryKey("PK_Sight", t => t.Id);
        }
        
        public override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Sight");
        }
    }
}