function display(val){
    document.getElementById('display').value=document.getElementById('display').value+val;6
}

function cl(){
    document.getElementById('display').value='';
}
function back(val){
    var a=document.getElementById("display").value;
    document.getElementById("display").value = a.substr(0,a.length - 1);
}
function cal(){
    var us=document.getElementById('display').value;
    var mh=eval(us);
    document.getElementById('display').value=mh;
}