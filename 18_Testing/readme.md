# 18 Testing
## Resume
Dalam materi ini, saya mempelajari:
1. Apa itu testing?
2. Manfaat testing
3. Kategori testing pada react

### 1. Apa itu testing?
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertions ini adalah ekpresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

### 2. Manfaat testing
Manfaat dari testing di antara lain:
1. Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.

2. Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

### 3. Kategori testing pada react
Secara umum, cara mengetes di react terbagi menjadi dua kategori, yaitu:
1. Rendering component trees, di dalam environment test yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.

2. Menjalankan aplikasi lengkap, di dalam environment peramban (browser) asli. Ini dikenal sebagai test end-to-end.