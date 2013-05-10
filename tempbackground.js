var storage = window.localStorage;
var now, last
var count
var flag = true

function start()
{
    last = new Date()
    flag = true
    document.title = "focused"
}

function stop()
{
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

    if (flag) //第一次从start切换到stop，则更新count
    {
        now = new Date()
        count += now.getTime() - last.getTime()
        storage.setItem("renrenTime",count);
        chrome.extension.sendRequest(count)
        flag = false
    }
    document.title = 'not focused';
}

function go()
{
    document.domain = "renren.com"
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop)
    start()
}

function reset()
{
    storage.clear()
    count = 0
}

//(document).ready(go);
go()
