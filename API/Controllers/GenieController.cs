using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    public AccountController()
    {
    }

    [HttpGet(Name = "Welcome")]
    public string Get()
    {
        return "Hello User";
    }
}