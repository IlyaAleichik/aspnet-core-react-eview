using System.Threading;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;
using MediatR;

namespace ASP.NETCoreWebApplication.Applications
{
    public class Create
    {
        public class Command : IRequest
        {
            public Review Review { get; set; }
        }
        
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            
            public Handler(DataContext context)
            {
                this.context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Reviews.Add(request.Review);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}