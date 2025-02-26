document.getElementById("add-money").addEventListener('click',
    function(event){
        event.preventDefault();
            const acoountNum = document.getElementById("number-verify").value;

            const validPin = document.getElementById("pin-verify").value;
            const convertedValidPin =parseInt(validPin);

            const amountS = document.getElementById("amount").value;
            const convertedAmount =parseFloat(amountS);

            const mainAmount =document.getElementById("main-amount").innerText;
            const convertedMainAmount =parseFloat(mainAmount);
            console.log(mainAmount);

            if(acoountNum.length==11){
                if(convertedValidPin===1234){
                    const sum = convertedAmount+convertedMainAmount;
                    document.getElementById("main-amount").innerText=sum;
                }
                else{
                    alert('PIN not verified');
                }
            }
            else{
                alert('Invalid Account Number');
            }
            
})


document.getElementById("logout").addEventListener('click',function(){
    window.location.href="./index.html";
})