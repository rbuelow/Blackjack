using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.Models.ViewModels
{
    public class GameViewModel
    {
        public string message { get; set; }
        public string card { get; set; }
        public List<string> cards { get; set; }
        public Player player { get; set; }
        public List<Player> listPlayers { get; set; } = new List<Player>();
    }
}