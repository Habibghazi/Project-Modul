
const priceTable = {
  Jakarta:    { Eksekutif: 70000, Bisnis: 40000, Ekonomi: 10000 },
  Solo:       { Eksekutif: 80000, Bisnis: 50000, Ekonomi: 20000 },
  Surabaya:   { Eksekutif: 90000, Bisnis: 60000, Ekonomi: 30000 }
};


function formatIDR(value){
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
}

const form = document.getElementById('formBooking');
const result = document.getElementById('result');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const tujuan = document.getElementById('tujuan').value;
  const kelas = document.getElementById('kelas').value;
  const qty = parseInt(document.getElementById('qty').value, 10) || 0;
  const member = document.querySelector('input[name="member"]:checked')?.value === 'ya';

  if(!nama){ alert('Nama harus diisi'); return; }
  if(!tujuan){ alert('Pilih tujuan'); return; }
  if(!kelas){ alert('Pilih kelas'); return; }
  if(qty <= 0){ alert('Masukkan jumlah tiket minimal 1'); return; }

  const hargaPer = (priceTable[tujuan] && priceTable[tujuan][kelas]) ? priceTable[tujuan][kelas] : 0;
  const subtotal = hargaPer * qty;
  const diskon = member ? subtotal * 0.10 : 0;
  const total = subtotal - diskon;

  document.getElementById('rNama').textContent = nama;
  document.getElementById('rTujuan').textContent = tujuan;
  document.getElementById('rKelas').textContent = kelas;
  document.getElementById('rHarga').textContent = formatIDR(hargaPer);
  document.getElementById('rQty').textContent = qty;
  document.getElementById('rSubtotal').textContent = formatIDR(subtotal);
  document.getElementById('rDiskon').textContent = member ? `10% (${formatIDR(diskon)})` : `0% (${formatIDR(0)})`;
  document.getElementById('rTotal').textContent = formatIDR(total);

  result.hidden = false;
  result.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnReset').addEventListener('click', function(){
  form.reset();
  document.getElementById('qty').value = 1;
  result.hidden = true;
  document.getElementById('nama').focus();
});
