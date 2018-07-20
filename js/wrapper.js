function wrapper(){
    var num=0;
    var timer=null;
    // 设置ul宽度
    var aLiWidth = $(".ul_list li").width()+14;
    var len = $(".ul_list li").length;
    var ulWidth = `${aLiWidth*len}px`;
    $(".ul_list").css("width",ulWidth)
    go();
    $("#box").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
        clearInterval(timer);//移动进去时清除定时器
    }).mouseleave(function(){
        go();//移出后执行go函数
    });
    //页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
    function go(){
        timer=setInterval(function(){//设置定时器
            num++;//用一个全局变量来控制图的运动次数
            if(num>3){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                num=1;
                $(".ul_list").css("margin-left","0px");
            }
            $(".ul_list").animate({"marginLeft":-aLiWidth*num+"px"},580);//使用animate实行运动功能
            console.log(num)
        },3000);
    }


    $(".right_click").click(function(){
        //右按钮点击事件，每点击一次num++,这里有很多的判断，是用来消除一些BUG的。
        if(num<=3){num++;}
        if(num>3){
            num=1;
            $(".ul_list").css("margin-left","0px");
        }
        $(".ul_list").animate({"marginLeft":-aLiWidth*num+"px"},580);
    });

    $(".left_click").click(function() {//左按钮点击事件
        if (num >= 0) {
            num--;
        }
        if (num <= 0) {
            num = 3;
            $(".ul_list").css("margin-left", `${(aLiWidth*len)/2}px`);
        }
        $(".ul_list").animate({"marginLeft": -aLiWidth * num + "px"}, 580);
    })
}