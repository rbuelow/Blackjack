//global variables 
var playerCount;
var dealer;


//Event functions
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
    $(document).ready(Stay);
});

function Hit () {
    $('.hit').click(function () {
        var $log = $(this).parent();
        HitWebApiCall($log);
        GetHandValueInfo($log);
        if ($('.hit').length <= 0) {
            PlayDealerHand();
        }
    });
};

function Stay () {
    $('.stay').click(function () {
        var $log = $(this).parent();
        $log.children('.hit').remove();
        $log.children('.stay').remove();
        $log.append("<h2>Stay</h2>");
        if ($('.hit').length <= 0) {
            PlayDealerHand();
        }
    });
}


//Dom functions
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
    htmlTag.children('.stay').remove();
}

function GetHandValueInfo(htmlTag) {
    var Vstring = GetHandValueInfoWebApiCall(htmlTag);
    if (htmlTag.attr('id') == playerCount - 1) {
        return Vstring;
    }
    if (Vstring == "Black jack") {
        htmlTag.append("<h2>Black Jack!!</h2>");
        htmlTag.children('.hit').remove();
        htmlTag.children('.stay').remove();
    }
    else if (Vstring == "bust") {
        htmlTag.append("<h2>Bust!<h2>");
        htmlTag.children('.hit').remove();
        htmlTag.children('.stay').remove();
    }
    else
        return false;
};

function GetDealerHandValueInfo(stringValue) {
    while (stringValue == "keep playing") {
        HitWebApiCall(dealer);
        stringValue = GetHandValueInfo(dealer);
    }
    if (stringValue == "Black Jack") {
        dealer.append("<h2>Black Jack!!</h2>");
    }
    else if (stringValue == "stop") {
        dealer.append("<h2>Dealer stops</h2>")
    }
    else
        dealer.append("<h2>Bust!<h2>");
}

function PlayDealerHand() {
    var dealerValue = GetHandValueInfo(dealer);
    ShowDealerHand(dealer);
    GetDealerHandValueInfo(dealerValue);
}


//Web api calls
function PlayerHandWebApiCall(htmlTag) {
    $.ajax({
        url: '/api/Player/' + htmlTag.attr('id'),
        type: 'post',
        async: false,
        success: function (hand) {
            htmlTag.append("<li class='cardDisplay'>" + hand[0] + "</li><li class='cardDisplay'>" + hand[1] + "</li> <button class='hit'>Hit</button> <button class='stay'>Stay</button>");
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
function GetHandValueInfoWebApiCall(htmlTag) {
    var valueString;
    $.ajax({
        url: 'api/Card/' + htmlTag.attr('id'),
        type: 'get',
        async: false,
        success: function (value) {
           valueString = value;
        }
    });
    return valueString;
}



