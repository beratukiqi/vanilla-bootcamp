// 1 Vilka datatyper finns det i JS? Svara i form av en array.
// let dataTypes = ["Strings", 4214, true, undefined, null, {}];

// 2 Är följande if sats true eller false?

// let a = 1;
// let b = "1";
// if (a == b) {
//   //   console.log("Trueee");
// } // true

// 3 Vad är den tekniska skillnaden ( förutom var, let ) på dessa två deklarationer?
// let name = "Greta Thunberg";
// var name2 = "Greta Thunberg";
// Let blir block scoped , var kan nås utanför scopet.

// 4. Hur tar man reda på vad en variabel har för datatyp?
// Man kallar på 'typeof {variabel}'
// console.log(typeof arrayTest);

// 5. Vilken av följande tecken visar ett kodblock?
// [] // A
// () // B
// {} // C <------

// 6. Vad i följande kod är blocket som exekveras?

// el.on("click", () => {
//   alert("Ariba!"); // <<<<<<<<<
// });

// 7. Vad kommer stå i console.log()?

// var greeting = "Good bye world!"; // <<<<<<<
// {
//   let greeting = "Hello World";
// }
// console.log(greeting);

// 8. Vilken av följande syntax är korrekt sätt att skriva strängar.
("Hello World"); // A
("Hello World"); // B
`Hello World`; // C
// Svar: ALLA 3

// 9.  Räkna antal tecken i strängen nedan.
// let sentence =
//   "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one.";
// console.log(sentence.length); // <<<<<< .length

// 10. Gör en template string där N ersätts med variabeln name.
// let name1 = "Berat";
// console.log(`Hej ${name1} din gamle knasboll!`); // Backticks

// 11. Gör en array med 5 frukter i.
let fruktLista = ["Äpple", "Banan", "Päron", "Melon", "Apelsin"];

// 12. Lägg till en frukt i början och en frukt i slutet på arrayen.
// fruktLista.unshift("Jordgubbe");
// fruktLista.push("KotteAnanas");
// console.log(fruktLista);

// 13. I ovanstående fruktarray, plocka bort första och sista frukten.
// fruktLista.shift();
// fruktLista.pop();
// console.log(fruktLista, " andra");

// 14. I följande array, sätt in två nya frukter på index 2.
// let fruits = ["apple", "orange", "pear", "kiwi"];
// fruits.splice(2, 0, "Jordnöt", "Fisk");
// console.log(fruits);

// 15. Klona följande array och ändra första frukten till pineapple.
// let fruits = ["apple", "orange", "pear", "kiwi"];
// let newFruits = fruits.map((item, index) => {
//   if (index === 0) {
//     return "pineapple";
//   } else {
//     return item;
//   }
// });

// let newFruits2 = fruits.map((item) => {
//   return item;
// });
// newFruits2[0] = "Pinapple";
// console.log(newFruits2, " DETTA ÄR NYA 222");

// 16. Sortera följande array i fallande ordning.
// let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8];
// num.sort((a, b) => a - b);
// num.reverse();
// console.log(num);

// 17. Lägg ihop följande arrayer.
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b);
// console.log(c);

// 18 Mixa följande arrayer där varannan är från array a och varanan från array b.
// let a = ["My", "has", "many", "open"];
// let b = ["brain", "to", "tabs", "!"];
// let c = [];
// for (let i = 0; i < a.length; i++) {
//   c.push(a[i]);
//   c.push(b[i]);
// }
// console.log(c);

// 19.Merga in array b i array a på index 2.
// let a = [1, 2, 7, 8, 9, 10];
// let b = [3, 4, 5, 6];
// a.splice(2, 0, b);
// let c = a.flat();
// console.log(c);

// 20 Gör alla namn i array names till versaler.
// let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i].toUpperCase();
// }
// console.log(names);

// 22 Skriv koden för att undersöka om arrayen names innehåller namnet Ewa. Ditt svar ska vara true eller false.
// let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
// console.log(names.includes("Ewa"));

// 28 Skapa en ett objekt som heter book och som har egenskaperna title, author och genres. De två första egenskaperna ska vara strängar och den sista en array.
// let book = {
//   title: "",
//   author: "",
//   genres: [],
// };

// 29 console.log() endast egenskapen city i följande objekt.
let person = {
  name: "Sixten Faceplant",
  email: "sixten.faceplant@zocom.se",
  role: "ninjah",
  adress: {
    street: "Karatevägen 3",
    zip: "41477",
    city: "Kablam City",
  },
};

// console.log(person.adress.city);

// 30 Klona ett objekt.
// let person2 = person;
// console.log(person2);

