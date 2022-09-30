# 17 Global State Management and Data fetching
## Resume
Dalam materi ini, saya mempelajari:
1. Filosofi Global State
2. Redux
3. Komponen Penting Redux

### 1. Filosofi Global State
Global state itu dapat digambarkan sebagai state yang disimpan disuatu tempat yang dapat di akses ke berbagai komponen yang nanti jika ada perubahan maka data akan sinkron, dimana pada React kita menggunakan Redux Store, dimana Redux Store berguna untuk menaruh state-state, jadi kita tidak perlu mengirimkan value-value melalui props-props pada komponen.

### 2. Redux
Redux merupakan suatu library React yang digunakan untuk mengimplementasikan Global State Management, untuk alasan kapan kita harus menggunakan redux, dapat dilihat pada beberapa alasan berikut:
1. Banyak state yang perlu ditaruh di banyak tempat.
2. State pada app sering berubah.
3. Logic untuk mengubah state kompleks.
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang.
5. Perlu untuk mengetahui bagaimana state di-update seiring dengan waktu.  
Dan pada redux terdapat berbagai libraries dan tools, yaitu :
1. React-redux //Library redux itu yang memnatu kita untuk menggunakan redux.
2. Redux Toolkit //Tools yang membantu kita untuk lebih mudah dalam menggunakan Redux, biasa berisi package dan function.
3. Redux Devtools Extension //Extension pada browser sehingga kita bisa liat history state kita sendiri browser kita.

### 3. Komponen Penting Redux
Yaitu ada Action, Reducer dan Store.
1. Action, digunakan untuk memberikan informasi dari aplikasi ke store.
2. Reducer, merupakan pure Javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru.
3. Store, objek sentral yang menyimpan state pada aplikasi.