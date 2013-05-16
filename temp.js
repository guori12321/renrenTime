var now = Date()
var last
var count
var flag = true

function start()
{
    flag = true
    document.title = "focused"
    last = new Date()
}

function stop()
{
    flag = false
    document.title = 'not focused';
}

function go()
{
    if (document.URL.indexOf('renren.com') >= 0)
    {
        window.addEventListener('focus', start);
        window.addEventListener('blur', stop)
    }
    else if (document.URL.indexOf('temp.html'))
    {
//        start()
        display()
        $("#a").on("click", reset)
    }
}

function display() 
{
    setTimeout(display, 50)

    renrenTime = getCookie("renrenTime")
    if (renrenTime != null && renrenTime != "")
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
    //if (flag) 
    //{
        now = new Date()
        //count += now.getTime() - last.getTime()
        count = 'aa'
        setCookie("renrenTime", count + "", 365)
        document.stpw.time.value = count
    //}
    $("#a").on("click", reset)
}

function reset()
{
    setCookie("renrenTime", "", 0)
    setCookie("startDate", "", 0)
    count = 0
}

//$(document).ready(go);
go()
