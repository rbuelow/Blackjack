using System.Collections.Generic;
using System.Web.Http;
using Blackjack.Factory;
using Blackjack.Interfaces;

namespace Blackjack.Controllers.webControllers
{
    public class PlayerController : ApiController
    {
        IPlayGame newGame = PlayGameFactory.GetPlayGame();

        // Post api/<controller> 
        public List<string> Post(int id)
        {
            return newGame.GetHand(id);
        }

        public string Get(int id)
        {
            return "";
        }
    }
}
