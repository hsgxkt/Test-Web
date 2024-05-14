
  
jQuery(function(){  
    // 当DOM加载完成后，执行以下代码  
    // 设置透明度，兼容性很好  
    // 为id为"yinying"的元素绑定鼠标移入事件  
    $("#yinying").mouseover(function(){  
        // 当鼠标移入时，将此元素的透明度设置为0.5  
        $(this).css("opacity","0.5");  
    });  
    // 为id为"yinying"的元素绑定鼠标移出事件  
    $("#yinying").mouseout(function(){  
        // 当鼠标移出时，将此元素的透明度设置回1.0（完全不透明）  
        $(this).css("opacity","1.0");  
    });  
});







// 定义一个jQuery插件方法，名为clickToggle，它可以被添加到jQuery对象的原型上，  
// 这样所有的jQuery对象都可以使用这个方法。  
jQuery.fn.clickToggle = function(a, b) {    
    // 定义一个局部变量t，初始值为0，用于跟踪点击次数。  
    let t = 0;    
      
    // 返回当前jQuery对象，这样可以链式调用其他方法。  
    // 使用bind方法为当前jQuery对象绑定click事件处理函数。  
    return this.bind("click", function() {    
        // 每次点击时，t的值加1。  
        t += 1;    
          
        // 检查t的值是否是奇数。如果是奇数，则调用函数a。  
        // 函数a是clickToggle的第一个参数，它会在每次奇数次点击时被调用。  
        if (t % 2 === 1) a.call(this);    
          
        // 如果t的值不是奇数（即偶数），则调用函数b。  
        // 函数b是clickToggle的第二个参数，它会在每次偶数次点击时被调用。  
        else b.call(this);    
    });    
};
  
$(function() {    
    // 当文档加载完成后，执行以下函数。  
    $("#yinying1").clickToggle(    
        // 为ID为"yinying1"的元素绑定clickToggle插件，  
        // 这个插件会交替执行两个函数，分别对应奇数次和偶数次点击。  
        function() {    
            // 第一个函数：当元素被点击奇数次时执行  
            // 只改变当前图片的透明度，将其设置为半透明。  
            $(this).css("opacity", "0.5");    
        },    
        function() {    
            // 第二个函数：当元素被点击偶数次时执行  
            // 将当前图片的透明度设置回完全不透明。  
            $(this).css("opacity", "1.0");    
        }    
    // 结束clickToggle方法的调用  
    );    
// 结束文档加载完成后的函数  
});





 $(function () {  
     // 文档加载完成后执行此函数  
     const $a = $("#dianji");  
     // 获取ID为"dianji"的元素，并将其存储在常量$a中  
       
     // 点击切换状态  
     $a.click(function() {  
       // 为$a元素绑定点击事件  
       let state = $a.data('state');  
       // 获取$a元素上存储的名为'state'的数据值，并存储在变量state中  
         
       if(state === 'on') {  
         // 如果state的值是'on'  
         $a.data('state', 'off');  
         // 将$a元素上存储的名为'state'的数据值设置为'off'  
         $a.text('站长电话:13845446627');  
         // 将$a元素的文本内容设置为'站长电话:13845446627'  
       } else {  
         // 如果state的值不是'on'  
         $a.data('state', 'on');  
         // 将$a元素上存储的名为'state'的数据值设置为'on'  
         $a.text('邮箱:2063217744@qq.com');  
         // 将$a元素的文本内容设置为'邮箱:2063217744@qq.com'  
       }  
     // 结束点击事件处理函数  
     });
   // 结束文档加载完成后的函数  
   });
  
  
$(document).ready(function() {  
  // 当文档加载完成后执行以下函数  
  var nav = $('.navbar-collapse'); // 选择页面中class为'navbar-collapse'的元素，通常代表导航栏的折叠部分  
  var timeout; // 声明一个变量timeout，用来存储setTimeout函数返回的ID，以便在需要时清除定时器  
  
  // 使用hover方法为nav元素绑定鼠标进入和离开事件  
  nav.hover(    
    function() {  
      // 鼠标进入导航栏时执行以下函数  
      clearTimeout(timeout); // 清除之前设置的定时器，确保导航栏不会因之前的定时器而自动收缩  
      $(this).addClass('show'); // 为当前导航栏元素添加'show'类，通常用来展开导航栏  
    },    
    function() {  
      // 鼠标离开导航栏时执行以下函数  
      // 设置一个定时器，在500毫秒后执行函数内部的操作  
      timeout = setTimeout(function() {  
        // 定时器触发时执行以下函数  
        $(this).removeClass('show'); // 移除当前导航栏元素的'show'类，通常用来收缩导航栏  
      }.bind(this), 500); // 使用bind方法确保setTimeout中的this指向当前的nav元素，500毫秒后执行  
    }    
  );  
  
  // 为class为'navbar-toggler'的元素（通常是导航栏的切换按钮）绑定点击事件  
  $('.navbar-toggler').click(function() {  
    // 点击切换按钮时执行以下函数  
    clearTimeout(timeout); // 清除之前设置的定时器，确保导航栏不会因之前的定时器而自动收缩  
    nav.toggleClass('show'); // 切换nav元素的'show'类，如果元素有'show'类则移除，没有则添加，实现导航栏的展开和收缩切换  
  });  
});;  
  
  
  


       
      
 