$(window).on('resize', function() {
    if($(window).width() > 600) {
        $('#body').addClass('sidebar');
        $('#body').addClass('topo')
        $('#body').removeClass('h-right');
    }
    else {
        $('#body').removeClass('sidebar');
        $('#body').removeClass('topo')
        $('#body').addClass('h-right');
    }
})