using Blackjack.BLL;
using Blackjack.Models;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blackjack.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            CardToValue x = new CardToValue();
            var y = x.valueHand(new List<string> { "h3", "d7" });
            var q = 12;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}