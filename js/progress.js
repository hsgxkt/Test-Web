(function( $ ){  
  $.fn.animateProgress = function(progress, callback) {      
    // 扩展jQuery的原型，为所有jQuery对象添加一个名为animateProgress的方法。  
    // 这个方法接受两个参数：进度（百分比）和回调函数。  
    return this.each(function() {  
      // 对当前jQuery对象集合中的每个元素执行以下操作。  
      $(this).animate({  
        width: progress+'%'  
      }, {  
        // 使用jQuery的animate方法改变元素的宽度到指定的进度百分比。  
        duration: 2000,   
        // 动画的持续时间设置为2000毫秒，即2秒。  
          
        // swing or linear  
        // 动画的缓动函数，可以是swing（先慢后快再慢）或linear（匀速）。  
        easing: 'swing',  
  
        // this gets called every step of the animation, and updates the label  
        // 动画的每一步都会调用此函数，并更新标签。  
        step: function( progress ){  
          // step函数的参数progress表示当前的动画进度（0-1之间的数）。  
          var labelEl = $('.ui-label', this),  
              valueEl = $('.value', labelEl);  
          // 查找当前元素内部的.ui-label元素，并获取其内部的.value元素。  
            
          if (Math.ceil(progress) < 20 && $('.ui-label', this).is(":visible")) {  
            // 如果进度小于20%并且标签是可见的，则隐藏标签。  
            labelEl.hide();  
          }else{  
            if (labelEl.is(":hidden")) {  
              // 如果标签是隐藏的，则显示标签。  
              labelEl.fadeIn();  
            };  
          }  
            
          if (Math.ceil(progress) == 100) {  
            // 如果进度达到100%，则设置标签文本为“完成”。  
            labelEl.text('完成');  
            setTimeout(function() {  
              // 延迟1秒后淡出标签。  
              labelEl.fadeOut();  
            }, 1000);  
          }else{  
            // 如果进度未达到100%，则更新.value元素的文本为当前进度的百分比。  
            valueEl.text(Math.ceil(progress) + '%');  
          }  
        },  
        // 动画完成后调用的函数。  
        complete: function(scope, i, elem) {  
          // scope: 动画的jQuery对象；i: 当前动画的索引（在动画队列中）；elem: DOM元素。  
          if (callback) {  
            // 如果提供了回调函数，则在动画完成后调用它，并将scope, i, elem作为参数传递。  
            callback.call(this, i, elem );  
          };  
        }  
      });  
    });  
  };  
})( jQuery );  
// 传入jQuery对象并执行函数，以结束自执行函数包装器。

$(function() {    
  // 页面加载完毕后执行的函数。使用$(function() {...})可以确保在DOM加载完毕后才执行内部的代码。  
  
  // Hide the label at start    
  // 在页面加载时隐藏进度标签  
  $('#progress_bar .ui-progress .ui-label').hide();    
    
  // Set initial value    
  // 设置进度条的初始宽度为7%  
  $('#progress_bar .ui-progress').css('width', '7%');    
    
  // Simulate some progress    
  // 模拟进度条的进度变化  
  $('#progress_bar .ui-progress').animateProgress(43, function() {    
    // 调用自定义的animateProgress方法，将进度条宽度动画至43%，并传入一个回调函数。  
    $(this).animateProgress(79, function() {    
      // 当43%的动画完成后，再次调用animateProgress方法，将进度条宽度动画至79%，并传入另一个回调函数。  
      setTimeout(function() {    
        // 使用setTimeout函数延迟执行下面的代码，模拟一些异步操作或等待时间。  
        $('#progress_bar .ui-progress').animateProgress(100, function() {    
          // 当79%的动画完成后，将进度条宽度动画至100%，并传入一个最终的回调函数。  
          $('#main_content').slideDown();    
          // 当进度条达到100%时，使用slideDown方法显示#main_content元素。  
          $('#fork_me').fadeIn();    
          // 同时使用fadeIn方法显示#fork_me元素。  
  
          // Add the setTimeout to redirect to index.html after 5 seconds    
          // 添加setTimeout，以便在5秒后重定向到index.html（注意：代码中实际重定向到的是'fy.html'）  
          setTimeout(function() {    
            // 使用setTimeout函数延迟执行下面的代码。  
            window.location.href = 'fuye.html';    
            // 将页面重定向到'fuye.html'。  
          }, 2000);    
          // 延迟2000毫秒（即2秒）后执行重定向。  
        });    
      }, 1500);    
      // 延迟1500毫秒（即1.5秒）后执行上述代码块。  
    });    
  });    
});