const seats = document.getElementsByTagName('h6')
let total=0;
const trArray=[];
let seatPurchased=1;
let seatCapacity=29;

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
        trArray.push(tr)
        if ( trArray.length<=4){
            calculatorDisplay.appendChild(tr)
            const ticketPrice= 550;
            total+=ticketPrice;

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
            alert('You Can Not Buy More Than 4 Tickets ')
        }
        
        

        
        
        // console.log(trArray)
       
    })
}

document.getElementById('couponField').addEventListener('keyup', function(event){
    const text= event.target.value;

    const value= text.split(' ').join('').toUpperCase()

    const couponBtn= document.getElementById('couponBtn');

    if(value === 'NEW15' || value === 'COUPLE20'){
        couponBtn.removeAttribute('disabled')
    }
    else{
        couponBtn.setAttribute('disabled', true);
    }
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
        td1.innerText='You Got Discount of tk:'
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
        td1.innerText='You Got Discount of tk:'
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

const value1= getInputValueById('name-field')
console.log(value1)




