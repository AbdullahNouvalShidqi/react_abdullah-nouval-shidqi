# 13 Event Handling
## Resume
Pada materi ini, saya mempelajari:
1. Apa itu state pada react?
2. Apa itu stateful component?
3. Apa itu Stateless component?
4. Apa itu handling event?

### 1. Apa itu state pada react?
State adalah data private sebuah komponen. Data ini hanya tersedia untuk komponen tersebut dan tidak bisa diakses dari komponen lain. Ada di antara lain beberapa point dari state adalah:
1. Data yang bisa dimodifikasi menggunakan setState.
2. Setiap terjadi modifikasi akan terjadi render ulang.
3. Bersifat asynchronous.
4. Dipakai dalam class.

### 2. Apa itu stateful component?
Stateful Component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class componenet adalah memiliki lifecycle.

### 3. Apa itu Stateless component?
Stateless Component adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas. Kommponen stateful dan stateless ini memiliki banyak nama yang berbeda, mereka dikenal juga dengan:
1. Smart component & Dump component.
2. Container component & Presentational component.

### 4. Apa itu handling event?
Handling Event adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen, dimana event disini adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan. Untuk beberapa contoh list event di antara lain, Clipboard events, Form events, Mouse events, Generic events.