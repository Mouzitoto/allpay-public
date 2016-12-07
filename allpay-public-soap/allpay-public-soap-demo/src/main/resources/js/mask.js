/**
 * Created by c0rp on 12/6/16.
 */

$("#toUser").mask("+7 999 999-99-99", {placeholder: "+7 ___ ___-__-__"});


$("#toUser").on("blur", function() {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

    if( last.length == 3 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
        var lastfour = move + last;

        var first = $(this).val().substr( 0, 9 );

        $(this).val( first + '-' + lastfour );
    }
});

$("#fromUser").mask("+7 999 999-99-99", {placeholder: "+7 ___ ___-__-__"});


$("#fromUser").on("blur", function() {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

    if( last.length == 3 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
        var lastfour = move + last;

        var first = $(this).val().substr( 0, 9 );

        $(this).val( first + '-' + lastfour );
    }
});

$("#userLoginName").mask("+7 999 999-99-99", {placeholder: "+7 ___ ___-__-__"});
$("#userLoginName").on("blur", function() {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

    if( last.length == 3 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
        var lastfour = move + last;

        var first = $(this).val().substr( 0, 9 );

        $(this).val( first + '-' + lastfour );
    }
});

$("#token").mask("9 9 9 9 9 9", {placeholder: "_ _ _ _ _ _"});
