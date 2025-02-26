document.getElementById('cash-out-box').style.display="none";

document.getElementById("btn-cash-out").addEventListener('click',function(){
    document.getElementById('cash-out-box').style.display="block";
    document.getElementById('add-money-box').style.display="none";
})

document.getElementById("btn-add-money").addEventListener('click',function(){
    document.getElementById('cash-out-box').style.display="none";
    document.getElementById('add-money-box').style.display="block";
})



