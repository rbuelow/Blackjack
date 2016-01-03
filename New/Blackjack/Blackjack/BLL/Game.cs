using Blackjack.Models;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.BLL
{
    public class Game
    {
        DeckModel buildDeck = new DeckModel();
        GameViewModel drawnCard = new GameViewModel();

        public void StartGame() { 
            buildDeck.buildTheDeck();
        }

        public GameViewModel GetCard(){
            drawnCard.card = GlobalDeck.deck.Pop();
            GameViewModel card = drawnCard;
            return card;
        }
    }
}