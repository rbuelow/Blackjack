$(function () {
    $(document).ready(Hit)
});

function Hit() {
    $('#hit').click(function () {
        var obj = $('#hit').data('deck')
        if (typeof (obj) == "string") {
            obj = obj.split(",");
        };
        var cards = {
            deck: obj
        }
        $('#hit').remove();
        $.post("/api/web", cards, function (data) {
            $(".player").append("<li  class=&#32;cardDisplay&#32;></li>")
            $(".player li:last").append(data.card);
            var deck = data.deck
            var $log = $('#hitBtn'),
                str = '<button id="hit" class="hit" data-deck=' + deck +'>Hit</button>',
                html = $.parseHTML(str);
            $log.append(html);
            $(document).ready(Hit);
        });
    });
}

$('#deal').click(function () {  
    $('.cardDisplay').show();
});


