var player = {
    hand: obj
};
var dealer = {
    hand: obj
};
var playerCardValue;
var dealerCardValue;
var obj = $('#hit').data('deck')
var cards = {
    deck: obj
}

//$(function () {
   // $(document).ready(Hit)
    //for (var x = 0; x < 2; x++) {
    //    BuildPlayerHand(cards);
    //    BuildDealerHand(cards);
    //};
//});

$('#deal').click(function () {
    $('.cardDisplay').show();
    GetPlayerHand();
    GetDealerHand();
    GetPlayerValue(player);
    GetDealerValue(dealer);
    if (player.handValue == 21 && dealer.handValue == 21) {
        alert("Its a push, both you and dealer have blackjack")
    }
    else if (dealer.handValue == 21) {
        alert("The dealer wins. So sorry!")
    }
    else if (player.handValue == 21) {
        alert("BlackJack!")
        //$.get("/api/web"),function(data){
        //}
        return false;
    }
    else {
    return false;
    }
    $('#deal').hide();
});


$('#hit').click(function () {
    //var obj = $('#hit').data('deck')
    if (obj == "") return false;
    if (typeof (obj) == "string") {
        obj = obj.split(",");
    };       
    //var cards = {
    //    deck: obj
    //}
    $('#hit').remove();
    $.ajax({
        url: 'api/card',
        type: 'post',
        data: cards,
        async: false,
        success: function (gameModel) {
            $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
            $(".player li:last").append(gameModel.card);
            var deck = gameModel.deck
            var $log = $('#hitBtn'),
                str = '<button id="hit" class="hit" data-deck=' + deck + '>Hit</button>',
                html = $.parseHTML(str);
            $log.append(html);
            $(document).ready();
        }
    });
    AddHand();
    GetPlayerValue(player)
});

    //$.post("/api/Card", cards, function (gameModel) {
    //    t);
            
    //});
    //AddHand();
    //GetPlayerValue(player);



function GetPlayerValue(obj) {    
    $.post("/api/Player", obj, function (gamePlayer) {
        if (playerCardValue == 0) {
            playerCardValue = gamePlayer.handValue;
        }
        else {
            playerCardValue += gamePlayer.handValue;
        }
        
    });
}

function GetDealerValue(obj) {
    $.post("/api/Player", obj, function (gameDealer) {
            dealerCardValue += gameDealer.handValue;
    });
}

function AddHand() {
    var playerCard = $('.player li:last-child')
    var card = playerCard;
    player.hand += "," + card.text();
    player.hand = player.hand.split(',')
}
function GetPlayerHand() {
    var playerList = $('.player')
    $.each(playerList.children(), function (key, value) {
        var card = value
        if (player.hand == undefined) {
            player.hand = card.innerHTML + ",";
        }
        else {
            player.hand += card.innerHTML;
        }          
    });
    player.hand = player.hand.split(",")
}

function GetDealerHand() {
    var dealerList = $('.dealer')
    $.each(dealerList.children(), function (key, value) {
        var card = value
        if (dealer.hand == undefined) {
            dealer.hand = card.innerHTML + ",";
        }
        else {
            dealer.hand += card.innerHTML;
        }        
    });
    dealer.hand = dealer.hand.split(",")
}

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
