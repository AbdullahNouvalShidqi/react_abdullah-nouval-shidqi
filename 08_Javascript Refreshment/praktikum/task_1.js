let a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkapArr = [a, b, nama, terdaftar];

function perkenalan(){
    let asal = "Indonesia";
    return console.log(
        "Perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if(terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka")
}

console.log("array = " + lengkapArr[2]);

a = b;

console.log("a adalah " + a);
console.log("b adalah " + b);
perkenalan();