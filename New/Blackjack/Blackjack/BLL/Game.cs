using Blackjack.Models;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Blackjack.BLL
{
    public class Game
    {                                                   
        public List<string> BuildDeck(Deck mainDeck)
        {
            var builtDeck = mainDeck.buildTheDeck(mainDeck.deck.ToList());
            return builtDeck;
        }

        public string GetCard(List<string> builtDeck)
        {

            string card = "";
            if (builtDeck.Count > 0){
                for (int i = 0; i < builtDeck.Count ;)
                    {
                        card = builtDeck[i];
                        builtDeck.RemoveAt(i);        
                        return card;
                    }
                }
            return card;
            
        }
    }
}