//Დაბეჭდეთ რიცხვები 2 დან 8 მდე

for (i = 2; i < 8; i++) { console.log(i) }

//5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

for (n = 5; n < 36; n = n + 4) { console.log(n) }

//დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

namravli = 1
for (a = 3; a < 8; a++) {
    namravli = a * namravli
    console.log(namravli)
}

//Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age
// და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)

let person = {
    fistname: "Ana",
    lastname: "Artilakva",
    age: 29

}
console.log(person.fistname, person.lastname)

 //დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
for (let key in person)
    console.log(key, ":", person[key])

 //დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.


let fruits = ["apple", "Banana", "Orange"]
console.log(fruits.slice())

//დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits

fruits = ["apple", "Banana", "Orange"]
fruits.unshift("Grapes")
fruits.push("Pineapples")
console.log(fruits)

//დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი/

sum=sum+1
for (x=1; x<34; sum)

    console.log(sum)