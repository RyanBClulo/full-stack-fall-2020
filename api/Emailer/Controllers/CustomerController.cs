using System;
using Emailer.Repos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Emailer.Controllers
{
    /*
     * TODO Use Async Task responses
     * TODO Add a GetAll
     */
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;
        private ICustomerRepository _repo;

        public CustomerController(ILogger<CustomerController> logger, ICustomerRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }
        

        [HttpGet]
        [Route("{id}")]
        public Customer Get(string id)
        {
            Console.WriteLine("Recieved ID "+id);
            return _repo.Read(id);
        }

        [HttpPost]
        public void Post(Customer c)
        {
            _repo.Create(c);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(string id)
        {
            _repo.Delete(id);
        }
        

    }
}