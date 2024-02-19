
function decreaseSeats() {
    const totalSeats = document.getElementById('total-seats');
    const text = parseInt(totalSeats.innerText);
    const count = text - 1;
    totalSeats.innerText = count;

}
function increasesing() {
    const addingSeats = document.getElementById('incresable-seat')
    const text = parseInt(addingSeats.innerText);
    console.log('text', text)
    const count = text + 1;
    console.log('count', count)
    addingSeats.innerText = count;
    const totalPriceElement = document.getElementById('total-price');
    const total = count * 550;
    console.log('total', total)
    totalPriceElement.innerText = total
    const grandTotalElement = document.getElementById('grand-total');
    grandTotalElement.innerText = total
}




let selectedSeat = 0

const seats = document.querySelectorAll('.seat');
for (const seat of seats) {
    seat.addEventListener('click', function handleClick() {
        if(selectedSeat < 4){
            const text = seat.innerText;
            const ids = seat.id;
            addToChecklist(text)
            forRemovingColor(ids)
            selectedSeat += 1;
        }
        else{
            alert("Bhai apni onek seat kinsen ar kinen na")
        }
        seat.removeEventListener('click', handleClick);
    });
};



function forRemovingColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-gray-200')
    element.classList.add('bg-pr-color', 'text-white')
    decreaseSeats();
    increasesing();
}
function addToChecklist(seatNumber) {
    const clacklistSeatNumber = document.getElementById('seat-number')
    const addingNumber = document.createElement('p');
    addingNumber.innerText = seatNumber;
    clacklistSeatNumber.appendChild(addingNumber)


    const clacklistSeatClass = document.getElementById('seat-class')
    const addingclass = document.createElement('p');
    addingclass.innerText = 'Economy';
    clacklistSeatClass.appendChild(addingclass)



    const clacklistSeatPrice = document.getElementById('seat-price')
    const addingPrice = document.createElement('p');
    addingPrice.innerText = '550';
    clacklistSeatPrice.appendChild(addingPrice)

}




function showingSuccessMassage() {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
    header.classList.add('hidden')
    main.classList.add('hidden')
    footer.classList.add('hidden')
    const successPage = document.getElementById('success');
    successPage.classList.remove('hidden')
}
function showingMainPage() {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
    header.classList.remove('hidden')
    main.classList.remove('hidden')
    footer.classList.remove('hidden')
    const successPage = document.getElementById('success');
    successPage.classList.add('hidden')
}
