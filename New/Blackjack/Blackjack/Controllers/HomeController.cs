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
        DeckModel _deck = new DeckModel();
        Game _game = new Game();
        List<string> _gameDeck;
        Player _player1 = new Player();
        Player _dealer = new Player();
        public ActionResult Index()
        {
            _gameDeck= _game.BuildDeck(_deck);
            Session["deck"] = _gameDeck;
            _player1.hand.Add(_game.Deal(_gameDeck));
            _dealer.hand.Add(_game.Deal(_gameDeck));
            _player1.hand.Add(_game.Deal(_gameDeck));
            _dealer.hand.Add(_game.Deal(_gameDeck));
            Session["playerCard1"] = _player1.hand.ElementAt(0);
            Session["dealerCard1"] = _dealer.hand.ElementAt(0);
            Session["playerCard2"] = _player1.hand.ElementAt(1);
            Session["dealerCard2"] = _dealer.hand.ElementAt(1);
            return View();
        }
        
        //public ActionResult Deal()
        //{
            

        //    return Redirect("index");
        //}

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