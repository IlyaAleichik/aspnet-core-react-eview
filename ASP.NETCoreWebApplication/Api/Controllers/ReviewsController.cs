using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Applications;
using ASP.NETCoreWebApplication.Models;

namespace ASP.NETCoreWebApplication.Api.Controllers
{
    public class ReviewsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Review>>> GetReviews()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Review>> GetReview(Guid id)
        {
            return await Mediator.Send(new Details.Query {Id = id});
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateReview(Review review)
        {
            return Ok(await Mediator.Send(new Create.Command(){Review = review}));
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> EditReview(Guid id, Review review)
        {
            review.Id = id;
            return Ok(await Mediator.Send(new Edit.Command(){Review = review}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command() {Id = id}));
        }
    }
}