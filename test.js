class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    perkenalkan(){
        return 'Saya ${this.nama}, umur ${this.umur} tahun';
    }
}

class Guru extends Orang{
    constructor(nama, umur, pelajaran){
        super(nama, umur);
        this.pelajaran = pelajaran;
    }
    perkenalkan(){
        return 'Saya ${this.nama}, umur ${this.umur} tahun, Saya mengajar mata pelajaran ${this.pelajaran}';
    }
}

const abdullah = new Orang('Abdullah', 23);
const farid = new Guru("Farid", 40, 'Olahraga');

console.log(abdullah.perkenalkan); //Saya Abdullah, umur 23 tahun.
console.log(farid.perkenalkan); //Saya Farid, umur 40 tahun, Saya mengajar mata pelajaran Olahraga.

console.log("Mulai");
setTimeout(() => {console.log("Proses...")}, 1000)
console.log("Berhenti");

//Mulai
//Berhenti
//Proses...

function cekLuas(panjang, lebar){
    return panjang * lebar;
}

function cekUkuran(angka1, angka2, callback){
    let luas = callback(angka1, angka2);
    if(luas >= 100){
        return "Besar";
    }
    else{
        return "Kecil";
    }
}

console.log(cekUkuran(10, 10, cekLuas));
//Besar

let aktif = true;
const tes1 = new Promise((resolve, reject) => {
    if (aktif){
        setTimeout(() => {
            resolve("Satatus aktif!");
        }, 2000)
    } else {
        setTimeout(() => {
           reject("Status tidak aktif!");
        }, 2000);
    }
});

console.log("Mulai");
tes1
    .finally(() => console.log('Proses selesai'))
    .then(response => console.log(response))
    .catch(response => console.log(response));
    console.log('Selesai');

    // Mulai
    // Selesai
    // Proses Selesai
    // Status Aktif

function test2(){
    return new Promise((resovle, reject) => {
        let aktif = true;
        if (aktif){
            setTimeout(() => {
                resolve("Satatus aktif!");
            }, 2000)
        } else {
            setTimeout(() => {
               reject("Status tidak aktif!");
            }, 2000);
        }
    });
}

async function testing(){
    try{
        let hasil = await test2;
        console.log(hasil);
    }
    catch(err){
        console.log(err);
    }
}

testing(); // Status aktif