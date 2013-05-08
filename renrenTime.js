var now = Date()
var last
var count
var flag = true

function start()
{
    alert("aa")
    flag = true
    document.title = "focused"
    last = new Date()
}

function stop()
{
    alert("bb")
    flag = false
    document.title = 'not focused';
}

function go()
{
    if (document.URL.indexOf('baidu.com') >=0)
    {
        window.addEventListener('focus', start);
        window.addEventListener('blur', stop)
        start()
    }
    else if (document.URL.indexOf('renrenTimePopup.html') >=0)
    {
        alert("VV")
        display()
        $("#reset").on("click", reset)
    }
}

function display() 
{
    //setTimeout(display, 200)
    alert("X")

    time = getCookie("time")
    if (time != null && time != "")
    {
        alert("曾经登录过人人")
        count = parseInt(time)
    }
    else 
    {
        alert("从未上过人人")
        count = 0
        time = "0"
        setCookie("time", time, 365)

        var startDate = new Date()
        setCookie("startDate", startDate.toGMTString())
    }

    //    if (flag) 
        //    {
            //        now = new Date()
            //        count += now.getTime() - last.getTime()
            //        setCookie("time", count + "", 365)
            document.stpw.time.value = count
            //      }

            //$(document).stpw.reset.value = count+""
            //document.stpw.value = count
            //for(attribute in $('#time')){ 
                //  alert(attribute); 
}

function reset()
{
    setCookie("time", "", 0)
    setCookie("startDate", "", 0)
    count = 0
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        { 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) 
                c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}

go()
