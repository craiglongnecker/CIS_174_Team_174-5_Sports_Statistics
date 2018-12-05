using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using RealTimeSportsStatistics.Api.Models;

namespace RealTimeSportsStatistics.Api.Controllers
{
    public class UserController : Controller
    {
        private bool IsBodyHtml;

        //Registerion Action
        [HttpGet]
        public ActionResult Registration()
        {
            //
            return View();
                
        }
        //Registration POST action
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Registration([Bind(Exclude ="IsEmailVerified,ActivationCode")]User user)
        {

            bool Status = false;
            string message = "";

            //Model Validadtion
            if (ModelState.IsValid)
            {
                //Email Already Exist
                var isExist = IsEmailExist(user.EmailId);
                if(isExist)
                {
                    ModelState.AddModelError("EmailExist", "This Email is already in Use");
                    return View(user);
                }
           

            //Generate Activation Code

            user.ActivationCode = Guid.NewGuid();
            //Password Hashing
            user.Password = Crypto.Hash(user.Password);
            user.ConfirmPassword = Crypto.Hash(user.Password);
                user.IsEMailVerified = false;

                using (LoginDatabaseEntities dc = new LoginDatabaseEntities())
                {
                    dc.Users.Add(user);
                    dc.SaveChanges();

                    //Send Email to User
                    SendVerificationLinkEmail(user.EmailId, user.ActivationCode.ToString());
                    message = "Registrtion successfully done. Account activation link" + "Has been sent to your email ID"
                        + user.EmailId;
                    Status = true;
                }
            }
            else
            {
                message = "Invalid Request";
            }

            ViewBag.Message = message;
            ViewBag.Status = Status;
        
            //Save data to Database
            return View(user);
        }
        //Verify Email

        //Verify Email Link

        //Login

        //Login Post

        //Logout

        [NonAction]
        public bool IsEmailExist(string emailID)
        {
            using (LoginDatabaseEntities dc = new LoginDatabaseEntities())
            {
                var v = dc.Users.Where(a => a.EmailId == emailID).FirstOrDefault();
                return v != null;
            }
        }
            [NonAction]
            public void SendVerificationLinkEmail(string emailID, string activationCode)
            
            {
            var verifyUrl = "/User/VerifyAccount/" + activationCode;
            var link = Request.Url.AbsoluteUri.Replace(Request.Url.PathAndQuery, verifyUrl);

            var fromEmail = new MailAddress("dotnetawesome@supermail.com", "Dotnet Awesome");
            var toEmail = new MailAddress(emailID);
            var fromEmailPassword = "**********"; //REplace with actual password
            string subject = "Your account has been created!"

                string body = "<br><br/>We are excited that your account is complete!" + "Please Click the link below" +

            "<br><br/<a href=' " + link + " '>" + link + "</a>";

            var smtp = new SmtpClient
            {
Host = "smtp.gmail.com"
Port = 587,
EnableSsl = true,
DeliveryMethod = SmtpDeliveryMethod.Network,
UseDefaultCredentials = false,
Credentials = new NetworkCredential(fromEmail.Address, fromEmailPassword)
            };
            using (var message = new MailMessage(fromEmail, toEmail))
            {
                subject = subject,
                body = body,
                IsBodyHtml = true,

            })
            smtp.Send(Message);
            }
        
        }
    }

    
