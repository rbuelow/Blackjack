﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.BLL
{
    public class CardToValue
    {
        private Dictionary<string, int> CardValue()
        {
            Dictionary<string, int> dictionary = new Dictionary<string, int>()
            {
                { "hA" , 1},
                { "h2" , 2},
                { "h3" , 3},
                { "h4" , 4},
                { "h5" , 5},
                { "h6" , 6},
                { "h7" , 7},
                { "h8" , 8},
                { "h9" , 9},
                { "h10" , 10},
                { "hJ" , 10},
                { "hQ" , 10},
                { "hK" , 10},
                { "dA" , 1},
                { "d2" , 2},
                { "d3" , 3},
                { "d4" , 4},
                { "d5" , 5},
                { "d6" , 6},
                { "d7" , 7},
                { "d8" , 8},
                { "d9" , 9},
                { "d10" , 10},
                { "dJ" , 10},
                { "dQ" , 10},
                { "dK" , 10},
                { "cA" , 1},
                { "c2" , 2},
                { "c3" , 3},
                { "c4" , 4},
                { "c5" , 5},
                { "c6" , 6},
                { "c7" , 7},
                { "c8" , 8},
                { "c9" , 9},
                { "c10" , 10},
                { "cJ" , 10},
                { "cQ" , 10},
                { "cK" , 10},
                { "sA" , 1},
                { "s2" , 2},
                { "s3" , 3},
                { "s4" , 4},
                { "s5" , 5},
                { "s6" , 6},
                { "s7" , 7},
                { "s8" , 8},
                { "s9" , 9},
                { "s10" , 10},
                { "sJ" , 10},
                { "sQ" , 10},
                { "sK" , 10},
            };
            return dictionary;
        }
        

        public int HandValue(List<string> hand)
        {
            int handValue = 0;
            bool containsAce = false;
            foreach (var card in hand)
            {
                if (card == "sA" || card == "cA" || card == "hA" || card == "dA")
                    containsAce = true; 
                int cardValue = compairCard(card);
                handValue = handValue + cardValue;
            };
            if(containsAce && handValue != 2)
                handValue = handValue + 10;
            if(containsAce && handValue > 21 && handValue-10 < 21) 
                handValue = handValue - 10; 
            return handValue;
        }

        private int compairCard(string currentCard)
        {
            Dictionary<string, int> dictionary = CardValue();
            int cardValue = 0;
            foreach (var card in dictionary)
            {
                if (card.Key == currentCard)
                {
                    cardValue = card.Value;
                }
            }
            return cardValue;
        }
    }
}