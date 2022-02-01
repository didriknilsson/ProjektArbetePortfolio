$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.menu-btn').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('.menu-btn').removeClass("sticky");
        }
    });
});