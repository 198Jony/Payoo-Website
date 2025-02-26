//login part
document.getElementById("login").addEventListener('click',
    function(event){
        event.preventDefault();
            const acoountNum = document.getElementById("number").value;
            const validPin = document.getElementById("pin").value;
            const convertedValidPin =parseInt(validPin);
            if(acoountNum.length==11){
                if(convertedValidPin===1234){
                    window.location.href="./main.html";
                }
                else{
                    alert('Invalid PIN');
                }
            }
            else{
                alert('Invalid Account Number');
            }
            
})


