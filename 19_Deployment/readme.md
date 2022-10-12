# 19 Deployment
## Resume
Dalam materi ini, saya mempelajari:
1. Kenapa kita perlu melakukan build?
2. Bagaimana cara build react app?
3. Apa itu deployment?
4. Deployment dengan menggunakan surge.
5. Deployment dengan Netlify CLI.

### 1. Kenapa kita perlu melakukan build?
Secara default, react mengandung banyak pesan peringatan. Peringatan=peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat react menjadi lebih besar dan lambat. Oleh karena itu, kita harus menggunakan versi produksi ketika men-deploy aplikasi. Jadi dapat disimpulkan adalah agar aplikasi kita menjadi versi production, sehingga menjadi performanya lebih ringan.

### 2. Bagaimana cara build react app?
Cukup dengan memasukkan command line pada bagian folder projek yang telah dibuat dengan command line bertuliskan 'npm run build', ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start.

### 3. Apa itu deployment?
Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya kita sendiri.

### 4. Deployment dengan menggunakan surge.
Surge disini adalah layanan penerbit website statik gratis untuk Front-End Developers. Website statik yang menggunakan surge akan memiliki subdomain *.surge.sh. Surge dapat menerima file HTML, CSS, dan JS. Sebelum melakukan deployment dengan menggunakan surge, pastikan kita memiliki node versi terbaru, lalu install surge di terminal. Setelah kita menginstall surge, kita bisa mendeploy aplikasi hanya dengan perintah surge pada terminal, setelah menjalankan perintah tersebut, kita akan diminta untuk mengisi email dan password, lalu kita juga akan ditanyakan alamat dari aplikasi yang kita deploy, lalu kita diminta untuk mengisi nama domain kita, biasanya telah diberikan dari surge secara random, tapi kita bisa mengubahnya, lalu kita akan melakukan upload dari surge tersebut, sesudah instalasi selesai maka akan ada notifikasi bahwa aplikasi succes - published to nama-domain-yang-kita-berikan.

### 5. Deployment dengan Netlify CLI.
Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket. Untuk melakukannya kita haru buat akun dulu pada [www.netlify.com](www.netlify.com), lalu kita install netlify dengan menggunakan command "npm install netlify-cli -g", lalu kita jalankan netlify deploy untuk melakukan deploy, lalu kita melakukan verivikasi akun melalui browser lalu pilih authorize, lalu pilih create & configure a new site, pilih team yang tersedia dan mengisi nama site nya tapi opsional, tetapi jika tidak diisi maka nama yang akan diberikan akan random dan panjang, setelah itu kita pilih lokasi file yang akan di deploy lalu pilih ./build.