using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Data.Entity;
using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using Travel.Data;

namespace Travel
{
	public class Startup
    {
		public Startup(IHostingEnvironment env)
		{
			// Setup configuration sources.
			this.Configuration = new Configuration()
				.AddJsonFile("config.json")
				.AddEnvironmentVariables();
		}

		public IConfiguration Configuration { get; set; }

		public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

			services.AddEntityFramework(this.Configuration)
					.AddSqlServer()
					.AddDbContext<TravelDbContext>();
		}

        public void Configure(IApplicationBuilder app)
        {
            app.UseMvc();
        }
    }
}