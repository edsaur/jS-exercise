function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(greaterNum(1, 190));

function helloWorld(lang) {
  if (lang === 'en') {
    return "Hello World";
  } else if (lang === 'es') {
    return "Hola Mundo";
  } else if (lang === 'de') {
    return "Hallo Welt";
  } else {
    return "Hello World"
  }
}

console.log(helloWorld("es"));

function assignGrade(grade) {
  if (grade >= 90 ) {
    return "A";
  } else if (grade >= 89) {
    return "B";
  } else if (grade >= 85) {
    return "C";
  } else if (grade >= 80) {
    return "D";
  } else {
    return "F"
  }
}

console.log(assignGrade(100));
console.log(assignGrade(89));
console.log(assignGrade(85));
console.log(assignGrade(80));
console.log(assignGrade(70));

function pluralize(num, noun) {
  if (num >= 2) {
    return num + " " + noun.concat("s");
  } else {
    return num + " " + noun;
  }
}

let num1 = 7;
let num2 = 21;
let num3 = -342;

if (num1 > 0 && num2 > 0 && num3 > 0) {
  console.log("The sign is " + "+")
} else if (num1 < 0 && num2 < 0 && num3 < 0) {
  console.log("The sign is " + "-");
} else if (num1 > 0 && num2 < 0 && num3 < 0) {
  console.log("The sign is " + "+");
} else if (num1 < 0 && num2 > 0 && num3 < 0) {
  console.log("The sign is " + "+");
} else {
  console.log("The sign is -");
}

let x = -2;
let y = 344;
let z = 12319;
let a = 0;
let b = -2315;

if (x > y && x > z && x > a && x > b) {
  console.log[x];
} else if (y > x && y > z && y > a && y > b) {
  console.log(y);
} else if (z > x && z > y && z > a && z > b) {
  console.log(z);
} else if (a > x && a > y && a > z && a > b) {
  console.log(a);
} else {
  console.log(b);
}

let num;
for(num = 0; num <= 15; num++) {
  if(num % 2 === 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

