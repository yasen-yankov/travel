using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using Travel.Data;
using Travel.Data.Models;
using System.Linq;

namespace Travel.API.Controllers
{
	[Route("api/v1/[controller]")]
    public class SightsController : Controller
    {
		private readonly TravelDbContext dbContext;

		public SightsController(TravelDbContext dbContext)
		{
			this.dbContext = dbContext;
        }

		// GET: api/sights
		[HttpGet]
        public IEnumerable<Sight> Get()
        {
			return this.dbContext.Sights;
        }

        // GET api/sights/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
			var sight = dbContext.Sights.FirstOrDefault(m => m.Id == id);

			if (sight == null)
			{
				return new HttpNotFoundResult();
			}
			else
			{
				return new ObjectResult(sight);
			}
		}

        // POST api/sights
        [HttpPost]
        public IActionResult Post([FromBody]Sight sight)
        {
			dbContext.Sights.Add(sight);
			dbContext.SaveChanges();

			return new ObjectResult(sight);
		}

        // PUT api/sights/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/sights/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
