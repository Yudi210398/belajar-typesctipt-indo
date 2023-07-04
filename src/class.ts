//! class Dasar

class Person {
  constructor(public name: string, public tahunLahir: number) {}

  fYear(): void {
    console.log(2023 - this.tahunLahir);
  }
}

const yudi = new Person("Yudi", 1998);
yudi.fYear();
console.log(yudi);

// ! class Turunan yang mewarisi method dan properti di class parent dan super

// ? info

/**  
  // *  Dalam TypeScript, setter dan getter adalah dua jenis metode khusus yang digunakan untuk mengakses dan mengatur nilai properti dalam suatu kelas. Setter digunakan untuk mengatur nilai properti, sedangkan getter digunakan untuk mengakses nilai properti. Mereka membantu dalam penerapan prinsip enkapsulasi dalam pemrograman berorientasi objek.


  // * Dalam TypeScript, kata kunci static digunakan untuk mendefinisikan properti dan metode statis di dalam kelas. Properti dan metode statis terkait dengan kelas itu sendiri, bukan dengan instance kelas tersebut. Ini berarti properti statis akan memiliki nilai yang sama untuk semua instance kelas, sedangkan metode statis dapat dipanggil langsung dari kelas tanpa membuat instance dari kelas tersebut. properti statis dan metode statis juga dapat digunakan dalam kelas turunan (subclass) di TypeScript. Ketika kelas turunan mewarisi kelas utama (superclass), ia juga mewarisi properti statis dan metode statis dari kelas utama tersebut.
  

 */

class Admin extends Person {
  read: boolean = true;
  write: boolean = true;
  _auth: number = 440659;

  static PI: number = 3.14159;

  constructor(name: string, tahun: number, public phone: string) {
    super(name, tahun);
  }

  static calculateArea(radius: number): number {
    return this.PI * radius * radius;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set auth(authSet: number) {
    this._auth = authSet;
  }

  get auth(): number {
    return this._auth;
  }
}

const adminHana = new Admin("Hana", 2001, "081381871739");
adminHana.fYear();
adminHana._auth = 456;
console.log(`nilai pi`, Admin.PI);
console.log(`nilai pi`, Admin.calculateArea(4));
console.log(adminHana._auth);
console.log(adminHana.getRole(), adminHana);
