using Blackjack.Models;
using Blackjack.Interfaces;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Blackjack.BLL
{
    public class PlayGame : IPlayGame
    {
        private static Deck _mainDeck = new Deck();
        public static Game _newGame = new Game();
        public static List<string> _builtDeck;
        public static string _card;
        public static CardToValue _value = new CardToValue();
        public int _players;

        public void StartGame(int playerCount)
        {
            _players = playerCount;
                                         
            for(var i = 0; i < playerCount; i++)
            {
                Player player = new Player();
                player.id = i;
                _newGame.players.Add(player);
            }

            BuildHand();

            foreach(var player in _newGame.players)
            {
                var value = GetHandValue(player.id);
                player.handValue = value;
            }

            HandValueLogic(1);

        }                                                
        public void BuildDeck()
        {
            _builtDeck = _mainDeck.buildTheDeck();

        }

        public string GetCard()
        {


            if (_builtDeck.Count > 0){
                for (int i = 0; i < _builtDeck.Count ;)
                    {
                        _card = _builtDeck[i];
                        _builtDeck.RemoveAt(i);        
                        return _card;
                    }
                }
            return _card;
            
        }

        public void BuildHand()
        {
            int count = 0;
            while (count < 2)
            {
                 foreach (var play in _newGame.players)
                {
                    play.hand.Add(GetCard());
                }
                count++;
            } 
            
        }

        public int GetHandValue(int playerId)
        {
            var play1 = GetPlayer(playerId);
            play1.handValue = _value.HandValue(play1.hand);
            return play1.handValue;
        }

        public string Hit(int playerId)
        {
            _newGame.players[playerId].hand.Add(GetCard());
            return _newGame.players[playerId].hand.Last();
        }

        public Player GetPlayer(int playerId)
        {
            return _newGame.players.Where(a => a.id == playerId).FirstOrDefault();
        }
        
        public List<int> GetPlayerIds()
        {
            List<int> ids = new List<int>();

            foreach (var player in _newGame.players)
            {
                ids.Add(player.id);
            }
            return ids;
        }

        public List<string> GetHand(int playerId)
        {
            return _newGame.players[playerId].hand;
        }

        public List<string> GetDealerHand(int playerId)
        {
            List<string> dealerHand = new List<string>();
            dealerHand.Add("  ");
            dealerHand.Add(_newGame.players[playerId].hand.Last());
            return dealerHand; 
        }

        public string HandValueLogic(int id)
        {
            var player = _newGame.players.Where(a => a.id == id).FirstOrDefault();

            if (player.handValue == 21)
                return "Black jack";
            else if (player.handValue > 21)
                return "bust";
            else
                return "keep playing";
        }
    }
}