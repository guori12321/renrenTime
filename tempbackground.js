var storage = window.localStorage;
var now, last
var count
var flag = true
var nav

function start()
{
    setTimeout(start, 50)
    /*alert(window.focus())
    if (window.onfocus)
    {
        setTimeout(start, 50)
        alert("ON")
    }
    else 
        return
        */

    if (flag) //第一次start，则给last赋值
    {
        last = new Date()
        flag = false
        document.title = "focused"
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
    document.title = 'not focused';
}

function go()
{
    /*
    document.domain = "renren.com"
    start()
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop)
    */

    start()
    window.onfocus = start
    window.addEventListener('focus', start);
}

function reset()
{
    storage.clear()
    count = 0
}

//(document).ready(go);
go()
