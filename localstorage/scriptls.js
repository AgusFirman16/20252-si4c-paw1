let npm = document.getElementById("npm");
let nama = document.getElementById("Nama");
function simpan(){
    console.log(npm.value)
    console.log(nama.value)

    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    //jika lokal storage belum ada isi/value
    if(localStorage.getItem("mahasiswa") ===null){
        //simpan array kosong []
        localStorage.setItem("mahasiswa", "[]")
    }

    //panggil local stprage
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam objek data
    data.push({
        npm: npm.value,
        nama: nama.value

    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    // konvensi dari objek menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //panggil tampil
    tampil()
}

function tampil(){
    //panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear element ul id=list-mhs
    document.getElementById("list-mhs").innerHTML=""

    //lakukan perulangan (forEach)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li>${element.npm} ${element.nama}</li>`
        
    });
}
//jalankan function tampil()
tampil()    

