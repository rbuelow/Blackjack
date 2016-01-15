using Blackjack.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Blackjack.Models
{
    public class DeckModel
    {
        string[] deck = {
              "hA",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "h7",
              "h8",
              "h9",
              "h10",
              "hJ",
              "hQ",
              "hK",
              "dA",
              "d2",
              "d3",
              "d4",
              "d5",
              "d6",
              "d7",
              "d8",
              "d9",
              "d10",
              "dJ",
              "dQ",
              "dK",
              "cA",
              "c2",
              "c3",
              "c4",
              "c5",
              "c6",
              "c7",
              "c8",
              "c9",
              "c10",
              "cJ",
              "cQ",
              "cK",
              "sA",
              "s2",
              "s3",
              "s4",
              "s5",
              "s6",
              "s7",
              "s8",
              "s9",
              "s10",
              "sJ",
              "sQ",
              "sK",
        };

        static Random r = new Random();

        static private string[] Shuffle(string[] deck)
        {
            for (int n = deck.Length - 1; n > 0; --n)
            {
                int k = r.Next(n + 1);
                string temp = deck[n];
                deck[n] = deck[k];
                deck[k] = temp;
            }
            return deck;
        }

        public void buildTheDeck()
        {
            Stack<string> stackDeck = new Stack<string>();
            string [] shuffeledDeck = Shuffle(deck);
            foreach(var x in shuffeledDeck)
            {
                stackDeck.Push(x);
            };
            storeDeck(stackDeck);
        }

        public void storeDeck(Stack<string> deck)
        {
           GlobalDeck.deck = deck;
        }
    }
}