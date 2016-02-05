using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Blackjack.BLL;
using Blackjack.Models;

namespace Blackjack.Controllers.webControllers
{
    public class PlayerController : ApiController
    {
        CardToValue CardValue = new CardToValue();

        // Post api/<controller> 
        public Player Post(Player player)
        {
            player.handValue = CardValue.valueHand(player.hand);
            return player;
        }
    }
}
