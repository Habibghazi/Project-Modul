function hitungAkar() {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);

    const d = b * b - 4 * a * c;

    const diskriminanElement = document.getElementById('diskriminan');
    const akar1Element = document.getElementById('akar1');
    const akar2Element = document.getElementById('akar2');
    const jenisAkarElement = document.getElementById('jenisAkar');

    diskriminanElement.textContent = 'Diskriminan (D): ' + d.toFixed(2);

    if (a === 0) {
        akar1Element.textContent = 'Akar 1: Persamaan bukan kuadrat (a tidak boleh 0)';
        akar2Element.textContent = 'Akar 2: -';
        jenisAkarElement.textContent = 'Jenis Akar: Bukan Persamaan Kuadrat';
        return;
    }

    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        
        akar1Element.textContent = 'Akar 1 (x₁): ' + x1.toFixed(4);
        akar2Element.textContent = 'Akar 2 (x₂): ' + x2.toFixed(4);
        jenisAkarElement.textContent = 'Jenis Akar: Dua akar real dan berbeda';
    } else if (d === 0) {
        const x = -b / (2 * a);
        
        akar1Element.textContent = 'Akar 1 (x₁): ' + x.toFixed(4);
        akar2Element.textContent = 'Akar 2 (x₂): ' + x.toFixed(4);
        jenisAkarElement.textContent = 'Jenis Akar: Dua akar real dan kembar';
    } else {
        const realPart = (-b / (2 * a)).toFixed(4);
        const imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(4);
        
        akar1Element.textContent = 'Akar 1 (x₁): ' + realPart + ' + ' + imagPart + 'i';
        akar2Element.textContent = 'Akar 2 (x₂): ' + realPart + ' - ' + imagPart + 'i';
        jenisAkarElement.textContent = 'Jenis Akar: Dua akar imajiner (kompleks)';
    }
}