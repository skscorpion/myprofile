using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyProfile.Controllers

{
       [Route("api/[controller]")]
    public class HelloController : Controller
    {     
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello Angular4 and ASP.NET Core from Windows 10");
        }
    }
}