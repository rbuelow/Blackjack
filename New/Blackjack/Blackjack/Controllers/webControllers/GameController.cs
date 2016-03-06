using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using Blackjack.Factory;
using Blackjack.Interfaces;
using System.Web.Http;

namespace Blackjack.Controllers.webControllers
{
    public class GameController : ApiController
    {
        IPlayGame newGame = PlayGameFactory.GetPlayGame();

        [HttpPost]
        public void Post(int id)
        {
            newGame.StartGame(id);
        }

        [HttpGet]
        public List<int> Get()
        {
            return newGame.GetPlayerIds();
        }
    }
}
