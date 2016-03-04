var player = {
    hand: obj
};
var dealer = {
    hand: obj
};

var playerCount

var playerCardValue;
var dealerCardValue;
var obj = $('#hit').data('deck')
var cards = {
    deck: obj
}
$('#start').click(function () {
    var isNumber = false;
    $('#start').hide();
    while (isNumber == false) {
        playerCount = prompt("How many players?");
        if (parseInt(playerCount) != NaN) {
            var count = parseInt(playerCount);
            StartGame(count);
                isNumber = true
                $('#game').show();
        }
    }
    

   
})
//$(function () {
   // $(document).ready(Hit)
    //for (var x = 0; x < 2; x++) {
    //    BuildPlayerHand(cards);
    //    BuildDealerHand(cards);
    //};
//});

function StartGame(count) {
    $.post("/api/Game/"+count);
};


$('#deal').click(function () {
    GetPlayerIds();
    DealPlayerHands();
    DealDealerHand()
    $('#deal').hide();
    //$('.cardDisplay').show();
    //GetPlayerHand();
    //GetDealerHand();
    //GetPlayerValue(player);
    //GetDealerValue(dealer);
    //if (player.handValue == 21 && dealer.handValue == 21) {
    //    alert("Its a push, both you and dealer have blackjack")
    //}
    //else if (dealer.handValue == 21) {
    //    alert("The dealer wins. So sorry!")
    //}
    //else if (player.handValue == 21) {
    //    alert("BlackJack!")
    //    //$.get("/api/web"),function(data){
    //    //}
    //    return false;
    //}
    //else {
    //    $('#deal').hide();
    //    return false;
    //}
    $(document).ready(Hit);
});

function Hit () {
    $('.hit').click(function () {
        var $log = $(this).parent()
        $.post("api/card/" + $(this).parent().attr('id'), function (card) {
            $log.append("<li class='cardDisplay'>" + card + "</li>")
        });
        //    if (obj == "") return false;
        //    if (typeof (obj) == "string") {
        //        obj = obj.split(",");
        //    };   
        //    $('#hit').remove();
        //    $.ajax({
        //        url: 'api/card',
        //        type: 'post',
        //        data: cards,
        //        async: false,
        //        success: function (gameModel) {
        //            $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
        //            $(".player li:last").append(gameModel.card);
        //            var deck = gameModel.deck
        //            var $log = $('#hitBtn'),
        //                str = '<button id="hit" class="hit" data-deck=' + deck + '>Hit</button>',
        //                html = $.parseHTML(str);
        //            $log.append(html);
        //            $(document).ready();
        //        }
        //    });
        //    AddHand();
        //    GetPlayerValue(player)
    });
};
function GetPlayerIds () {
    $.ajax({
        url: '/api/Card',
        type: 'get',
        async: false,
        success: function (ids) {
            for (var i = 0; i < ids.length - 1; i++) {
                $('#playerGroup').append("<h2 class='displayName'>Player</h2><ul class='player' id='" + i + "'></ul>");
            };
            $('#dealerGroup').append("<h2 class='displayName'>Dealer</h2><ul class='dealer' id='" + ids[ids.length - 1]+ "'></ul>");

        }
    });
}

function DealPlayerHands() {
    var playerList = $('#playerGroup')
    $.each(playerList.children('ul'), function (key, value) {
        var $log = $(this);
        $.ajax({
            url: '/api/Player/' + $(this).attr('id'),
            type: 'post',
            async: false,
            success: function (hand) {
                $log.append("<li class='cardDisplay'>" + hand[0] + "</li><li class='cardDisplay'>" + hand[1] + "</li> <button class='hit'>Hit</button>");
            }
        });
    });
};

function DealDealerHand() {
    var dealer = $('#dealerGroup').children('ul')
    $.ajax({
        url: '/api/Dealer/' + dealer.attr('id'),
        type: 'get',
        async: false,
        success: function (dealerHand) {
            dealer.append("<li class='cardDisplay'>" + dealerHand[0] + "</li><li class='cardDisplay'>" + dealerHand[1] + "</li>")
        }
    });
};

function GetHandValueInfo() {

}

//function GetPlayerValue(obj) {    
//    $.post("/api/Player", obj, function (gamePlayer) {
//            playerCardValue = gamePlayer.handValue;
//    });
//}

//function GetDealerValue(obj) {
//    $.post("/api/Player", obj, function (gameDealer) {
//            dealerCardValue = gameDealer.handValue;
//    });
//}

//function AddHand() {
//    var playerCard = $('.player li:last-child')
//    var card = playerCard;
//    player.hand += "," + card.text();
//    player.hand = player.hand.split(',')
//}
//function GetPlayerHand() {
//    var playerList = $('.player')
//    $.each(playerList.children(), function (key, value) {
//        var card = value
//        if (player.hand == undefined) {
//            player.hand = card.innerHTML + ",";
//        }
//        else {
//            player.hand += card.innerHTML;
//        }          
//    });
//    player.hand = player.hand.split(",")
//}

//function GetDealerHand() {
//    var dealerList = $('.dealer')
//    $.each(dealerList.children(), function (key, value) {
//        var card = value
//        if (dealer.hand == undefined) {
//            dealer.hand = card.innerHTML + ",";
//        }
//        else {
//            dealer.hand += card.innerHTML;
//        }        
//    });
//    dealer.hand = dealer.hand.split(",")
//}

//function BuildPlayerHand(cards){
//    $.post("/api/Card", cards, function (data) {
//        $(".player").append("<li  class=&#32;cardDisplay&#32; style=&#32;display:none&#32;></li>")
//        $(".player li:last").append(data.card);
//        cards.deck = data.deck;
//    });
//}

//function BuildDealerHand(cards) {
//    $.post("/api/Card", cards, function (data) {
//        $(".dealer").append("<li  class=&#32;cardDisplay&#32; style=&#32;display:none&#32;></li>")
//        $(".dealer li:last").append(data.card);
//        cards.deck = data.deck;
//    });
//}
