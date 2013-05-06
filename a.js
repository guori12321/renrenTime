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

function checkCookie()
{
    renrenTime = getCookie("renrenTime")
    if (renrenTime != null && renrenTime != "")
    {
        alert("曾经登录过人人")
    }
    else 
    {
        alert("从未上过人人")
        renrenTime = "0"
        setCookie("renrenTime", renrenTime, 365)

        var startDate = new Date()
        setCookie("startDate", startDate.toGMTString())
    }
}

checkCookie()
