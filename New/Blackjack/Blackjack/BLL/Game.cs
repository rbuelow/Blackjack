using Blackjack.Models;
using Blackjack.Models.ViewModels;
using Blackjack.repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blackjack.BLL
{
    public class Game
    {
        CardToValue cardToValue = new CardToValue();   
        DeckModel buildDeck = new DeckModel();
        Database data = new Database();
        Player dealer = new Player() { id = 1, name = "dealer" };
        Player player = new Player() { id = 2, name = "player" };
      
        public void StartGame()
        {
            data.deleteGame();
            buildDeck.buildTheDeck();
        }

        public string GetCard(int id)
        {
            data.getDeck();
            Player tempPlayer = data.retrievePlayer(id);
            string card = GlobalDeck.deck.Pop();
            data.postDeck(GlobalDeck.deck);
            tempPlayer.hand.Add(card);
            tempPlayer.handValue = cardToValue.valueHand(tempPlayer.hand,id);
            data.updatehand(tempPlayer.id, tempPlayer.hand, tempPlayer.handValue);
            return card;
        }

        public void Deal()
        {
            data.getDeck();
            for (var x = 0; x <= 1d; x++)
            {
                dealer.hand.Add(GlobalDeck.deck.Pop());
                player.hand.Add(GlobalDeck.deck.Pop());
            }
            dealer.handValue = cardToValue.valueHand(dealer.hand,dealer.id);
            player.handValue = cardToValue.valueHand(player.hand,player.id);
            data.postDeck(GlobalDeck.deck);

            /*TODO: making 4 calles to database could be done in two?*/
            data.insertPlayer(dealer);
            data.insertPlayer(player);
            data.insertHand(dealer);
            data.insertHand(player);
        }

        public List<string> Stay()
        {  
            while (data.retrievePlayer(1).handValue < 17)
            {
                GetCard(1);
            }
            var Dealer = data.retrievePlayer(1);
            List<string> cards = Dealer.hand.Skip(2).ToList();
            cards.Insert(0, Dealer.hand[0]);
            return cards;
        }
    }
}