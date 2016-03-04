using Blackjack.BLL;
using Blackjack.Models;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Blackjack.Factory;
using Blackjack.Interfaces;

namespace Blackjack.Controllers
{
    public class HomeController : Controller
    {
        IPlayGame newGame = PlayGameFactory.GetPlayGame();

        public ActionResult Index()
        {
            newGame.BuildDeck();                 
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