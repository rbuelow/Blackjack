var playerCount;
var dealer;

$('#start').click(function () {
    var isNumber = false;
    $('#start').hide();
    while (isNumber == false) {
        playerCount = prompt("How many players?");
        if (parseInt(playerCount) != NaN) {
            var count = parseInt(playerCount);
            StartGameWebApi(count);
            isNumber = true;
            $('#game').show();
        };
    };
});

$('#deal').click(function () {
    GetPlayerIdsWebApiCall();
    dealer = $('#dealerGroup').children('ul');
    DealPlayerHands();
    DealDealerHand(dealer);
    $('#deal').hide();
    $(document).ready(Hit);
});

function Hit () {
    $('.hit').click(function () {
        var $log = $(this).parent()
        HitWebApiCall($log);
        GetHandValueInfo($log);
        if ($('.hit').length <= 0) {
            var dealerValue = GetHandValueInfo(dealer);
            ShowDealerHand(dealer);
            while (dealerValue == "keep playing") {
                DealerHit(dealer);
                var newValue = GetHandValueInfo(dealer);
                dealerValue = newValue;
            }
            if (dealerValue == "Black Jack") {
                dealer.append("<h2>Black Jack!!</h2>");
            }
            else if (dealerValue == "stop") {
                dealer.append("<h2>Dealer stops</h2>")
            }
            else 
                dealer.append("<h2>Bust!<h2>");        
        }
    });
};

function DealPlayerHands() {
    var playerList = $('#playerGroup');
    $.each(playerList.children('ul'), function (key, value) {
        var $log = $(this);
        PlayerHandWebApiCall($log);
        GetHandValueInfo($log);
    });
};

function DealDealerHand(htmlTag) {
    DealerHandWebApiCall(htmlTag)
    GetHandValueInfo(htmlTag);
};

function ShowDealerHand(htmlTag) {
    htmlTag.children('li').remove();
    PlayerHandWebApiCall(htmlTag);
    htmlTag.children('.hit').remove();
}

function GetHandValueInfo(htmlTag) {
    var Vstring;
    $.ajax({
        url: 'api/Card/' + htmlTag.attr('id'),
        type: 'get',
        async: false,
        success: function (valueString) {
            if (htmlTag.attr('id') == playerCount - 1) {
                Vstring = valueString
                return Vstring;
            }        
            if (valueString == "Black jack") {
                htmlTag.children('.hit').remove();
                htmlTag.append("<h2>Black Jack!!</h2>");
                return valueString;
            }
            else if (valueString == "bust") {
                htmlTag.append("<h2>Bust!<h2>");
                htmlTag.children('.hit').remove();
                return valueString;
            }
            else
                return valueString;
        }
    });
    return Vstring;
};

function DealerHit(htmlTag) {
    HitWebApiCall(htmlTag);
}

//Web api calls
function PlayerHandWebApiCall(htmlTag) {
    $.ajax({
        url: '/api/Player/' + htmlTag.attr('id'),
        type: 'post',
        async: false,
        success: function (hand) {
            htmlTag.append("<li class='cardDisplay'>" + hand[0] + "</li><li class='cardDisplay'>" + hand[1] + "</li> <button class='hit'>Hit</button>");
        }
    });
}
function HitWebApiCall(htmlTag) {
    $.ajax({
        url: "api/card/" + htmlTag.attr('id'),
        type: 'post',
        async: false,
        success: function (card) {
            htmlTag.append("<li class='cardDisplay'>" + card + "</li>");
        }
    });
}
function DealerHandWebApiCall(htmlTag) {
    $.ajax({
        url: '/api/Dealer/' + htmlTag.attr('id'),
        type: 'get',
        async: false,
        success: function (dealerHand) {
            htmlTag.append("<li class='cardDisplay'>" + dealerHand[0] + "</li><li class='cardDisplay'>" + dealerHand[1] + "</li>");
        }
    });
}
function StartGameWebApi(count) {
    $.post("/api/Game/"+count);
};
function GetPlayerIdsWebApiCall() {
    $.ajax({
        url: '/api/Game',
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



