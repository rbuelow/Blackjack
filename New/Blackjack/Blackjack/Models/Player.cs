﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.Models
{
    public class Player
    {
        public Player()
        {
            hand = new List<string>();
        }
        public int id { get; set; }
        public List<string> hand { get; set; }
        public int handValue { get; set; }


    }
}