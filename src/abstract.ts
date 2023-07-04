// ? info

/**  
  // * Dalam konteks TypeScript, "abstract" adalah sebuah kata kunci yang digunakan untuk mendefinisikan kelas abstrak. Kelas abstrak sendiri tidak dapat diinstansiasi secara langsung, tetapi hanya dapat digunakan sebagai kelas dasar untuk kelas-kelas turunannya. Kelas abstrak berfungsi sebagai kerangka kerja atau cetakan untuk kelas-kelas turunannya. Ia mendefinisikan metode dan properti yang harus ada dalam kelas turunan, tetapi tidak memberikan implementasi konkret untuk mereka. Sebaliknya, implementasi tersebut harus diberikan oleh kelas turunan.
  

 */

abstract class Animal {
  abstract jumlahKaki: number | string;
  abstract namaAnimal: string;

  caraBerjalan(): string {
    return `${this.namaAnimal} jumlah kakinya ada ${this.jumlahKaki}`;
  }
}

class Cat extends Animal {
  jumlahKaki: string | number = 4;
  namaAnimal: string = "Kucing";
}

const kucing = new Cat();

console.log(kucing.caraBerjalan());

/**  
  // * Dalam konteks TypeScript, "abstract" adalah sebuah kata kunci yang digunakan untuk mendefinisikan kelas abstrak. Kelas abstrak sendiri tidak dapat diinstansiasi secara langsung, tetapi hanya dapat digunakan sebagai kelas dasar untuk kelas-kelas turunannya. Kelas abstrak berfungsi sebagai kerangka kerja atau cetakan untuk kelas-kelas turunannya. Ia mendefinisikan metode dan properti yang harus ada dalam kelas turunan, tetapi tidak memberikan implementasi konkret untuk mereka. Sebaliknya, implementasi tersebut harus diberikan oleh kelas turunan.
  

 */

interface Laptop {
  name: string;
  tombolOn(): void;
  tombolff(): void;
}

class Asus implements Laptop {
  constructor(public name: string, public gaming: boolean) {}
  tombolOn(): void {
    console.log("Method not implemented.");
  }
  tombolff(): void {
    console.log("Method not implemented.");
  }
}

class macbook implements Laptop {
  constructor(public name: string, public iphoneProduk: boolean) {}
  tombolOn(): void {
    console.log("Method not implemented.");
  }
  tombolff(): void {
    console.log("Method not implemented.");
  }
}

const mc = new macbook("Macbook i5", true);
const asusBiasa = new macbook("Asus i7", false);
