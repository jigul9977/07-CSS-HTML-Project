$(document).ready(function(){
    $(".faq-left-side .tab-lable").click(function(){
        if($(this).next().is(':visible')== false){
            $(".faq-left-side .tab-content").slideUp();
        }
        $(this).next().slideToggle();
    });
});