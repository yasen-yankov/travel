using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Travel.Models;

namespace Travel.API.Controllers
{
    [Route("api/v1/[controller]")]
    public class SightsController : Controller
    {
        // GET: api/sights
        [HttpGet]
        public IEnumerable<Sight> Get()
        {
            return new List<Sight> {
                new Sight { Id = 1, Name = "Червен" },
                new Sight { Id = 2, Name = "Иваново" },
                new Sight { Id = 3, Name = "Левента" }
            };
        }

        // GET api/sights/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/sights
        [HttpPost]
        public void Post([FromBody]string value)
        {
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
