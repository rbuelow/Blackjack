using Blackjack.BLL;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using Newtonsoft.Json;

namespace Blackjack.Controllers.webControllers
{
    public class WebController : ApiController
    {
        Game game = new Game();
        // Post api/<controller>
        [HttpPost]
        public GameViewModel Post(GameViewModel mainDeck)
        {                                                                                 
            mainDeck.card = game.GetCard(mainDeck.deck);
            return mainDeck;
        }

        //GET api/<controller>/
        public void Get()
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