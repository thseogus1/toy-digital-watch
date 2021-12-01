
var setTime = 0;
function start(){
    var btn = document.getElementById('startBtn');
    btn.disabled = 'disabled';
    tid = setInterval('msg_time()',10);
}

function msg_time() {
    ho = Math.floor(setTime/360000) < 10 ? "0"+Math.floor(setTime/360000) : Math.floor(setTime/360000);
    mi = Math.floor((setTime%360000)/6000) < 10 ? "0"+Math.floor((setTime%360000)/6000) : Math.floor((setTime%360000)/6000);
    se = (setTime%6000)/100 < 10 ? "0"+(setTime%6000)/100 : (setTime%6000)/100;
 
    if(se.length == 2) se = se + '.00';
    else if (se.length==4) se = se + '0'; 

    var msg = ho + ":" + mi + ":" + se;
    document.all.ViewTimer.innerHTML = msg;
    setTime++;
}

function stop(){
    var btn1 = document.getElementById('startBtn');
    btn1.disabled = false;
    clearInterval(tid);
}

function reset(){
    document.all.ViewTimer.innerHTML = "00:00:00.00";
    stop();
    setTime=0;
    document.getElementById('list').innerHTML = '';
    count=0;
}
var count=0;
function list(){
    if(count > 9){
        count=0;
        document.getElementById('list').innerHTML = '';
    }
    document.getElementById('list').innerHTML += '<li>' + ho + ':' + mi + ':' + se + '</li>';
    count++;
    

}