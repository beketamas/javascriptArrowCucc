let numbers = [50, 10, 40, 30, 20];
let compareNumbers =  (a, b) => (a < b) ? retVal = -1 : retVal = 1;
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

let fibbRec = (num) => (num < 2) ? num : fibbRec(num -1) + fibbRec(num -2);

console.log(fibbRec(4))
console.log(fibbRec(7))

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
console.log("-------------------------------------------")

let showContact = (lista,index) => (lista instanceof Array && (index <= lista.length && index >=0)) ? lista[index] : undefined;

console.log(showContact(contacts,2));

let showAllContacts = (lista) => (lista instanceof Array) ? lista : undefined;
console.log("-------------------------------------------")
console.log(showAllContacts(contacts))
console.log("-------------------------------------------")
let addNewContact = (lista, newName, newPhone, newEmail) => (lista instanceof Array && newEmail != null && newName != null && newEmail != null) ? lista.push({"name": newName,"phone": newPhone,"email": newEmail}) : undefined;
addNewContact(contacts,"Peti","51564564564","nem@gmail.com");
console.log(contacts);