using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Applications
{
    public class List
    {
        public class Query : IRequest<List<Review>> {}
        public class Handler : IRequestHandler<Query, List<Review>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }
            public async Task<List<Review>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Reviews.ToListAsync();
            }
        }
    } 
}