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
        GameViewModel drawnCard = new GameViewModel();
        DeckModel deck = new DeckModel();  
        Player player1 = new Player();
        Player dealer = new Player();          


        public List<string> StartGame()
        {
            return BuildDeck(deck);
        }

        public string Deal(List<string> gameDeck)
        {     
            return GetCard(gameDeck);
        }

        public List<string> BuildDeck(DeckModel buildDeck)
        {
            return buildDeck.buildTheDeck(buildDeck.deck.ToList());
        }

        public string GetCard(List<string> deck)
        {
            List<string> cardDeck = deck;
            string card = "";
            if (cardDeck.Count > 0){
                for (int i = 0; i < deck.Count-1 ; i++)
                    {
                        drawnCard.card = cardDeck[i];
                        cardDeck.RemoveAt(i);
                        card = drawnCard.card;
                        return card;
                    }
                }
            return card;
            
        }
    }
}