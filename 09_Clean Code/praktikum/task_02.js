class Kendaraan{
    totalRoda = 0;
    kecepatanPerJam = 0;
}

class Mobil extends Kendaraan{
    totalRoda = 4;
    kecepatanPerJam = 0;

    tambahKecepatan(kecepatanBaru){
        this.kecepatanPerJam += kecepatanBaru;
    }

    berjalan(){
        this.tambahKecepatan(10);
    }
}

let mobilCepat = new Mobil();
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();
console.log({ mobilCepat });

let mobilLamban = new Mobil();
mobilLamban.berjalan();
console.log({ mobilLamban });