using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using System.NET.HttpResponseMessage;
using System.IO;

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

        	[HttpGet]
            [Route("ResumeDownload")]
            public IActionResult PdfFile()
            {
                //using (var stream = new FileStream(@"src\assets\files\Senthil_MVC.pdf", FileMode.Open))
                {
                    //return new FileStreamResult(stream, "application/pdf");
                    return File(System.IO.File.OpenRead(@"src\assets\files\Senthil_MVC.pdf"), contentType: "application/pdf"); 
                }
            }
    }
}