using Blackjack.Models;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.BLL 
{
    public class GlobalDeck
    {
        public static Stack<string> deck { get; set; }
        public static List<Player> players {get; set;} 
    }
}