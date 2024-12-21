function BuyTickets(){
    let mainSection = document.getElementById('mainSection');
    mainSection.scrollIntoView({behavior: 'smooth'});
}

const seats = document.querySelectorAll('.seat');
let selectedSeats = 0;
let totalSeat = 40;

let ticketAdd = document.getElementById('ticketAdd')
// ticketAdd.classList.add('flex', 'flex-row', 'justify-between', 'pl-4', 'pr-4', 'p-1', 'text-gray-600');

// for (const element of seats) {

//     element.addEventListener('click', function selectSeats(){


//         element.classList.remove('disabled');
//         element.removeEventListener('click', arguments.callee);

        
//         let divCreate = document.createElement('div');
//         divCreate.classList.add('flex', 'flex-row', 'justify-between', 'pl-4', 'pr-4', 'p-1', 'text-gray-600');
    
    
//         let seatName = document.createElement('p');
//         seatName.classList.add('text-lg', 'sans-font');
//         seatName.innerText = element.innerText;
    
    
//         let Economoy = document.createElement('p');
//         Economoy.classList.add('text-lg');
//         Economoy.innerText = 'Economoy';
    
    
//         let priceTag = document.createElement('p');
//         priceTag.classList.add('sans-font', 'text-lg');
//         priceTag.innerText = 550;
    
//         divCreate.append(seatName, Economoy, priceTag);


//         ticketAdd.appendChild(divCreate);
//     })
// }



for (const seat of seats) {
    seat.addEventListener('click', function main(){

        if (selectedSeats < 4) {
            seat.classList.add('bg-green-500');
            // btn disabled & eventlistener remove 
            seat.classList.remove('disabled');
            seat.removeEventListener('click', arguments.callee);

            selectedSeats++;

            totalSeat--;

            document.getElementById('seat40').innerText = totalSeat;

            document.getElementById('seatCount').innerText = selectedSeats;

           document.getElementById('totalPrice').innerText = selectedSeats * 550;

            // class name & data input 

            let divCreate = document.createElement('div');
            divCreate.classList.add('flex', 'flex-row', 'justify-between', 'pl-4', 'pr-4', 'p-1', 'text-gray-600');
        
        
            let seatName = document.createElement('p');
            seatName.classList.add('text-lg', 'sans-font');
            seatName.innerText = seat.innerText;
        
        
            let Economoy = document.createElement('p');
            Economoy.classList.add('text-lg');
            Economoy.innerText = 'Economoy';
        
        
            let priceTag = document.createElement('p');
            priceTag.classList.add('sans-font', 'text-lg');
            priceTag.innerText = 550;
        
            divCreate.append(seatName, Economoy, priceTag);
    
    
            ticketAdd.appendChild(divCreate);

        } else {
            alert('You can only select up to 4 seats.')
        }

        // discount add & calculate 

        let Price = selectedSeats * 550;

        apllyBtn.addEventListener('click', function(){
            if (couponInput.value.trim() === coupon15) {
                if (selectedSeats >= 2) {
                    let discount = Price * 0.15;
                    let result = Price - discount;
                    let finalResult = parseInt(result)
                    document.getElementById('grandTotal').innerText = finalResult;
                }
                else {
                    document.getElementById('grandTotal').innerText = Price;
                }
            } else {
                if (selectedSeats >= 2) {
                    let discount = Price * 0.20;
                    let result = Price - discount;
                    let finalResult = parseInt(result)
                    document.getElementById('grandTotal').innerText = finalResult;
                }
                else {
                    document.getElementById('grandTotal').innerText = Price;
                }
            }
        })
    })
}




// coupon zone start

const couponInput = document.getElementById('copunInput');
const apllyBtn = document.getElementById('aplly');

const coupon15 = 'NEW15';
const coupon20 = 'Couple 20'

couponInput.addEventListener('input', function(){
    if (couponInput.value.trim() === coupon15 || couponInput.value.trim() === coupon20) {
        apllyBtn.removeAttribute('disabled')
    } else {
        apllyBtn.setAttribute('disabled', true);
    }
})

// coupon zone end 


// name & number add reguerment start

let inputName = document.getElementById('inputName');
let inputNumber = document.getElementById('inputNumber');

let nextBtn = document.getElementById('next');


function checkInputs() {
    if (inputName.value.trim() !== '' && inputNumber.value.trim() !== '') {
        nextBtn.removeAttribute('disabled');
    } else {
        nextBtn.setAttribute('disabled', true)
    }
}


inputName.addEventListener('input', checkInputs);
inputNumber.addEventListener('input', checkInputs);


// name & number add reguerment end





// last function next button 

document.getElementById('next').addEventListener('click', function (){
        document.getElementById('success').classList.remove('hidden');
        document.getElementById('01').classList.add('hidden');
        document.getElementById('02').classList.add('hidden');
        document.getElementById('03').classList.add('hidden');
        document.getElementById('04').classList.add('hidden');
})



// continus btn 

document.getElementById('continue').addEventListener('click', function(){
    document.getElementById('success').classList.add('hidden');
        document.getElementById('01').classList.remove('hidden');
        document.getElementById('02').classList.remove('hidden');
        document.getElementById('03').classList.remove('hidden');
        document.getElementById('04').classList.remove('hidden');
})