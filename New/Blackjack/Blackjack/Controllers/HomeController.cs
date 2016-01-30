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
        Deck _builtDeck = new Deck();
        Game _game = new Game();     
        Player _player1 = new Player();
        Player _dealer = new Player();
        GameViewModel _cards = new GameViewModel(); 
        public ActionResult Index()
        {
            _cards.deck = _game.BuildDeck(_builtDeck);
            _cards.players.Add(_dealer);
            _cards.players.Add(_player1);
            _dealer.id = 0;
            _player1.id = 1;
            _player1.hand.Add(_game.GetCard(_cards.deck));
            _dealer.hand.Add(_game.GetCard(_cards.deck));
            _player1.hand.Add(_game.GetCard(_cards.deck));
            _dealer.hand.Add(_game.GetCard(_cards.deck));
            //Session["playerCard1"] = _player1.hand.ElementAt(0);
            //Session["dealerCard1"] = _dealer.hand.ElementAt(0);
            //Session["playerCard2"] = _player1.hand.ElementAt(1);
            //Session["dealerCard2"] = _dealer.hand.ElementAt(1);
            return View(_cards);
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