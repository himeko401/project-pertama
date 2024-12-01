// Ambil elemen HTML
const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

// Fungsi operasi
function tambah() {
    const num1 = parseFloat(angka1.value);
    const num2 = parseFloat(angka2.value);
    hasil.textContent = num1 + num2;
}

function kurang() {
    const num1 = parseFloat(angka1.value);
    const num2 = parseFloat(angka2.value);
    hasil.textContent = num1 - num2;
}

function kali() {
    const num1 = parseFloat(angka1.value);
    const num2 = parseFloat(angka2.value);
    hasil.textContent = num1 * num2;
}

function bagi() {
    const num1 = parseFloat(angka1.value);
    const num2 = parseFloat(angka2.value);
    hasil.textContent = num1 / num2;
}

// Tambahkan event listener ke tombol
document.getElementById("btnTambah").addEventListener("click", tambah);
document.getElementById("btnKurang").addEventListener("click", kurang);
document.getElementById("btnKali").addEventListener("click", kali);
document.getElementById("btnBagi").addEventListener("click", bagi);