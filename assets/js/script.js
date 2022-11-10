let submit = document.querySelector('saveBtn');

let slotOne = $('#slot1');
let slotTwo = $('#slot2');
let slotThree = $('#slot3');
let slotFour = $('#slot4');
let slotFive = $('#slot5');
let slotSix = $('#slot6');
let slotSeven = $('#slot7');
let slotEight = $('#slot8');
let slotNine = $('#slot9');
let description = $('.description');
let today = dayjs();

$('#currentDay').text(today.format('dddd, MMMM D'));

if (today.isBefore(`${today.format('YYYY-M-D')} 09:00:00`, 'hour')){
    slotOne.addClass('future');
    slotTwo.addClass('future');
    slotThree.addClass('future');
    slotFour.addClass('future');
    slotFive.addClass('future');
    slotSix.addClass('future');
    slotSeven.addClass('future');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 09:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.addClass('present');
    slotTwo.addClass('future');
    slotThree.addClass('future');
    slotFour.addClass('future');
    slotFive.addClass('future');
    slotSix.addClass('future');
    slotSeven.addClass('future');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 10:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.addClass('present');
    slotThree.addClass('future');
    slotFour.addClass('future');
    slotFive.addClass('future');
    slotSix.addClass('future');
    slotSeven.addClass('future');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 11:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.addClass('present');
    slotFour.addClass('future');
    slotFive.addClass('future');
    slotSix.addClass('future');
    slotSeven.addClass('future');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 12:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.removeClass('present');
    slotThree.addClass('past');
    slotFour.removeClass('future');
    slotFour.addClass('present');
    slotFive.addClass('future');
    slotSix.addClass('future');
    slotSeven.addClass('future');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 13:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.removeClass('present');
    slotThree.addClass('past');
    slotFour.removeClass('future');
    slotFour.removeClass('present');
    slotFour.addClass('past');
    slotFive.removeClass('future');
    slotFive.addClass('present');
    slotSix.addClass('future');
    slotSeven.addClass('future');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 14:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.removeClass('present');
    slotThree.addClass('past');
    slotFour.removeClass('future');
    slotFour.removeClass('present');
    slotFour.addClass('past');
    slotFive.removeClass('future');
    slotFive.removeClass('present');
    slotFive.addClass('past');
    slotSix.removeClass('future');
    slotSix.addClass('present');
    slotSeven.addClass('future');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 15:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.removeClass('present');
    slotThree.addClass('past');
    slotFour.removeClass('future');
    slotFour.removeClass('present');
    slotFour.addClass('past');
    slotFive.removeClass('future');
    slotFive.removeClass('present');
    slotFive.addClass('past');
    slotSix.removeClass('future');
    slotSix.removeClass('present');
    slotSix.addClass('past');
    slotSeven.removeClass('future');
    slotSeven.addClass('present');
    slotEight.addClass('future');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 16:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.removeClass('present');
    slotThree.addClass('past');
    slotFour.removeClass('future');
    slotFour.removeClass('present');
    slotFour.addClass('past');
    slotFive.removeClass('future');
    slotFive.removeClass('present');
    slotFive.addClass('past');
    slotSix.removeClass('future');
    slotSix.removeClass('present');
    slotSix.addClass('past');
    slotSeven.removeClass('future');
    slotSeven.removeClass('present');
    slotSeven.addClass('past');
    slotEight.removeClass('future');
    slotEight.addClass('present');
    slotNine.addClass('future');
} else if (today.isSame(`${today.format('YYYY-M-D')} 17:00:00`, 'hour')) {
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.removeClass('present');
    slotThree.addClass('past');
    slotFour.removeClass('future');
    slotFour.removeClass('present');
    slotFour.addClass('past');
    slotFive.removeClass('future');
    slotFive.removeClass('present');
    slotFive.addClass('past');
    slotSix.removeClass('future');
    slotSix.removeClass('present');
    slotSix.addClass('past');
    slotSeven.removeClass('future');
    slotSeven.removeClass('present');
    slotSeven.addClass('past');
    slotEight.removeClass('future');
    slotEight.removeClass('present');
    slotEight.addClass('past');
    slotNine.removeClass('future');
    slotNine.addClass('present');
} else if (today.isAfter(`${today.format('YYYY-M-D')} 17:00:00`, 'hour')){
    slotOne.removeClass('future');
    slotOne.removeClass('present');
    slotOne.addClass('past');
    slotTwo.removeClass('future');
    slotTwo.removeClass('present');
    slotTwo.addClass('past');
    slotThree.removeClass('future');
    slotThree.removeClass('present');
    slotThree.addClass('past');
    slotFour.removeClass('future');
    slotFour.removeClass('present');
    slotFour.addClass('past');
    slotFive.removeClass('future');
    slotFive.removeClass('present');
    slotFive.addClass('past');
    slotSix.removeClass('future');
    slotSix.removeClass('present');
    slotSix.addClass('past');
    slotSeven.removeClass('future');
    slotSeven.removeClass('present');
    slotSeven.addClass('past');
    slotEight.removeClass('future');
    slotEight.removeClass('present');
    slotEight.addClass('past');
    slotNine.removeClass('future');
    slotNine.removeClass('present');
    slotNine.addClass('past');
};

let saveOne = $('#save1');
let saveTwo = $('#save2');
let saveThree = $('#save3');
let saveFour = $('#save4');
let saveFive = $('#save5');
let saveSix = $('#save6');
let saveSeven = $('#save7');
let saveEight = $('#save8');
let saveNine = $('#save9');
let section = document.querySelector('section');

function handleSaveRowOne() {
    let slot1 = document.querySelector("#slot1").value;
    localStorage.setItem("slot1", slot1);
  }
  
saveOne.on('click', handleSaveRowOne);

function handleSaveRowTwo() {
    let slot2 = document.querySelector("#slot2").value;
    localStorage.setItem("slot2", slot2);
  }
  
saveTwo.on('click', handleSaveRowTwo);

function handleSaveRowThree() {
    let slot3 = document.querySelector("#slot3").value;
    localStorage.setItem("slot3", slot3);
  }
  
saveThree.on('click', handleSaveRowThree);

function handleSaveRowFour() {
    let slot4 = document.querySelector("#slot4").value;
    localStorage.setItem("slot4", slot4);
  }
  
saveFour.on('click', handleSaveRowFour);

function handleSaveRowFive() {
    let slot5 = document.querySelector("#slot5").value;
    localStorage.setItem("slot5", slot5);
  }
  
saveFive.on('click', handleSaveRowFive);

function handleSaveRowSix() {
    let slot6 = document.querySelector("#slot6").value;
    localStorage.setItem("slot6", slot6);
  }
  
saveSix.on('click', handleSaveRowSix);

function handleSaveRowSeven() {
    let slot7 = document.querySelector("#slot7").value;
    localStorage.setItem("slot7", slot7);
  }
  
saveSeven.on('click', handleSaveRowSeven);

function handleSaveRowEight() {
    let slot8 = document.querySelector("#slot8").value;
    localStorage.setItem("slot8", slot8);
  }
  
saveEight.on('click', handleSaveRowEight);

function handleSaveRowNine() {
    let slot9 = document.querySelector("#slot9").value;
    localStorage.setItem("slot9", slot9);
  }
  
saveNine.on('click', handleSaveRowNine);

for (let i = 1; i < 10; i++) {
    document.getElementById(`slot${[i]}`).value = `${localStorage.getItem(`slot${[i]}`)}`;
};