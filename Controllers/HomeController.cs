using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using System.NET.HttpResponseMessage;
using System.IO;
using MimeKit;
using MailKit.Net.Smtp;

namespace MyProfile.Controllers

{
    [Route("api/[controller]")]
    public class HomeController : Controller
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
        [HttpGet]
        [Route("TestDoc")]
        public IActionResult TestFile()
        {
            //using (var stream = new FileStream(@"src\assets\files\Senthil_MVC.pdf", FileMode.Open))
            {
                //return new FileStreamResult(stream, "application/pdf");
                return File(System.IO.File.OpenRead(@"src\assets\files\TestDoc.docx"), contentType: "application/pdf");
            }
        }
        [HttpPost]
        [Route("SendEmail")]
        public IActionResult SendEmail([FromBody] Contact contact)
        {
            var res = sendMail(contact);
            return Ok(res);
        }
        string sendMail(Contact contact)
        {
            try
            {
                string From = "senthilkumar182015@gmail.com";
                string To = "senthilkmaar@gmail.com";
                string Subject = contact.Subject;
                string Body = $"Name: {contact.Name} \n Email: {contact.Email} \n\n {contact.Message}";

                string SmtpServer = "smtp.gmail.com";
                int SmtpPort = 587;

                var mimeMessage = new MimeMessage();
                mimeMessage.From.Add(new MailboxAddress(From));
                mimeMessage.To.Add(new MailboxAddress(To));
                mimeMessage.Subject = Subject;
                mimeMessage.Body = new TextPart("plain")
                {
                    Text = Body
                };

                using (var client = new SmtpClient())
                {
                    client.Connect(SmtpServer, SmtpPort, false);
                    client.Authenticate("senthilkumar182015@gmail.com", "infinity18");
                    client.Send(mimeMessage);
                    client.Disconnect(true);
                    return "Mail sent succesfully.";
                }
            }
            catch (Exception ex)
            {
                string Msg = ex.Message;
                return Msg;
            }
        }
    }
    public class Contact
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}