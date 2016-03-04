using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blackjack.Models;

namespace Blackjack.Interfaces
{
    public interface IPlayGame
    {
        
        void BuildDeck();
        void BuildHand();
        string GetCard();
        List<int> GetPlayerIds();
        void StartGame(int playerCount);       
        string HandValueLogic(int id);
        string Hit(int playerId);
        int GetHandValue(int playerId);
        Player GetPlayer(int playerId);       
        List<string> GetHand(int playerId);
        List<string> GetDealerHand(int playerId);
        
    }
}
