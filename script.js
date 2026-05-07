// PINDAH HALAMAN
function showPage(page){
    document.querySelectorAll('.page').forEach(p => {
        p.style.display = 'none';
    });

    document.getElementById(page).style.display = 'block';
}

// TAMBAH PRODUK
function tambahProduk(){

    let nama = document.getElementById('namaProduk').value;

    let deskripsi = document.getElementById('deskripsiProduk').value;

    let harga = document.getElementById('hargaProduk').value;

    let file = document.getElementById('fotoProduk').files[0];

    let reader = new FileReader();

    reader.onload = function(e){

        let produk = `
        <div class="card">

            <img src="${e.target.result}">

            <h3>${nama}</h3>

            <p>${deskripsi}</p>

            <p><b>${harga}</b></p>

            <a href="https://wa.me/6281252368134" class="btn">
                Beli Sekarang
            </a>

        </div>
        `;

        document.getElementById('listProduk').innerHTML += produk;
    }

    if(file){
        reader.readAsDataURL(file);
    }
}

// FORM KONTAK
function kirimData(event){

    event.preventDefault();

    let nama = document.getElementById('nama').value;

    let email = document.getElementById('email').value;

    document.getElementById('hasil').innerHTML = `
    <div class="card">

        <h3>Data Terkirim</h3>

        <p>Nama: ${nama}</p>

        <p>Email: ${email}</p>

    </div>
    `;
}
