using Blackjack.Factory;
using Blackjack.Models;
using Blackjack.Interfaces;
using System.Web.Http;
using System.Collections.Generic;

namespace Blackjack.Controllers.webControllers
{
    public class CardController : ApiController
    {
        IPlayGame newGame = PlayGameFactory.GetPlayGame();

        // Post api/<controller>
        [HttpPost]
        public string Post(int id)
        {          
            return newGame.Hit(id);
        }

        //GET api/<controller>/
        [HttpGet]
        public string Get(int id)
        {
            return newGame.HandValueLogic(id);
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