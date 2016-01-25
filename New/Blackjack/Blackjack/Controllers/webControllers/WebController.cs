﻿using Blackjack.BLL;
using Blackjack.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;

namespace Blackjack.Controllers.webControllers
{
    public class WebController : ApiController
    {
        // GET api/<controller>
        public string Get(string[] deck)
        {                                 
            Game game = new Game();
            string card = game.GetCard(deck.ToList());
            return card;
        }

        // GET api/<controller>/5
        //public void Get(int id)
        //{
        //    Game game = new Game();
        //    game.StartGame();
        //}

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}