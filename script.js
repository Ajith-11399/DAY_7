//! Task - 1 => Get all the countries from Asia continent /region using Filter function
let asia = new XMLHttpRequest();
asia.open("GET", "https://restcountries.com/v3.1/all", true);
asia.send();
asia.onload = function () {
    let list = asia.response;
    let continent = JSON.parse(list);
    let data = continent.filter((element) => element.region === "Asia");
    let asian = data.filter((element) => console.log(element.name.common));
}




//! Task - 2 => Get all the countries with a population of less than 2 lakhs using Filter function :-
let req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all", true);
req.send();
req.onload = function () {
    let country = req.response;
    let continent = JSON.parse(country);
    let population = continent.filter((element) => element.population < 2000000);
    let countries = population.filter((element) => console.log(`${element.population} population of ${element.name.common}`));
}




//! Task - 3 => Print the following details name, capital, flag, using forEach function :-
let req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all", true);
req.send();
req.onload = function () {
    let country = req.response;
    let capital = JSON.parse(country);
    let result = capital.forEach((element) => console.log(`${element.capital} of ${element.name.common} and it's flag is ${element.flag}.`));
}




//! Task - 4 => Print the total population of countries using reduce function :-
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function() {
    let data = request.response;
    let obj = JSON.parse(data);
    let result = obj.reduce((acc, sum) => acc + sum.population, 0); 
    console.log(`The total population is "${result}".`);
}




//! Task - 5 => Print the country that uses US dollars as currency :-
let req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all", true);
req.send();
req.onload = function(){
    let currency = req.response;
    let data = JSON.parse(currency);
    let dollarCountries = data.filter((ele) => ele.currencies && ele.currencies.hasOwnProperty("USD") && ele.currencies["USD"].name === "United States dollar");
    let dollar = dollarCountries.forEach((ele) => console.log(`"${ele.name.common}" is using Dollar`));
}