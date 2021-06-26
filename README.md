# EKI RESEARCH & DEVELOPMENT

"STILL RND"

# Referensi : 

- Udemy - Pravinkumar Dabade 

(https://www.udemy.com/course/node-js-cluster)



# Q N A




# 1. Question :



Pada materi tampaknya operasi blocking and non-blocking telah tercampur.
Akses jaringan, file dan database Non-blocking. Ini diperesentasi pada informasi sebaliknya
Operasi algoritma berat terhambat pada process cpu (antrian).



# 1. Answer :



Salah satu tujuan desain Node JS adalah "Tidak Ada Fungsi yang langsung melakukan operasi IO". 
Mengapa? karena semua operasi dieksekusi dalam tumpukan eksekusi single thread cpu. 
Itulah sebabnya Node JS menangani jenis operasi File IO, Network, Database secara asynchronous. 
Faktanya setiap operasi di Node JS secara default asynchronous. Misalnya, Sistem Berkas. 
Metode readFile() mengambil fungsi panggilan balik dan readFileSync() adalah operasi synchronous. 
Saat Anda menjalankan operasi synchronous dalam tumpukan, kecuali jika operasi ini tidak selesai, 
operasi tidak akan pernah dimulai dengan operasi kedua.


Dalam pelajaran dan contoh saya, saya memberi tahu bahwa kami memiliki fungsi synchronous yang akan menghitung deret Fibonacci. 
Jika jumlahnya kecil seperti 10,12, 13, operasi akan selesai dalam waktu singkat. 
Tetapi jika kami memberikan angka yang lebih tinggi seperti 35, 40, 45, dibutuhkan banyak waktu di tumpukan eksekusi kami untuk memproses operasi ini. 
Dan secara default Node JS menggunakan single threads dari mesin kami. Jadi, operasi yang berjalan lama akan memblokir main thread. 
Di sinilah kita membutuhkan cluster Node JS.


Jadi, singkatnya setiap operasi algoritma pemrosesan logika, dll. adalah operasi non-blocking. 
Tetapi jika operasinya adalah operasi jaringan, disk, atau basis data, maka itu akan memblokir main thread. 
Dan operasi ini membutuhkan jutaan siklus untuk diselesaikan. Itu sebabnya Node JS menjalankan semua operasi IO secara asynchronous.


Namun, jika kita tetap menjalankan operasi non-blocking yaitu operasi terikat CPU yang membutuhkan waktu lama untuk diproses, 
maka thread utama akan diblokir. Lalu, bagaimana kita memproses operasi lain dalam situasi ini? Jawabannya adalah cluster Node JS.





# Regards,


# Eki Indradi
