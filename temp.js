var now = Date()
var last
var count = 0
var flag = true

function start()
{
    flag = true
    document.title = "focused"
    last = new Date()
    document.stpw.time.value = "asdf"
  //  now = Date()    
  //  count += now.getTime() - last.getTime()
  //  document.stpw.time.value = count;
  //  document.stpw.time.value = "asdf";
}

function stop()
{
    flag = false
    document.title = 'not focused';
    document.stpw.time.value = "zzz"
}

function go()
{
    $("#a").on("click", dd);
    $("#b").on("click", dd);
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop)
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
    setTimeout(display, 50)
    if (flag)  
    {
        now = new Date()
        //ms = now.getTime() - last.getTime();
        //ms = now - last
        count += now.getTime() - last.getTime()
        document.stpw.time.value = count
        //document.stpw.time.value = 555;
    }
}

function dd()
{
    alert("aa")
}

$(document).ready(go);
