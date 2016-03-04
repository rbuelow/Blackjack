using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.Models
{
    public class Game
    {
        public Game()
        {
            players = new List<Player>();
        }
        public string card { get; set; }
        public List<string> deck { get; set; }
        public List<Player> players { get; set; }
    }
}