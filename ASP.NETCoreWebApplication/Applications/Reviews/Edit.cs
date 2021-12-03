using System.Threading;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;
using AutoMapper;
using MediatR;

namespace ASP.NETCoreWebApplication.Applications
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Review Review { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var review = await context.Reviews.FindAsync(request.Review.Id);
                mapper.Map(request.Review, review);
                await context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
