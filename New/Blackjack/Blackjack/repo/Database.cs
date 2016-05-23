using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Security.Principal;
using System.Configuration;
using Blackjack.Models;
using System.Text;
using Blackjack.BLL;

namespace Blackjack.repo
{
    public class Database
    {
        private static string connectionString = ConfigurationManager.ConnectionStrings["DBConnection"].ConnectionString;
        
        /*TODO: Update retrieveAllPlayerInfo to new Player Hands tables format*/
        public List<Player> retrieveAllPlayerInfo()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand("SELECT * FROM Player", conn);
                command.Connection.Open();

                List<Player> players = new List<Player>();

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    Player newPlayer = new Player
                    {
                        id = reader.GetInt32(0),
                        hand = handBreakup(reader.GetString(1)),
                        handValue = reader.GetInt32(2),
                    };
                    players.Add(newPlayer);
                }
                return players;
            }
        }

        public Player retrievePlayer(int id)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                var commandText = "SELECT * FROM Player INNER JOIN Hands ON (Player.id = Hands.playerId) WHERE Player.id=@id";
                SqlCommand command = new SqlCommand(commandText, conn);
                command.Parameters.AddWithValue("@id", id);
                command.Connection.Open();

                SqlDataReader reader = command.ExecuteReader();
                Player player = new Player();
                
                while (reader.Read())
                {
                    Player tempPlayer = new Player
                    {
                        id = reader.GetInt32(0),
                        name = reader.GetString(1),
                        hand = handBreakup(reader.GetString(2)),
                        handValue = reader.GetInt32(3),
                    };
                    player.hand = tempPlayer.hand;
                    player.id = tempPlayer.id;
                    player.handValue = tempPlayer.handValue;
                }
                return player;
            }
        }
        private List<string> handBreakup(string hand)
        {
            List<string> temp = hand.Split(',').ToList();
            return temp;
        }

        public void updatehand(int id,List<string> listHand, int handValue)
        {
            var hand = String.Join(",", listHand.ToArray());
          
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                var commandText = "Update Hands Set hand=@hand,handValue=@handValue Where playerId=@id";
                SqlCommand command = new SqlCommand(commandText, conn);
                command.Parameters.AddWithValue("@id", id);
                command.Parameters.AddWithValue("@hand", hand);
                command.Parameters.AddWithValue("@handValue", handValue);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        /*TODO: Make sure to insert PlayerID into the Hands Table*/
        public void insertPlayer(Player player)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                var commandText = "INSERT INTO Player VALUES (@id, @name)";
                SqlCommand command = new SqlCommand(commandText, conn);
                command.Parameters.AddWithValue("@id", player.id);
                command.Parameters.AddWithValue("@name", player.name);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public void insertHand(Player player)
        {
            var hand = String.Join(",", player.hand.ToArray());

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                var commandText = "INSERT INTO Hands VALUES (@hand, @handValue, @Playerid)";
                SqlCommand command = new SqlCommand(commandText, conn);
                command.Parameters.AddWithValue("@Playerid", player.id);
                command.Parameters.AddWithValue("@hand", hand);
                command.Parameters.AddWithValue("@handValue", player.handValue);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public void postDeck(Stack<string> stackDeck)
        {
            var deck = string.Join(",", stackDeck.ToArray());

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                var commandText = "Update Deck Set Deck=@deck";
                SqlCommand command = new SqlCommand(commandText, conn);
                command.Parameters.AddWithValue("deck", deck);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public void getDeck()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand("SELECT * FROM Deck", conn);
                command.Connection.Open();

                 
                Stack<string> deck = new Stack<string>();

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    var temp = reader.GetString(0);
                    var sqlDeck = temp.Split(',').ToList();
                    GlobalDeck.deck = new Stack<string>(sqlDeck);
                }
            }
        }

        public void deleteGame()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand("DELETE FROM Player;DELETE FROM Hands", conn);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }
    }
}