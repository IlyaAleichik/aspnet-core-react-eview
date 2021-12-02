using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Applications;
using ASP.NETCoreWebApplication.Models;

namespace ASP.NETCoreWebApplication.Controllers
{
    public class ReviewController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Review>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetActivities(Guid id)
        {
            return await Mediator.Send(new Details.Query {Id = id});
        }
    }
}