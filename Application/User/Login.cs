using Domain;
using MediatR;
using Persistence;
using System.Threading.Tasks;
using System.Threading;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<AppUser>{}
        
                public class Handler : IRequestHandler<Query,AppUser>{
        
                    private readonly DataContext _context;
        
                    public Handler(DataContext context){
                    
                        _context = context;
        
                    }
        
                    public async Task<AppUser>Handle(Query request, CancellationToken cancellationToken){
        
                        //handler logic goes here
                    }
                }
    }
}