$( document ).ready(function() {
    $('.Icon').on('click', function() {
        $("*").removeClass('IconClick')
        $(this).toggleClass('IconClick')
    })
    // $('.Main').on('click', function() {
    //     $("*").removeClass('IconClick')
    // })

    $('#ComputerClose').on('click', function(){
        $('.ComputerContainer').addClass('ComputerContainerHide')
    })

    $('#ComputerIcon').on('dblclick', function(){
        $('.ComputerContainer').toggleClass('ComputerContainerHide')
    })
});
