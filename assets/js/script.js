// Variable declaration for HTML elements
let timeSlot1 = $('#slot1');
let timeSlot2 = $('#slot2');
let timeSlot3 = $('#slot3');
let timeSlot4 = $('#slot4');
let timeSlot5 = $('#slot5');
let timeSlot6 = $('#slot6');
let timeSlot7 = $('#slot7');
let timeSlot8 = $('#slot8');
let timeSlot9 = $('#slot9');
let today = dayjs();

// Setting current day
$('#currentDay').text(today.format('dddd, MMMM D'));

// if/else statement that adjusts row colors based on time of day
if (today.isBefore(`${today.format('YYYY-M-D')} 09:00:00`, 'hour')){
  for (let i = 1; i < 10; i++) {
    $(`#slot${[i]}`).addClass('future');
  }
} else if (today.isSame(`${today.format('YYYY-M-D')} 09:00:00`, 'hour')) {
    timeSlot1.removeClass('future');
    timeSlot1.addClass('present');
    for (let i = 2; i < 10; i++) {
      $(`#slot${[i]}`).addClass('future');
    };
} else if (today.isSame(`${today.format('YYYY-M-D')} 10:00:00`, 'hour')) {
  for (let i = 3; i < 10; i++) {
    $(`#slot${[i]}`).addClass('future');
  };
  for (let i = 1; i < 3; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
    timeSlot1.removeClass('present');
    timeSlot1.addClass('past');
    timeSlot2.addClass('present');
} else if (today.isSame(`${today.format('YYYY-M-D')} 11:00:00`, 'hour')) {
  for (let i = 4; i < 10; i++) {
    $(`#slot${[i]}`).addClass('future');
  };
  for (let i = 1; i < 4; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 3; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
    timeSlot3.addClass('present');
} else if (today.isSame(`${today.format('YYYY-M-D')} 12:00:00`, 'hour')) {
  for (let i = 5; i < 10; i++) {
    $(`#slot${[i]}`).addClass('future');
  };
  for (let i = 1; i < 5; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 4; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
    timeSlot4.addClass('present');
} else if (today.isSame(`${today.format('YYYY-M-D')} 13:00:00`, 'hour')) {
  for (let i = 6; i < 10; i++) {
    $(`#slot${[i]}`).addClass('future');
  };
  for (let i = 1; i < 6; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 5; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
    timeSlot5.addClass('present');
} else if (today.isSame(`${today.format('YYYY-M-D')} 14:00:00`, 'hour')) {
  for (let i = 7; i < 10; i++) {
    $(`#slot${[i]}`).addClass('future');
  };
  for (let i = 1; i < 7; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 6; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
    timeSlot6.addClass('present');
} else if (today.isSame(`${today.format('YYYY-M-D')} 15:00:00`, 'hour')) {
  for (let i = 8; i < 10; i++) {
    $(`#slot${[i]}`).addClass('future');
  };
  for (let i = 1; i < 8; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 7; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
    timeSlot7.addClass('present');
} else if (today.isSame(`${today.format('YYYY-M-D')} 16:00:00`, 'hour')) {
  timeSlot9.addClass('future');
  for (let i = 1; i < 9; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 8; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
    timeSlot8.addClass('present');
} else if (today.isSame(`${today.format('YYYY-M-D')} 17:00:00`, 'hour')) {
  for (let i = 1; i < 10; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 9; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
    timeSlot9.addClass('present');
} else if (today.isAfter(`${today.format('YYYY-M-D')} 17:00:00`, 'hour')){
  for (let i = 1; i < 10; i++) {
    $(`#slot${[i]}`).removeClass('future');
  };
  for (let i = 1; i < 10; i++) {
    $(`#slot${[i]}`).removeClass('present');
    $(`#slot${[i]}`).addClass('past');
  };
};

// More variable declaration of HTML elements
let saveOne = $('#save1');
let saveTwo = $('#save2');
let saveThree = $('#save3');
let saveFour = $('#save4');
let saveFive = $('#save5');
let saveSix = $('#save6');
let saveSeven = $('#save7');
let saveEight = $('#save8');
let saveNine = $('#save9');

// Functions that saves a specific rows input data to the localstorage when it's save button is clicked
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

// Loop that displays localstorage data to it's specified loop (or keeps the input blank if no data has been assigned)
for (let i = 1; i < 10; i++) {
    document.getElementById(`slot${[i]}`).value = `${localStorage.getItem(`slot${[i]}`)}`;
    if ((localStorage.getItem(`slot${[i]}`)) === null) {
      localStorage.setItem(`slot${[i]}`, '')
      document.getElementById(`slot${[i]}`).value = `${localStorage.getItem(`slot${[i]}`)}`;
    };
};

// Functionality for Clear Agenda button
function clearAgenda() {
  for (let i = 1; i < 10; i++) {
    localStorage.setItem(`slot${[i]}`, '');
    document.getElementById(`slot${[i]}`).value = `${localStorage.getItem(`slot${[i]}`)}`;
  }
};

$('.clearBtn').on('click', clearAgenda);