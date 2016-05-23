using Blackjack.BLL;
using Blackjack.Models.ViewModels;
using Blackjack.repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Blackjack.Controllers.webControllers
{
    public class WebController : ApiController
    {
        GameViewModel GVM = new GameViewModel();
        Database data = new Database();
        // GET api/<controller>
        public GameViewModel Get(int id)
        {
            Game game = new Game();
            /*hit*/
            if (id == 1)
            {
                GVM.card = game.GetCard(2);
                if(data.retrievePlayer(2).handValue > 21)
                {
                    GVM.message = "Bust";
                }
                return GVM;
            }
            /*deal*/
            if (id == 2)
            {
                game.Deal();
                var temp = data.retrievePlayer(1);
                temp.hand[0] = "test";
                GVM.listPlayers.Add(temp);
                GVM.listPlayers.Add(data.retrievePlayer(2));
                return GVM;
            }
            /*stay*/
            if (id == 3)
            {
                GVM.cards = game.Stay();
                if(data.retrievePlayer(1).handValue > 21)
                {
                    GVM.message = "Bust";
                }
                if(data.retrievePlayer(1).handValue > data.retrievePlayer(2).handValue)
                {
                    GVM.message = "Dealer Wins";
                }
                if(data.retrievePlayer(1).handValue < data.retrievePlayer(2).handValue)
                {
                    GVM.message = "Player Wins";
                }
                return GVM;
            }
            return null;
        }

        // GET api/<controller>/5
        public void Get()
        {
            Game game = new Game();
            game.StartGame();
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}