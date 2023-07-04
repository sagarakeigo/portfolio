$(function () {
    $('nav a').click(function () {
        var tabId = $(this).attr('data-tab');

        $('nav a').removeClass('active');
        $('.Tabcondent').removeClass('active');

        $(this).addClass('active');
        $('#' + tabId).addClass('active');
    });

});
