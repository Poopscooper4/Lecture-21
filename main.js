// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":

for (let numbers = 1; numbers <= 15; numbers++) {
    if(numbers > 5){
        console.log(numbers);
        console.log("დიდია 5-ზე");
    }
    
}

// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:

let evennumber = [3, 6, 9, 12, 15]


let Enumb = evennumber.filter(evennumber => evennumber % 2 === 0)

console.log(Enumb);



// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:

// let text = "example";
// for (let i = 0; i < text.length; i++) {
//     let char = text[i];
//     if (char === 'a') {
//         console.log(char + " - ეს არის ასო 'a'");
//     } else {
//         console.log(char);
//     }
// }


let text = "example"
for (let i = 0; i < text.length; i++) {
    const leters = text[i];
    if(leters === "a"){
        console.log( leters + " ეს არის - a");
    }else{
        console.log(leters);
    }
    
}



// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:

let words = ["red", "green", "blue", "yellow"]
let word5 = words.filter(words => words.length >= 5)
console.log(word5);

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":

let number50 = 50

for (let i = 1; i <= number50; i++) {
    if(i % 7 === 0){
        console.log(i + " იყოფა 7 ზე");
    }
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:

let mult = [4, 8, 12, 16, 20]

let arr = []

for (let i = 0; i < mult.length; i++) {
    let multby2 = mult[i] * 2;
    console.log(multby2);
}


// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';

let js = "javascript"
for (let i = 0; i < js.length; i++) {
    const jscript = js[i];
    if (jscript === "j") {
        console.log(js[i]);
    }
}

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:

let numb5 = [5, 10, 15, 41, 25]

for (let i = 0; i < numb5.length; i++) {
    let dev = numb5[i]
    if (dev % 5 === 0) {
        console.log(dev);
    }
    
}


// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':

let hellwrld = 'hello world'

let arre = []

for (let i = 0; i < hellwrld.length; i++) {
    const helloworld = hellwrld[i];
    // console.log(helloworld)
    if (helloworld === "o") {
        continue
    }
    console.log(helloworld);
}

// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:


let even = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < even.length; i++) {
    const even1 = even[i];
    if (even1 % 2 === 0) {
        console.log(even1);
    }
    
}

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100
// )


let num10 = 10

for (let i = 1; i <=10; i++) {
    console.log(`${num10} * ${i} = ${num10 * i}`);
}
// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:

let number0 = [2, 7, 4, 9, 5]

for (let i = 0; i < number0.length; i++) {
    const multiplication = number0[i];
    if (number0[i] > 4) {
        console.log(number0[i] * 3 + "მეტია 4 ზე");
    }else{
        console.log(number0[i]);
    }
    
}

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი 
// ტექსტის დაბეჭდვა:


for (let i = 1; i < 31; i++) {
    let element = i;
    if (element > 10) {
        console.log(i , " gamarjoba");
    }else{
        console.log(element);
    }
    
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:

let front ="frontend"

for (let i = 0; i < front.length; i++) {
    const element1 = front[i];

    if(front[i] == "e"){
        console.log(front[i] + " ნაპოვნია ");
    }
    
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:


let idk = [100, 200, 300, 400, 500]

let arrey = []

for (let i = 0; i < idk.length; i++) {
    const metia250 = idk[i];

    if(idk[i] < 250){
        // console.log(idk[i]);
        arrey.push(idk[i])
        console.log(arrey);
    }
    
}


