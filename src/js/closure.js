var foo = ( function() {
  var secret = 'secret';
  // “闭包”内的函数可以访问 secret 变量，而 secret 变量对于外部却是隐藏的
  return {
    get_secret: function () {
      // 通过定义的接口来访问 secret
      return secret;
    },
    new_secret: function (new_secret) {
      // 通过定义的接口来修改 secret
      secret = new_secret;
    }
  };
} ());

foo.get_secret (); // 得到 'secret'
foo.secret; // Type error，访问不能
foo.new_secret ('a new secret'); // 通过函数接口，我们访问并修改了 secret 变量
foo.get_secret (); // 得到 'a new secret'

// JavaScript中的函数运行在它们被定义的作用域里，而不是它们被执行的作用域里。
/**
 * 什么是闭包?
简单来说，闭包是指可以访问另一个函数作用域变量的函数，一般是定义在外层函数中的内层函数。
为什么需要闭包？
局部变量无法共享和长久的保存，而全局变量可能造成变量污染，所以我们希望有一种机制既可以长久的保存变量又不会造成全局污染。
特点
占用更多内存
不容易被释放
何时使用？
变量既想反复使用，又想避免全局污染
如何使用？
1.定义外层函数，封装被保护的局部变量。 
2.定义内层函数，执行对外部函数变量的操作。 
3.外层函数返回内层函数的对象，并且外层函数被调用，结果保存在一个全局的变量中。
函数生命周期
直接上图，点击图片放大查看。https://www.zhihu.com/question/34547104
要记住函数对象、作用域链对象、执行环境(EC)和活动对象(AO)这几个东西都啥时候出现，啥时候消失。

应用场景

　　保护函数内的变量安全：如迭代器、生成器。

　　在内存中维持变量：如果缓存数据、柯里化。


 */ 
