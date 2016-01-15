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
        Player dealer = new Player();
        Player player = new Player();

        public void StartGame() {
            buildDeck.buildTheDeck();
            dealer.id = 1;
            GlobalDeck.players.Add(dealer);
            player.id = 2;
            GlobalDeck.players.Add(player);
        }

        public GameViewModel GetCard(){
            drawnCard.card = GlobalDeck.deck.Pop();
            GameViewModel card = drawnCard;
            return card;
        }

        public void bla()
        {
            //GlobalDeck.players.Add().Where(x => x.hand == {"", ""} ) ;
            var ThisDealer =  GlobalDeck.players.Where(x=>x.id == 1);
            var r = 3;
           
        }
    }
}