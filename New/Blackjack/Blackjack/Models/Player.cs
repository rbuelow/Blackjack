using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.Models
{
    public class Player
    {
        public string name { get; set; }
        public int id { get; set; }
        public List<string> hand { get; set; } = new List<string>();
        public int handValue { get; set; }
    }
}