using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Relational.Migrations.Infrastructure;
using System;
using Travel.Data;

namespace Travel.Data.Migrations
{
    [ContextType(typeof(Travel.Data.TravelDbContext))]
    public partial class initial : IMigrationMetadata
    {
        string IMigrationMetadata.MigrationId
        {
            get
            {
                return "201504251524561_initial";
            }
        }
        
        string IMigrationMetadata.ProductVersion
        {
            get
            {
                return "7.0.0-beta3-12166";
            }
        }
        
        IModel IMigrationMetadata.TargetModel
        {
            get
            {
                var builder = new BasicModelBuilder();
                
                builder.Entity("Travel.Data.Models.Sight", b =>
                    {
                        b.Property<int>("Id")
                            .GenerateValueOnAdd();
                        b.Property<string>("Latitude");
                        b.Property<string>("Longitude");
                        b.Property<string>("Name");
                        b.Key("Id");
                    });
                
                return builder.Model;
            }
        }
    }
}