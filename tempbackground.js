var storage = window.localStorage;
var now, last
var count
var flag = true //表示是否是第一次进入计时
var nav
var focused = true;

function start()
{
    if (focused)
    {
        setTimeout(start, 50)
    }
    else
        return

    if (flag) //第一次start，则给last赋值
    {
        last = new Date()
        flag = false
        //document.title = "focused"
    }

    if (storage.getItem("renrenTime"))
    {
        count = parseInt( storage.getItem("renrenTime"))
    }
    else
    {
        storage.setItem("renrenTime",0);
        count = 0

        var startDate = new Date()
        storage.setItem("startDate", startDate.toGMTString())
    }

    now = new Date()
    if (focused) //只有当当前窗口获得焦点时再计时
        count += now.getTime() - last.getTime()
    last = new Date()
    storage.setItem("renrenTime",count);

    var x = document.getElementById("showAppMenu")
    nva = x.firstChild
    nva = x.childNodes
    nva = nva[1]
    nva = nva.firstChild

    count = parseInt(count / 1000)
    var time = ""
    //注意10*60*60加括号！
    time += parseInt(count / (10*60*60))
    count = parseInt(count % (10*60*60))
    time += parseInt(count / (60*60))
    count = parseInt(count % (60*60))
    time += ":"
    time += parseInt(count / (10*60))
    count = parseInt(count % (10*60))
    time += parseInt(count / 60)
    count = parseInt(count % 60)
    time += ":"
    time += parseInt(count / (10))
    count = parseInt(count % 10)
    time += count
    nva.innerHTML = time
}

function stop()
{
    flag = false 
    //document.title = 'not focused';
}

function go()
{
    /*
    document.domain = "renren.com" //无法设定，因为chrome的安全设定
    */

    window.onfocus = function() {
        focused = true;
        start()
    }

    window.onblur = function() {
        focused = false;
        flag = true //切换出去了，相当于重新开始计时
    }

    start()
}

function reset()
{
    storage.clear()
    count = 0
}

//(document).ready(go);
go()
