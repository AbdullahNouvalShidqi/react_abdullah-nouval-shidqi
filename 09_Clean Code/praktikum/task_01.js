// Penamaan class salah, karena seharusnya class ditulis dengan format pascalcase contoh class User
class user{
    // Ini salah karena melakukan sebuah deklarasi dalam class sehingga error, seharusnya dengan menggunakan constructor
    var id;
    var username;
    var password;
}

// Penamaan salah, sama seperti diatas, tidak menggunakan format pascalcase
class userservice{
    // ini salah karena melakukan deklarasi lagi didalam class, yang seharusnya menggunakan constructor, dan penggunaan class yang berlebihan
    user[] users = [];
    
    // Fungsi seharusnya ditulis dengan menggunakan camelcase
    user[] getalluser(){
        return users;
    }

    // Funsi seharusnya ditulis dengan format camelcase dan juga pada parameter userid seharusnya menggunakan camelcase
    user getuserbyid(userid){
        return users.filter(userid);
    }
}