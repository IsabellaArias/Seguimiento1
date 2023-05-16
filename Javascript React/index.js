/*function hello(){
    console.log("hola mundo");
    console.log("Estoy estudiando para ser una gran profesicional");
}
hello();*/

/*function hello(){
    return "hola mundo";
}
console.log(hello());*/

/*function hello(){
    return 7;
}
console.log(hello());*/

/*function hello(){
    return false;
}
console.log(hello());*/

/*function hello(){
    return {grupo: "Los invencibles"};
}
console.log(hello());*/

/*function hello(){
    return [1,2,3];
}
console.log(hello());*/

/*function hello(){
    return function(){
        return `hola mundo`
    }
}
console.log(hello());*/

/*function hello(){
    return function(){
        return `hola mundo`
    }
}
console.log(hello()());*/

/*function hello(name){
        return `hola `+ name
    }
console.log(hello("Profe Arle"));
console.log(hello("Isabella"));
console.log(hello("Mariana"));*/

/*function add(x,y){
    if(y=== undefined){
        y=0;
    }
    return x +y
}
console.log(add(20,30));
console.log(add(5,62));
console.log(add(20,7));
console.log(add(47,));*/

/*function add(x = 6,y = 2){
    return x +y
}
console.log(add(20));*/

/*const user={
    name:"Isabella",
    lastname:"Arias",
    age:17,
    address:{
        country:"colombia",
        city:"Bogota",
        street:"calle 5N 12-53"
    },
    friends:["keidy", "evelyn", "yudi"],
    active: true,
    sendemail: function(){
        return "send email..."
    }
}

console.log(user);
console.log(user.friends);
console.log(user.name);
console.log(user.sendemail());*/

/*const name= `laptop`;
const price= 3000;

const newProduct ={
    name: name,
    price: price,
}
console.log(newProduct);*/

/*const title = document.createElement(`h1`);
title.innerText= `Hola mundo desde Js`;
//console.log(title);//
document.body.append(title);*/

/*const button= document.createElement(`button`);
button.innerText= `Click`;
button.addEventListener(`click`, function(){
    console.log(`Hola`);
});

document.body.append(button);*/

/*const button= document.createElement(`button`);
button.innerText= `Click`;
button.addEventListener(`click`, function(){
    title.innerText= `Texto actualizado con JS`
    alert(`Se realizo un Click`);
});

document.body.append(button);*/
/*const user={
    name: `Jorge`,
    age: 21
}
function printInfo(user){
    return `<h1>Hola `+ user.name + `</h1>`
}
console.log(printInfo(user));
document.body.innerHTML= printInfo(user);*/

/*const user={
    name: `Jorge`,
    age: 21
}
function printInfo({name}){
    return `<h1>Hola `+ name + `</h1>`
}
console.log(printInfo(user));
document.body.innerHTML= printInfo(user);*/

/*const user={
    name: `Jorge`,
    age: 21
}
function printInfo(user){
    const {name, age}= user;
    console.log(name, age);
    return `<h1>Hola `+ name + `</h1>`
}
console.log(printInfo(user));
document.body.innerHTML= printInfo(user);*/

/*function start(){
    return `starting`
}
console.log(start());

console.log(function(){
    return `starting`
});*/

/*const add=(x,y)=>{
    return x + y;
}
console.log(add(40,12));

const button= document.createElement(`button`);
button.innerText= `Click`;
button.addEventListener(`click`,() =>{
    alert(`cliked`)
})
document.body.append(button);*/

/*const showtext=()=> `Hola mundo`;
const shownumber=()=> 7;
const showBoolean=()=> true;
const showarray=()=> [1,2,3];
const showobject=()=> ({name: `Jorge`, age: 21});
console.log(showtext());
console.log(shownumber());
console.log(showBoolean());
console.log(showarray());
console.log(showobject());*/

/*const button= document.createElement(`button`);
button.innerText= `Click`;
button.style= `background: red; color: white;`
const isAutorice= true;
button.addEventListener(`click`,() =>{
    if(isAutorice===true){
        return alert(`Esta autorizado`);
    }
        alert(`No esta autorizado`);
})
document.body.append(button);*/

/*const background= `pink`;
const color= `black`;
const button= document.createElement(`button`);
button.innerText= `Click`;
button.style= `background: ${background}; color: ${color}`
const isAutorice= true;
button.addEventListener(`click`,() =>{
    if(isAutorice===true){
        return alert(`Esta autorizado`);
    }
        alert(`No esta autorizado`);
})
document.body.append(button);*/

/*const background= `orange`;
const color= `white`;
const isAutorice= false;

const button= document.createElement(`button`);
button.innerText= `Click`;
button.style= `background: ${isAutorice ? `blue`:`red`}; color: ${color}`

button.addEventListener(`click`,() =>{
    if(isAutorice===true){
        return alert(`Esta autorizado`);
    }
        alert(`No esta autorizado`);
})
document.body.append(button);*/

//const names=[`Isa`,`Jose`,`Carlos`];//
/*for(let i=0; i< names.length; i++){
    console.log(names[i]);
}*/
//hace lo mismo de manera mas facil 
/*names.forEach(function (name){
    console.log(name);
})*/

/*const newnames= names.map(function (name){
    return `hola ${name}`;
})
console.log(newnames);
console.log(names);*/

/*const nameFound= names.find(function (name){
    if (name=== `Victor`){
        return name
    }
})
console.log(nameFound);*/

/*const nameFound= names.filter(function (name){
    if (name=== `Isa`){
        return name
    }
})
console.log(nameFound);*/

/*const names=[`Isa`,`Jose`,`Carlos`];
const newnames= [`flor`, `Hanna`, `Toby`];

console.log(names);
console.log(newnames);
console.log(names.concat(newnames));
console.log([...names,...newnames]);*/

/*const user={
    name: `Jorge`,
    lastname:`Lemus`,
}
const address={
    street:`Calle 5`,
    city: `Armenia`,
}
const userinfo={
    ...user,
    ...address,
}
console.log(userinfo);*/

/*import {add, multiply, active, points, title} from "./add.js"
console.log(points,active,title);
console.log(add(5,10));
console.log(multiply(5,10));

export default points*/

/*const person={
    name:`salome`,
    address: {
        city: `New york`
    }
}
console.log(person.address);
console.log(person.location?.city);*/

/*let data= fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(function(){
    console.log(`finalizo la carga`);
});
console.log(`linea 2`);
console.log(data);*/
const ul= document.createElement(`ul`);

/*let data= fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(function(response){
   return response.json()
    console.log(response);
}).then(function(data){
    console.log(data);
    data.forEach(post => {
        const li= document.createElement(`li`);
        li.innerText= post.title 
        ul.append(li)
    });
    document.body.append(ul);
})*/

async function loadData(){
const response= await fetch(`https://jsonplaceholder.typicode.com/posts`)
const data= await response.json()
console.log(data);
data.forEach(post => {
    const li= document.createElement(`li`);
    li.innerText= post.title 
    ul.append(li)
});
document.body.append(ul);
}
console.log(`linea 2`);