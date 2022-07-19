**REACT JS FUNDAMENTAL**

**Instalasi React JS**

```
$npm create-react-app NAMA_Project
```

- secara otomatis react akan membuakan project untuk kamu dengan nama folder `NAMA_Project`
- catatan untuk membuat nama project jangan gunakan dengan nama-nama di bawah kaarena nama di bawah adalah nama dependensi react iti sendiri
-

```
react
react-dom
react-scripts
```

- untuk menggetahui packet dan setingan project kalian kalian bisa membuka nya di
- `package.json`

- untuk mempelajari lebih bayak bisa langsung liah video di bawah
- [React setup](https://www.youtube.com/watch?v=mPpwjVujkYQ&list=PLx4zY98IACXiEgcKQ6j41lm9rx5rl-YcX&index=1)

**Component React JS**

- pada dasarnya komponent pada react itu sendiri bisa kita _export_ dan kita _import_ karena itu component pada react menjadi reusable "bisa di gunakan secara berulang"
-

```
import React from 'react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- cukup dengan hanya menambahkan ` <App />` sekali lagi
  maka component pada app akan menjadi pertambah tampa harus menulisakan koding seperti semula

- berdasarkan prinsip ini kita kan akan membagi-bagi component web kita menjadi bagian atau layout yang kita butuhkan

- **membuat component**
  - tambahkan file baru pada roject kalian dengan mengawali nama file dan component dengan huruf KAPITAL
  - jika kalina familiar dengan konsep Object Oriented ini sama hal nya dengan OOP
