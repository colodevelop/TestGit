var runWithDebugger = function(ourFunction){
    debugger;
    ourFunction();
}

// let person = {
//     firstName: 'Nick',
//     lastName: 'Colomatin',
//     birthyear: 1995,
//     birthCity: 'Baku',
//     calculateAge: function (age) {
//        var age = 2018 - this.birthyear;
//        console.log(age);

//     }
// };

// person.calculateAge();



// console.log(person);







////////////////////////////////////////////////////////////////////////////


// Function prototype that makes a new object for a person

// function newPerson(firstName, lastName, birthyear, birthCity){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthyear = birthyear;
//     this.birthCity = birthCity;
//     console.log(`This is ${firstName} ${lastName} and he is born in ${birthCity} in the year ${birthyear} `)
    
//      function isHeOld(){
//         if(birthyear < 1980){
//             console.log('He is older than 40 years!')
//         } else if (birthyear >= 1980 && birthyear < 2000){
//             console.log(`He is already younger then most!`)
//         } else {
//             console.log('He a young booy');
//     }}

//     isHeOld();
// }


// var micheal = new newPerson('Micheal', 'Anderson', '1980', 'Jamaica');





// console.log(micheal);


//////////////////////////////////////////////////////////////////////////////////////

// var items = ['Nick', 'Appel']



// // Pushes item into an array, and checks what parameter it is. 
// function pushIt(x){
//     if (typeof x == 'string'){
//         items.push(x);
//         console.log(`Nice , it's a string!`)
//     } else if (typeof x == 'number') {
//         console.log(`It's a number`)
//     } else if (typeof x == 'boolean'){
//         console.log(`This is a boleaan bro`)
//     } else {
//         console.log(`I don't know what this is.`)
//     }
// }

// pushIt('Jo')

// console.log(items);


//////////////////////////////////////////////////////////////////////////////////


// const arr1 = [];
// const arr2 = [];

// function addItems(arr, ...item){
//     arr.push(...item)
//     return arr;

// }

// addItems(arr1,'Appel', 'peer', 'Banaan')


// arr2.push('Appel', 'Peer')
// console.log(arr1, arr2)


////////////////////////////////////////////////////////////////////////////////



// setTimeout(function(){
//     console.log('Hey Solaiman');
// }, 300)

// setTimeout(function(){
//     console.log('niet vergeten he');
// }, 2000)

// setTimeout(function(){
//     console.log(`'t is niet altijd zonnetjes en bloemetjes`);
// }, 3200)


// setTimeout(function(){
//     console.log(`😀😀😀`);
// }, 4200)


////////////////////////////////////////////////////////////////////////////////

// displayTodos: function(){
//     for (var i=0; i < this.todos.length; i++){
//         console.log(this.todos[i].todoText);
//     }

// for (var i = 5; i < 10; i++){
//     console.log("Picky")
// }


///////////////////////////////////////////////////////////////////////////////



// var boodschappen = [];

// function addSpull (arr, item){
//     return arr.push(item);
// }

// addSpull(boodschappen, 'Appel');
// addSpull(boodschappen, 'Appel');
// addSpull(boodschappen, 'Banaan');



// console.log(boodschappen);


// function checkItem(){

//     var Appels = 0;
//     var Andereitems = 10;

//     for ( var i = 0; i < boodschappen.length; i++){
//           if (boodschappen[i] === 'Appel'){
//             console.log('Het is een ' + boodschappen[i]);
//         } else {
//             console.log('Het is eigenlijk een ' + boodschappen[i])
//         };
//     };

//     for (var i = 0; i < boodschappen.length; i++){
//         if (boodschappen[i] === 'Appel'){
//             Appels++
//         } else {
//             Andereitems--;
//         };
//     };

//     console.log(Appels);
//     console.log(Andereitems);
//     };
    
// checkItem();


////////////////////////////////////////////////////////////////////



// var een = {
//     color: 'blue'
// }

// var twee = een;


// twee.color = 'Red'

// twee.appel = 'Geen'

// console.log(een);
// console.log(twee);

// if (een === twee){
//     console.log(true)
// }


// var drie = een.color;

// drie = 'Geel'

// if (drie === een.color){
//     console.log(true)
// } else {
//     console.log(false)
// }


////////////////////////////////////////////////////////////////////////

// const items = ['Pen', 'Boek', 'Stift'];

// function logItems(items){
//     console.log(items + 'MasterPlan')
// }

// items.forEach(logItems);


// function logThem(items){
//     for(i=0; i < items.length; i++)
//     console.log(items[i]);
// }

// logThem(items);

//////////////////////////////////////////////////////////////


// let toDo = ['Buy Chicken', 'Create list', 'Solve Math'];

// function logList(){
//     console.log(toDo);
// }

// logList();

// function addToDo(input){
//     toDo.push(input);
//     logList();
// }

// addToDo('Go to Gym');

// function changeToDo(placement, newValue){
//     toDo[placement] = newValue;
//     logList();
// }

// changeToDo(1, 'Get some tea');

// function deleteToDo(del){
//     toDo.splice(del, 1);
//     logList();
// }

// deleteToDo(1)

////////////////////////////////////////////////////////////////////////////





































