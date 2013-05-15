var storage = window.localStorage;

function go()
{
    //alert(chr)me.extension.getBackgroundPage().getTime())
    alert(chrome.extension.getViews())
    for (i in chrome.extension.getViews())
        for (j in i)
            j.focus()
    

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
    /*
    chrome.extension.onRequest.addListener(function(feeds, sender, sendRequest)
    {
    if (feeds.length > 0)
    document.stpw.time.value = feeds
    sendRequest()
    })
    */
    document.stpw.time.value = count


    $("#a").on("click", reset)
}

function reset()
{
    setCookie("renrenTime", "", 0)
    setCookie("startDate", "", 0)
    count = 0
}

$(document).ready(go);
