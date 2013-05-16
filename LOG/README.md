遇到不少问题：

1. 因为`JS`是不支持多线程的，因此也就没有类似于`sleep()`之类的函数。那么，要实现“每50ms更新一次时间显示”的话，应该怎么做呢？找到一个JS秒表的代码，其中`display()`函数就是用来更新显示的。其中的第一行就是模拟`sleep(50)`功能的：
'''
function display() {
setTimeout("display();", 50);
...
}
'''
也就是说，每过50ms,再运行一次这段函数。`递归`+`setTimeout`就解决了这个问题;

2. 当按下插件栏的图标时，显示`temp.html`，但其中的`js`代码并不执行。当我自己运行`temp.html`的时候，却一切正常。debug的时候提示是权限有问题，找到[这里](http://ephrain.pixnet.net/blog/post/46329708-%5Bchrome-extension%5D-%E8%A2%AB-chrome-extension-manifest-v2-%E6%90%9E%E7%BF%BB)之后，发现**要将显示的html中的js代码全部写到另一个js文件中**才可以。这是什么奇怪的规定啊！
