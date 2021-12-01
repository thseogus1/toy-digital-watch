
count=0;

function start(){
    if(count!=1){
        setTime = document.getElementById('time').value;
        setTime*=100;
    }
    count++;
    var btn = document.getElementById('startBtn');
    btn.disabled = 'disabled';
    tid = setInterval('msg_time()',10);
}

function msg_time() {
    
    ho = Math.floor(setTime/360000) < 10 ? "0"+Math.floor(setTime/360000) : Math.floor(setTime/360000);
    mi = Math.floor((setTime%360000)/6000) < 10 ? "0"+Math.floor((setTime%360000)/6000) : Math.floor((setTime%360000)/6000);
    se = (setTime%6000)/100 < 10 ? "0"+(setTime%6000)/100 : (setTime%6000)/100;
    mse = setTime%100 < 10 ? "0"+setTime%100 : setTime%100;

        if(se.length == 2) se = se + '.00';
        else if (se.length==4) se = se + '0'; 

    var msg = ho + ":" + mi + ":" + se;
    document.all.ViewTimer.innerHTML = msg;
    setTime--;
    
    if (setTime < 0){
        document.getElementById('ViewTimer').innerHTML='00:00:00.00';
        count=2;
        stop();
    }
}


function stop(){
    var btn = document.getElementById('startBtn');
    btn.disabled = false;
    clearInterval(tid);
    
}