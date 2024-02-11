const inc1El = document.getElementById('inc1-btn');
const dec1El = document.getElementById('dec1-btn');
const count1El = document.querySelector("#subhan-Allah p");

let count1 = 0;


inc1El.addEventListener("click", function() {
  count1+=1;
  count1El.innerText = count1;
});
dec1El.addEventListener("click", function() {
    count1-=1;
    count1El.innerText = count1;
});


// Alhamdullillah;
const inc2El = document.getElementById('inc2-btn');
const dec2El = document.getElementById('dec2-btn');
const count2El = document.querySelector("#alhamdu p");

let count2 = 0;

inc2El.addEventListener("click", function() {
  count2+=1;
  count2El.innerText = count2;
});

dec2El.addEventListener("click", function() {
    count2-=1;
    count2El.innerText = count2;
});


// Allahu Akbar;
const inc3El = document.getElementById('inc3-btn');
const dec3El = document.getElementById('dec3-btn');
const count3El = document.querySelector("#AllahuAkbar p");

let count3 = 0;

inc3El.addEventListener("click", function() {
  count3+=1;
  count3El.innerText = count3;
});
dec3El.addEventListener("click", function() {
    count3-=1;
    count3El.innerText = count3;
});




// Reset Element
const resetEl = document.getElementById("reset-btn");

resetEl.addEventListener("click", function(){
  count1 = 0;
  count2= 0;
  count3 =0;
  count1El.innerText = count1;
  count2El.innerText = count2;
  count3El.innerText = count3;
})
