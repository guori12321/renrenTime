var storage = window.localStorage;
var now, last
var count
var flag = true
var nav

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

function getTime()
{
    return "A"
//    return storage.getItem("renrenTime")
}

function go()
{
    /*
    alert("CC")
    document.domain = "renren.com"
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop)
    start()
    */

    //var x = document.getElementById('navigation-for-buddylist')
    var x = document.getElementById("showAppMenu")
    nva = x.childNodes
    nva = x[0]
    nva = x.childNodes
    //alert(nva[1].nodeName)
    nva = nva[1]
    nva = nva.childNodes
    nva = nva[0]
    alert(nva.nodeName)
    alert(nva.className)
    alert(nva.innerHTML)
    nva.innerHTML = "XX"

    //nva[0].nodeValue = "XX"
    /*
    nva = nva[0] //即 <a>
    xx = nva.childNodes //用children不行,也许要children()??
    alert(xx.length)
    for (var i = 0; i < 3; i++)
        alert(xx[i].nodeName)
    xx[2].nodeValue = "DD"
    */

    
    //nva.replaceData(0, 4, "ASDF")

  /*  var newDiv = document.createElement("div");
    var text = document.createTextNode("要添加的文本");
    newDiv.appendChild(text)

    var beforeNode = document.getElementById("navMessag")
    nva.insertBefore(newDiv, beforeNode)
    */
}

function reset()
{
    storage.clear()
    count = 0
}

//(document).ready(go);
go()
