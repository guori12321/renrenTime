var storage = window.localStorage;

function go()
{
    chrome.extension.onRequest.addListener(function(feeds, sender, sendRequest)
    {
        if (feeds.length > 0)
            document.stpw.time.value = feeds
        sendRequest()
    })

    $("#a").on("click", reset)
}

function reset()
{
    setCookie("renrenTime", "", 0)
    setCookie("startDate", "", 0)
    count = 0
}

$(document).ready(go);
