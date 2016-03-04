using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Blackjack.BLL;
using Blackjack.Interfaces;

namespace Blackjack.Factory
{
    public class PlayGameFactory
    {
        public static IPlayGame NewGame {get; set;}           

        public static IPlayGame GetPlayGame()
        {            
            if (NewGame == null) { NewGame = new PlayGame();};
            return NewGame;  
        } 
    }
}