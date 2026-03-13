import {data} from './data.js'

async function greet () {
  return "Hello there jomskie looking from pc"
}

console.log(greet());

// greet().then(value => console.log(value));

const {name, age, gender, description} = data[2];

// console.log({name, age, gender,description})

// console.log(data[2]['name','age']) —commenting this one because this one wrong way to call the parameters of object
console.log(data[2]['name'],data[2]['age']) // this the correct way call it, separate it


/*
const getData = () => {
  return fetch(data) // should be url
  .then(reponse => reponse.json())
  .then(data => {
    console.log(data);
  });
}
*/

// console.log(getData());

/*
const getData = async () => {
  const response = await fetch(data);
  const data = await response.json();
  console.log(data);
}

console.log(getData());
*/