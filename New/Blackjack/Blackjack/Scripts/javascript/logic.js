$('#shuffle').click(function () {
    $.get("/api/web", function () {
    });
});
$('#hit').click(function () {
    $.get("/api/web/1", function (data) {
        $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
        $(".player li:last").append(data.card);
        if (data.message) {
            $("#playerName").append(data.message);
        }
    });
});
$('#deal').click(function () {
    $('.cardDisplay').remove();
    $.get("/api/web/2", function (data) {
        for (var x = 0; x <= 1; x++) {
            $(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>");
            $(".dealer li:last").append(data.listPlayers[0].hand[x]);
            $(".player").append("<li  class=&#32;cardDisplay&#32;></li>");
            $(".player li:last").append(data.listPlayers[1].hand[x]);
        }
        $('#dealerName').append(data.listPlayers[0].handValue)
    });
});
$('#stay').click(function () {
    $.get("/api/web/3", function (data) {
        $(".cardDisplay").first().replaceWith("<li  class=&#32;cardDisplay&#32;></li>")
        $(".dealer li:first").append(data.cards[0])
        if (data.cards.length > 0) {
            for (x in data.cards) {
                if (data.cards[0] != data.cards[x]) {
                    $(".dealer").append("<li  class=&#32;cardDisplay&#32;></li>");
                    $(".dealer li:last").append(data.cards[x].valueOf());
                }
            }
        }
        if (data.message) {
            if(data.message == "Bust") {
                $("#dealerName").append(data.message);
            }
            else {
                $("body").append(data.message);
            }
        }
    })
})