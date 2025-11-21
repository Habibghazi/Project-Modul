
function formatIDR(number){
  
  try {
    if (typeof number === 'bigint') number = Number(number); 
  } catch(e){}
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}


const formFactor = document.getElementById('formFactor');
const resultFactor = document.getElementById('resultFactor');
const outN = document.getElementById('outN');
const outFactorial = document.getElementById('outFactorial');
const outSum = document.getElementById('outSum');
const outSeries = document.getElementById('outSeries');
const resetFactor = document.getElementById('resetFactor');

function factorialBigInt(n){
  let res = 1n;
  for(let i = 2n; i <= BigInt(n); i++){
    res *= i;
  }
  return res;
}

formFactor.addEventListener('submit', function(e){
  e.preventDefault();
  const nInput = document.getElementById('nValue');
  const n = parseInt(nInput.value, 10);

  if (isNaN(n) || n < 0){
    alert('Masukkan N yang valid (bilangan bulat ≥ 0).');
    nInput.focus();
    return;
  }


  const fact = factorialBigInt(n);
  const sum = (n * (n + 1)) / 2;

  
  let seriesText;
  if (n <= 50){
    
    const arr = [];
    for(let i=1;i<=n;i++) arr.push(i);
    seriesText = arr.join(' + ');
  } else {
    seriesText = `1 + 2 + ... + ${n} (deret panjang, tidak ditampilkan seluruhnya)`;
  }

  outN.textContent = n;
  outFactorial.textContent = fact.toString(); // BigInt to string
  outSum.textContent = sum;
  outSeries.textContent = seriesText;

  resultFactor.classList.remove('hidden');
});

// reset
resetFactor.addEventListener('click', function(){
  document.getElementById('nValue').value = 0;
  resultFactor.classList.add('hidden');
});


const formSavings = document.getElementById('formSavings');
const resultSavings = document.getElementById('resultSavings');
const savingsList = document.getElementById('savingsList');
const finalBalance = document.getElementById('finalBalance');
const resetSavings = document.getElementById('resetSavings');

formSavings.addEventListener('submit', function(e){
  e.preventDefault();

  const initialEl = document.getElementById('initial');
  const interestEl = document.getElementById('interest');
  const periodsEl = document.getElementById('periods');

  const initial = Number(initialEl.value);
  const interestPercent = Number(interestEl.value);
  const periods = parseInt(periodsEl.value, 10);

  if (isNaN(initial) || initial < 0){
    alert('Saldo awal harus >= 0');
    initialEl.focus();
    return;
  }
  if (isNaN(interestPercent) || interestPercent < 0){
    alert('Bunga harus >= 0');
    interestEl.focus();
    return;
  }
  if (isNaN(periods) || periods < 1){
    alert('Jangka waktu minimal 1 periode');
    periodsEl.focus();
    return;
  }

  savingsList.innerHTML = '';
  let current = initial;
  const rate = interestPercent / 100;

  for(let p=1; p<=periods; p++){
    current = current * (1 + rate);
    const rounded = Math.round(current);
    const li = document.createElement('li');
    li.textContent = `Saldo Bulan ${p} = ${formatIDR(rounded)}`;
    savingsList.appendChild(li);
  }

  const finalRounded = Math.round(current);
  finalBalance.textContent = formatIDR(finalRounded);
  resultSavings.classList.remove('hidden');
  resultSavings.scrollIntoView({ behavior: 'smooth' });
});

resetSavings.addEventListener('click', function(){
  document.getElementById('initial').value = 100000;
  document.getElementById('interest').value = 10;
  document.getElementById('periods').value = 3;
  resultSavings.classList.add('hidden');
});
