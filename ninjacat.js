$(document).ready(function() {

    $('img').click(function() {

        var cat = $(this).attr('src');
        var ninja = $(this).attr('data-alt-src');

        $(this).attr("src", ninja);
        $(this).attr("data-alt-src", cat);

    });

    $('#refresh').click(function() {
        location.reload();

    })
})







