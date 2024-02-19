const seats = document.getElementsByTagName('h6')
let total=0;
const trArray=[];
let seatPurchased=1;
let seatCapacity=39;
const seatArray=[];

for (const seat of seats){
    seat.addEventListener('mouseover', function(){
        this.style.cursor="pointer"
        
    })

    seat.addEventListener('click', function(){
        
        const seatName= seat.innerText
        const td=document.createElement('td')
        td.innerText=seatName;
        const td1=document.createElement('td')
        td1.innerText='Economic'
        const td2=document.createElement('td')
        td2.innerText=parseInt('550');

        const tr=document.createElement('tr')
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)

        // console.log(tr)

        const calculatorDisplay= document.getElementById('table-data')
        // console.log(calculatorDisplay)

        if ( trArray.length<4 && seatArray.includes(seat.innerText)===false){
            trArray.push(tr)
            calculatorDisplay.appendChild(tr)
            const ticketPrice= 550;
            total+=ticketPrice;
            seatArray.push(seat.innerText);
            
            const totalPriceDisplay=document.getElementById('total-counter');
            totalPriceDisplay.innerText=total;
            this.style.backgroundColor='#82E0AA'

            const seatPurchasedDisplay=document.getElementById('seat-purchased')
            seatPurchasedDisplay.innerText=seatPurchased;
            seatPurchased++;


            const reducingTotalTicket= document.getElementById('total-seat-count')
            reducingTotalTicket.innerText= seatCapacity-- ;
        
        }


        
        else{
                if(seatArray.includes(seat.innerText)===true){
                    alert('You Can Buy A Ticket Once')
                }

                else{
                    alert('You Can Not Buy More Than 4 Tickets ')
                }
         
        }
        
        
       
    })
}

document.getElementById('couponField').addEventListener('keyup', function(event){
    const text= event.target.value;

    const value= text
    // .split(' ').join('').toUpperCase()

    // const couponBtn= document.getElementById('couponBtn');

    if(value === 'NEW15' || value === 'Couple 20'){
        // couponBtn.removeAttribute('disabled')
        removeAttributeById('couponBtn')
        
    }
    else{
        couponBtn.setAttribute('disabled', true);
    }
})

document.getElementById('couponBtn').addEventListener('click', function(){
    setClassNameById('coupon-div')
})


function discount(){
    
    const inputText= document.getElementById('couponField')
    const valueText= inputText.value
    
    const value= valueText.split(' ').join('').toUpperCase()
    // console.log(value)

    if(value==='NEW15'){

            /* 15% discount */
        const fifteenPercent= total*.15
        // console.log(fifteenPercent)
        const priceAfterDiscount= total-fifteenPercent;
        
        const td1=document.createElement('td')
        td1.innerText='You have saved tk:'
        const td2=document.createElement('td')
        td2.innerText=fifteenPercent;
        const td3=document.createElement('td')
        td3.innerText="bdt";
        const tr=document.createElement('tr')
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        const discountDisplay= document.getElementById('discountDisplay')
        discountDisplay.appendChild(tr)

        setInnerTextById("grand-total", priceAfterDiscount);
        
    }

    else if( value==='COUPLE20'){
          /* 20% discount */
          const twentyPercent= total*.2
          const priceAfterDiscount2= total-twentyPercent;

          const td1=document.createElement('td')
        td1.innerText='You have saved tk:'
        const td2=document.createElement('td')
        td2.innerText=twentyPercent;
        const td3=document.createElement('td')
        td3.innerText="bdt";
        const tr=document.createElement('tr')
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        
        const discountDisplay= document.getElementById('discountDisplay')
        discountDisplay.appendChild(tr)

        setInnerTextById("grand-total", priceAfterDiscount2);
    }

    else{
        alert('Wirte Coupon Code Correctly')
    }
}





const text2= document.getElementById('number-field')
// console.log(text2)
text2.addEventListener('keyup', function(e){
    const value2=parseInt(e.target.value)
    console.log(typeof value2);
    
    // const inputField=  document.getElementById('inputField')
    // inputField.addEventListener("keyup",function field1 (e){
    //     value=e.target.value
    //     console.log(value)
    
    //     if (typeof value === "string"){
    //         removeAttributeById('next-button')
    //     }
    // })

    const value= getInputValueById('inputField')
    console.log(typeof value)

    if( typeof value === 'string' && typeof value2 === 'number'){
        removeAttributeById('next-button')
    }

    else{
        alert('Insert Your Name and Number to Proceed')
    }

})










