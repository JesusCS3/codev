var flag = false;
var scroll;

$(window).scroll(function(){
    scroll = $(window).scrollTop();
    
        if(scroll > 200){
            if(!flag){
            $(".logo").css({"margin-top":"auto", "width": "150px", "heigth": "auto"});
            $(".menu").css({"background-color": "#11BDA1"});
                flag = true;
            }
        }else{
            if(flag){
            $(".logo").css({"width": "500px", "heigth": "auto", "display": "block",
            "margin-left": "auto", "margin-right": "auto", "margin-top": "auto"});
            $(".menu").css({"background-color": "#e3f2fd00"});
                flag = false;
            }
        }
})