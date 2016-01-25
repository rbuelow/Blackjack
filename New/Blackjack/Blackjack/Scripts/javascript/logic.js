$('#hit').click(function () {
    var deck = ('#hit').data();
    $.get("/api/web", deck, function (data) {
        $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
        $(".player li:last").append(data.card);
    });
});

$('#deal').click(function () {  
    $('.cardDisplay').show();
});

//$('#shuffle').click(function () {
//    $.get("/api/web/1", function () {
//    });
//});

