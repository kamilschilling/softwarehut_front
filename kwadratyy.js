
class Kwadrat{
    set ustawbok(wartosc){
        this.bok =wartosc;
    }
    get pobierzbok()
    {
        return `bok jest rowny ${this.bok}`;
    }
    pole()
    {
        return `pole jest rowne ${this.bok*this.bok}`;
    }
    obwod()
    {
        return `obwod jest rowny ${4*this.bok}`;
    }
}

class Prostokat{
    set ustawbok1(wartosc1){
        this.bok =wartosc1;
    }
    set ustawbok2(wartosc2){
        this.bok2 = wartosc2;
    }
    get pobierzbok()
    {
        return `Jeden bok to ${this.bok} a druga to ${this.bok2}`;
    }
    pole()
    {
        return `pole jest rowne ${this.bok*this.bok2}`;
    }
    obwod()
    {
        return `obwod jest rowny ${2*this.bok+2*this.bok2}`;
    }
}

const kwa = new Kwadrat();
kwa.ustawbok = 5;
console.log(kwa.pobierzbok);
console.log(kwa.obwod());
console.log(kwa.pole());

const pro = new Prostokat();
pro.ustawbok1 =5;
pro.ustawbok2 = 7;
console.log(pro.pobierzbok)
console.log(pro.obwod())
console.log(pro.pole())