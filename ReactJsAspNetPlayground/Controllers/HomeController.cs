using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactJsAspNetPlayground.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Index2()
        {
            return View();
        }
        public ActionResult ContactList()
        {
            return View();
        }

        public ActionResult SimpleForm()
        {
            return View();
        }
    }
}