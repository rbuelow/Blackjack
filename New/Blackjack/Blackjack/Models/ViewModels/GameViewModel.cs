using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Blackjack.Models.ViewModels
{
    public  class GameViewModel             
    {
        public GameViewModel()
        {
            players = new List<Player>();
        }
        public string card { get; set; }
        public List<string> deck { get; set; }
        public List<Player> players { get; set; }
    }
}