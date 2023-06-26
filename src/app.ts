// Code goes here!

// ! tipe data String

let nama: string = "hana";
nama = "w";

console.log(nama);

// ! tipe data number
let umur: number = 23;

umur = 12;
console.log(umur);

// ! tipe data boolean

let hasil = true;
hasil = false;
console.log(hasil);

// ! tipe data any

let dataAcak: any = 12;
dataAcak = false || "hana" || ["saya"];

console.log(dataAcak);

// ! tipe data array

let array: number[] = [123, 23, 12, 1];
array = [2];

let array1: string[] = ["hana", "sasa"];
array1 = ["ani"];

console.log(array, array1);

// ! tipe data tupple

let biodata: [string, number];

biodata = ["hana", 12];
console.log(biodata);

// ! tipe data enum

enum Ranger {
  merah = "merah",
  biru = "biru",
}

enum baju {
  kemeja,
  kokoh,
}

console.log(Ranger.biru, baju.kemeja);

// ! function typescript

function getNama(nama: string): string {
  return `hello, nama saya ${nama} salam kenal`;
}

function tidakKembaliNilai(): void {
  console.log("Tidak ada kembali nilai karena void");
}

tidakKembaliNilai();

console.log(getNama("Hana"));

// ! function Argument typescript

function tambah(val1: number = 12, val2: number = 2): number {
  return val1 + val2;
}

console.log(tambah(12, 1));

// ! function as type typescript (kalo ini lebih strict jika ada paramater harus diisi tidak ada nilai default)
type Kurang = (val1: number, val3: number, val2: number) => number;

const minus: Kurang = (
  val1: number = 12,
  val3: number = 1,
  val2: number = 10
): number => {
  return val1 - val3 - val2;
};

console.log(minus(12, 2, 2));
