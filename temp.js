var now = Date()
var last
var count
var flag = true

function start()
{
    flag = true
//  document.title = "focused"
    last = new Date()
}

function stop()
{
    flag = false
    document.title = 'not focused';
    document.stpw.time.value = "zzz"
}

function go()
{
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop)
    $("#a").on("click", reset)
    start()
    display()
}
//  $(window).focus(function(e) {
//       alert(document.URL.indexOf("file")>=0)
//   }
// $(window).focus(function(e) {
//     //$(document).wirte(a)
//     alert("you come")
//  // Do Blur Actions Here
                //  }); 
                // $(window).blur(function(e) {
                    //     alert("You Leave")
                //     });

function display() 
{
    setTimeout(display, 500)

    renrenTime = getCookie("renrenTime")
    if (renrenTime != null && renrenTime != "")
    {
        //alert("曾经登录过人人")
        count = parseInt(renrenTime)
    }
    else 
    {
        //alert("从未上过人人")
        count = 0
        renrenTime = "0"
        setCookie("renrenTime", renrenTime, 365)

        var startDate = new Date()
        setCookie("startDate", startDate.toGMTString())
    }

    if (flag) 
    {
        now = new Date()
        //ms = now.getTime() - last.getTime();
        //ms = now - last
        count += now.getTime() - last.getTime()
        setCookie("renrenTime", count + "", 365)
        document.stpw.time.value = count
        //document.stpw.time.value = 555;
    }

}

function reset()
{
    setCookie("renrenTime", "", 0)
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

$(document).ready(go);
