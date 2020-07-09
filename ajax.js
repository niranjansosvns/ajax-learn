loadDoc("url-1", fn1);
loadDoc("url-2", fn2);

function loaddoc(url , cfunction) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cfunction(this);
        }
    };
    xhttp.open('get',url, true);
    xhttp.send();
}

function fn1(xhttp){
}

function fn2(xhttp){
}