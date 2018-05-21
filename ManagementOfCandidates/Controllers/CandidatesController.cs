using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ManagementOfCandidates.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManagementOfCandidates.Controllers
{
    [Produces("application/json")]
    [Route("api/candidates")]
    public class CandidatesController : Controller
    {
        ApplicationContext db;
        IHostingEnvironment appEnvironment;

        public CandidatesController(ApplicationContext context, IHostingEnvironment appEnvironment)
        {
            db = context;
            this.appEnvironment = appEnvironment;

            if (!db.Candidates.Any())
            {
                db.Candidates.Add(new Candidate { FullName = "Eugeny",Age = 21,Salary = 300,Experience = 3 });
                db.Candidates.Add(new Candidate { FullName = "Elena", Age = 19, Salary = 1500, Experience = 1 });
                db.Candidates.Add(new Candidate { FullName = "liredevil", Age = 25, Salary = 3000, Experience = 8 });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Candidate> Get()
        {
            return db.Candidates.ToList();
        }

        [HttpGet("{id}")]
        public Candidate Get(int id)
        {
            Candidate candidate = db.Candidates.FirstOrDefault(x => x.Id == id);

            return candidate;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Candidate candidate)
        {
          
            if (ModelState.IsValid)
            {
                db.Candidates.Add(candidate);
                db.SaveChanges();

                return Ok(candidate);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Candidate candidate)
        {
            if (ModelState.IsValid)
            {
                db.Update(candidate);
                db.SaveChanges();
                return Ok(candidate);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Candidate candidate = db.Candidates.FirstOrDefault(x => x.Id == id);
            if (candidate != null)
            {
                db.Candidates.Remove(candidate);
                db.SaveChanges();
            }

            return Ok(candidate);
        }
    }
}