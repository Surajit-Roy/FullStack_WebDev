console.log('Chaliye Suru Karte Hai');

// object create 

/* let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){
        console.log('drawing rectangle...');
    }
};
*/

// factory function 

/* function createRectangle(len, bre){
    return rectangle = {
        length: len,
        breadth: bre,
    
        draw() {
            console.log('drawing rectangle...');
        }
    };
}

// function call 

let rectangleObj1 = createRectangle(10, 5);
let rectangleObj2 = createRectangle(5, 2);
let rectangleObj3 = createRectangle(15, 4);
*/


// constructor function 
// (in this function we follow the notation -> Pascal Notation)
// Camel Notation -> numberOfStudents
// Pascal Notation -> NumberOfStudents
// constructor function -> properties/methods -> intialise/ Define 

/*function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing...');
    }
}

// object creation using constructor function 
let rectangleObject = new Rectangle(4, 6);
*/

// Dynamic Nature of Objects

/*function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing...');
    }
}

// object creation using constructor function 
let rectangleObject = new Rectangle(4, 6);

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);
*/

// Constructor Property

/*let Rectangle1 = new Function(
    'length', 'breadth',
`this.length = length;
this.breadth = breadth;
this.draw = function(){
    console.log('drawing...');
}`);

// object creation using Rectangle1 
let rect = new Rectangle1(2, 3);
console.log(rect);
*/

// premitive types

/*let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);*/

//refrence types

 /*let a = {value: 10};
 let b = a;

 a.value++;

 console.log(a.value);
 console.log(b.value);*/

//  Premitive are copied by their Value. 
// Reference are copied by their address/ reference 

let rectangle = {
    length : 4,
    breadth : 3
};

// for-in loop
/*for(let key in rectangle){
    // keys are reflected through key variable
    // values are reflected through rectangle[key]
    console.log(key, rectangle[key]);
}*/

// for-of loop
/* for(let key of Object.entries(rectangle)){
    console.log(key);
}*/

/*if('length' in rectangle){
    console.log('Present');
}
else{
    console.log('Absent');
}*/

// Object Clonning

// #1. Iteration 
/*let src = {
    a : 10,
    b: 20,
    c : 30
};

let dest = {};

for(let key in src){
    dest[key] = src[key];
}
console.log(dest);

src.a++;
console.log(dest);
*/

// Object Clonning #2. 

/*let src = {
    a:10,
    b:20,
    c:30
};
let src2 = {value: 25}

let dest = Object.assign({}, src, src2);
console.log(dest);

src.a++;

console.log(dest);
*/

// Object Clonning #3

let src = {
    a:10,
    b:20,
    c:30
};

let dest = {...src};
console.log(dest);

src.a++;

console.log(dest);