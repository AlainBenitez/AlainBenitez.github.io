const eventName = document.querySelector('#eventName');
const eventDate = document.querySelector('#eventDate');
const eventTime = document.querySelector('#eventTime');
const eventPriceRange = document.querySelector('#eventPriceRange');
const numGuest = document.querySelector('#numGuest');
const includeSelf = document.querySelector('#includeSelf');
const guestNames = document.querySelectorAll('.gNames');
const guestNum = document.querySelectorAll('.gNums');
const plannningBtn = document.querySelectorAll('#planningBtn');


window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    
});


 function createEvent(e) {
    e.preventDefault();
    const partyDetails = [];
    const partyGuests = [];
    const partyGuestNums = [];
    partyDetails.push(eventName.value);
    partyDetails.push(eventDate.value);
    partyDetails.push(eventTime.value);
    partyDetails.push(eventPriceRange.value);
    partyDetails.push(numGuest.value);
    partyDetails.push(includeSelf.value);
    partyGuests = guestNames;
    partyGuestNums = guestNum;

 }

function checkInput(e) {
    const target = e.target;
    const parent = target.parentElement;

    const error = "<label class='error'>Fill corectly</label>";

    if (!target.value.length) {
        if (!parent.querySelector('.error')) {
            parent.insertAdjacentHTML('beforeend', error);
        }
    }
    else {
        parent.removeChild(parent.querySelector('.error'));
    }
}
function checkTextarea(e) {
    const target = e.target;
    const parent = target.parentElement;

    const error = "<label class='errorM'>Don't be mean and please fill this out.</label>";

    if (!target.value.length) {
        if (!parent.querySelector('.errorM')) {
            parent.insertAdjacentHTML('beforeend', error);
        }
    }
    else {
        parent.removeChild(parent.querySelector('.errorM'));
    }
}

const planningInputs = document.querySelectorAll('input');
const interestBox = document.querySelector('textarea');

planningInputs.forEach(element => {
    element.addEventListener('blur', checkInput, false)
});

interestBox.addEventListener('blur', checkTextarea, false);
plannningBtn.addEventListener('click', createEvent, false);