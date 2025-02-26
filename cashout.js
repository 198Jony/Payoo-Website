document.getElementById("cash-out").addEventListener('click',
    function(event){
        event.preventDefault();
            const acoountNum = document.getElementById("cash-out-number-verify").value;

            const validPin = document.getElementById("cash-out-pin-verify").value;
            const convertedValidPin =parseInt(validPin);

            const amountS = document.getElementById("cash-out-amount").value;
            const convertedAmount =parseFloat(amountS);

            const mainAmount =document.getElementById("main-amount").innerText;
            const convertedMainAmount =parseFloat(mainAmount);
            console.log(mainAmount);

            if(acoountNum.length==11){
                if(convertedValidPin===1234){
                    const minus = convertedMainAmount-convertedAmount;
                    console.log(minus);
                    document.getElementById("main-amount").innerText=minus;
                }
                else{
                    alert('PIN not verified');
                }
            }
            else{
                alert('Invalid Account Number');
            }
            
})