// 31 Skapa objektet dog med egenskaperna name, breed och metoden bark som ska returnera "Woff, jag heter N!" där N ska ersättas med egenskapen name i samma objekt.
// let dog = {
//   name: "sixten",
//   breed: "",
//   bark() {
//     console.log(`Woff, jag heter ${this.name}!`);
//   },
// };
// dog.bark();

// 33 Skriv en funktion som adderar två numeriska argument (x och y ) och returnerar.
// function summeraGrejer(x, y) {
//   return x + y;
// }
// console.log(summeraGrejer(5, 38));

// 34 Skriv en anonym funktion som returnerar en sträng som förklarar skillnaden på namnade- och anonyma funktioner.
// const anonymt = function () {
//   console.log("Berat");
// };
// anonymt();

// 35 Skriv en funktion som plockar ut året från en sträng i datumformat. Funktionen ska ta ett argument, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'.
// function plockUtAret(input) {
//   // YYYY-MM-DD
//   console.log(input.substring(0, 4));
// }
// plockUtAret("1997-02-24");

// 36 Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en aritmetisk operator d.v.s antingen '+', '-', '/', '*'.
// function treParametern(tal1, tal2, char) {
//   switch (char) {
//     case "+":
//       return tal1 + tal2;
//       break;

//     case "-":
//       return tal1 - tal2;
//       break;

//     case "*":
//       return tal1 * tal2;
//       break;

//     case "/":
//       return tal1 / tal2;
//       break;

//     default:
//       break;
//   }
// }
// console.log(treParametern(5, 4, "+"));

// 37 Skriv en funktion som jämför om två tal är likadana och returnerar true / false.
// function compareNums(num1, num2) {
//   if (num1 === num2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(compareNums(3, 4));

//38 Skriv en funktion som kollar om ett tal är mellan 20 och 40 och returnerar true / false.
// function checkRange(num) {
//   if (num >= 20 && num <= 40) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkRange(40));

// 39. Skriv en funktion som jämför längden på två arrayer och returnerar den lägsta.
// function getMeTheLongestArr(arr1, arr2) {
//   if (arr1.length > arr2.length) {
//     return arr1;
//   } else {
//     return arr2;
//   }
// }
// console.log(getMeTheLongestArr(["1"], [2, 5]));

// 40. Avrunda talet 1337.51 nedåt till närmaste heltal med hjälp av Math object.
// console.log(Math.floor(1337.51));

// 41 Avrunda talet 1337.48 uppåt till närmaste heltal med hjälp av Math object.
// console.log(Math.ceil(1337.48));

// 42 Avrunda talet 1337.497 till närmaste heltal med hjälp av Math object.
// console.log(Math.round(1337.497));

// 43. Skriv en funktion ( random(max) ) som tar ett numerisk argument ( max ). Funktionen ska returnera ett slumpat tal mellan 0 och argumentet.

// 44. Skriv en funktion ( randomPassword(n) ) som tar ett numerisk argument ( n ). Funktionen ska returnera ett slumpat lösenord bestående av bokstäver och siffor med längden n.
// function randomPassword(n) {
//   let charsToUse = "acbdefghijklmnopqrstuvxyz123456789";
//   let password = "";
//   for (let i = 0; i < n; i++) {
//     let index = Math.floor(Math.random() * charsToUse.length);
//     let char = charsToUse[index];
//     password += char;
//   }
//   console.log(password);
// }
// randomPassword(8);

// 45.  Skriv en funktion ( randomName(names) ) som tar en array som argument ( names ). Funktionen ska returnera ett slumpat namn från arrayen.
// function randomName(names) {
//   let index = Math.floor(Math.random() * names.length);
//   return names[index];
// }
// const names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
// console.log(randomName(names)); // Greger

// // 46 Vad är skillnaden på följande två funktioner?
// let getData = function (url) {};
// function getData() {}

// Första är en anonym funktion assignad till en variabel
// Andra är en namnsatt funktion

// Execute

// 47 I vilken ordning kommer följande funktioner att exekveras?

// HelloAgainAgain();

// function hello() {
//   console.log("Hello!");
// }

// function helloAgain() {
//   console.log("Hello Again!");
//   hello();
// }

// function HelloAgainAgain() {
//   console.log("Hello Again Again!");
//   helloAgain();
// }

// Order:
// HelloAgainAgain()
// helloAgain()
// hello();

// 48 Ordna programmet i rätt ordning så alla pokemons printas ut. All kod som behövs finns med.

// let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

// function printPokemons() {
//   for (let i = 0; i <= pokemons.length; i++) {
//     console.log("One awesome pokemon is " + pokemons[i]);
//   }
// }

// printPokemons();

// 49 Ordna programmet i rätt ordning så att det går att skicka in en sträng och få tillbaka den baklänges.

// function reverseString(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reverseString("hello"));
