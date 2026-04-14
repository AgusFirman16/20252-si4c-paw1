let namaBarang = document.getElementById("namaBarang");
let Jumlah = document.getElementById("Jumlah");
let keterangan = document.getElementById("keterangan")

function simpan(){
    console.log(namaBarang.value);
    console.log(Jumlah.value);
    console.log(keterangan.value);

    if(localStorage.setItem("namaBarang")===null)
        localStorage.setItem("namaBarang", "[]");

    let data = JSON.parse(localStorage.getItem("namaBarang"));
    console.log(data);

    data.push({
        namaBarang: namaBarang.value,
        Jumlah: Jumlah.value,
        keterangan: keterangan.value,
    });

    console.log(data);
    localStorage.setItem("namaBarang",JSON.stringify(data));

}

function tampil(){
    let hasil = JSON.parse(localStorage.getItem("namaBarang"));
    hasil.forEach(element => {
        document.getElementById("list-namaBarang").innerHTML+=
        

        
    });

}
tampil();