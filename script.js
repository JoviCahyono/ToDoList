// Mengambil elemen input dan container daftar (list)
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Fungsi untuk menambahkan tugas ke dalam daftar
function addTask() {
    // Memeriksa apakah input kosong
    if (inputBox.value === '') {
        alert('Kamu harus input sesuatu');
    } else {
        // Membuat elemen <li> untuk tugas baru
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; // Menetapkan teks tugas ke dalam elemen <li>
        listContainer.appendChild(li); // Menambahkan elemen <li> ke dalam daftar
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // Menetapkan simbol 'x' ke dalam elemen <span>
        li.appendChild(span); // Menambahkan elemen <span> ke dalam elemen <li>
    }
    inputBox.value = ''; // Mengosongkan input setelah menambahkan tugas
    saveData(); // Menyimpan data ke dalam penyimpanan lokal (localStorage)
}

// Menambahkan event listener untuk menanggapi klik pada daftar atau tombol 'x'
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); // Menandai atau menghapus tanda tugas sebagai selesai
        saveData(); // Menyimpan data ke dalam penyimpanan lokal setelah perubahan
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Menghapus elemen <li> yang berisi tugas
        saveData(); // Menyimpan data ke dalam penyimpanan lokal setelah perubahan
    }
}, false);

// Fungsi untuk menyimpan data ke dalam penyimpanan lokal
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fungsi untuk menampilkan tugas dari penyimpanan lokal saat halaman dimuat
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

// Memanggil fungsi showTask() untuk menampilkan tugas yang telah disimpan
showTask();
