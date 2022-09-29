// const author = {
// miki: 45,
// mango: 12,
// kiwi: 10,
// anton: 8,

// };


// const entries = Object.entries(author);

// console.log(entries)


// for (const [name, numbers] of entries) {
    
//     console.log(`${name} ==> ${numbers}`);


// };


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
// };




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2]



// console.log(lastTag);





// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
 
// for ( const key in apartment){
//     // console.log(key)
//     keys.push(key)
// values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);
   




// function countProps(object) {
//   let propCount = 0;
 
//     const keys = Object.keys(object);
//     console.log(keys);
//     propCount = keys.length


//     console.log(propCount)
//     return propCount;
// }



// countProps({})
// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })







// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);



// for (const key of keys ) {
//     values.push(apartment[key])
    
// }





// console.log(values)



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const  color  of colors){
//     // console.log(color)
   
//  hexColors.push(color.hex);
// rgbColors.push(color.rgb);
  
// }
// console.log(hexColors)
// console.log(rgbColors)









// // Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

//  const fn = function (productName) {



// for (const product of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }
// return null;

// }

// console.log(fn("Grip"))
// console.log(fn("Engine"))
// console.log(fn("Droid"))





// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//   const array = [];
//   for (const product of products) {
//     if (product[propName]) {
//           array.push(product[propName]);

//     }
//   }

//   return array;
// }

  

// getAllPropValues()

// console.log(getAllPropValues("quantity"))
// console.log(getAllPropValues("price"))
// console.log(getAllPropValues("category"))
// console.log(getAllPropValues("name"))




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
 

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
// }

// calculateTotalPrice("Radar")
// calculateTotalPrice("Droid")
// calculateTotalPrice("Grip")
// calculateTotalPrice("Scanner")

// function add(...args) {
// let sum = 0
// for ( const  arg of [...args]) {
//     sum += arg
    
// }
//   return sum
// }


    

//  console.log(add(15, 27) )
//  add(12, 4, 11, 48)
//  add(32, 6, 13, 19, 8)
//  add(74, 11, 62, 46, 12, 36)





// function findMatches(a , ...prop) {
//   const matches = [];
//     for (const num of prop) {
//       for ( const b of a)
//         if (num === b) {
//             console.log(num)
//         }
// }

//   return matches;
// }





// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// findMatches([15, 25, 37, 42, 5], 14, 87 ,22, 37)
// findMatches([1, 2, 3, 4, 57], 10, 80, 20, 7)
// findMatches([11, 21, 31, 41, 5], 1, 8, 2, 7)
// findMatches([111, 20, 30, 4, 5], 111, 80, 20, 7)
// findMatches([17, 21, 3, 4, 221,  5], 17, 8, 221, 7)






// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
   
//         for (const potion of this.potions) {
//             if (potion === potionName) {
//                 this.potions.splice(potion, 1)
//                 return this.potions
//             }
//         }
//     }
// }

// // console.log(atTheOldToad.potions)


// console.log(atTheOldToad.removePotion("Speed potion"))
// console.log(atTheOldToad.removePotion("Dragon breath"))



// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);

// };

// const add = function (x, y) {
//     return x + y;

// };

// const sub = function (x, y) {
//     return x - y
    
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);





// const rounder = function (places) {
    
//     return function (number) {
//         return Number(number.toFixed(places))
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.45322));
// console.log(rounder3(9.5442));
// console.log(rounder2(1.22));
// console.log(rounder2(3.35445322));
// console.log(rounder3(23.453251));
// console.log(rounder3(5.453290));





// const numbers = [0, 5, 10, 15, 12, 14, 45, 78];
// console.log(numbers);

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total);


// const finder = numbers.find(number => number > 36);


// console.log(finder);




// const filtered = numbers.filter(number => number > 36);

// console.log(filtered);




// const maped = numbers.map(number => number/ 2 );


// console.log(maped);











// flat
// flatmap
// sort



// const  filterAr/ray(numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number  => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   // Change code above this line
  
//   return filteredNumbers;
// }


// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach( number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//     return filteredNumbers;
    
// const  filterArray(numbers, value) => {
//   const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     })

//   // Change code above this line
//   return filteredNumbers;
// }










// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(({genres}) => genres);
// const uniqueGenres = allGenres.filter((val , ind , arr) => arr.indexOf(val) === ind);

// console.log(allGenres);
// console.log(uniqueGenres);




// //  array.indexOf(course) === index



// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// // const total = players.playtime / players.gamesPlayed


// const totalAveragePlaytimePerGame = players.reduce((sum, numb) => sum + numb.playtime  / numb.gamesPlayed , 0)

// // const totalAveragePlaytimePerGame = players.reduce((acc, play) => {
// // return acc + play.playtime / play.gamesPlayed
// // }, 0);



//   console.log(totalAveragePlaytimePerGame);





// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'لَآ أَعْبُدُ مَا تَعْبُدُونَ';
// // console.log(titleEl);

// const imageEl = document.createElement('img');
// imageEl.width = 300;

// imageEl.src = '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YePj_yrMUR-89tpxdx7lRvdfszNwosSlvw&usqp=CAU'
// // document.body.appendChild(imageEl);

// // document.body.appendChild(titleEl);
// document.body.append(titleEl ,imageEl)



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books];

// const sortedByReversedAuthorName = books;

// const sortedByAscendingRating = books;

// const sortedByDescentingRating = books;








// const dog = Object.create

// class Car {
//   // Change code below this line
// constructor( brand , model , price ) {
//     // Инициализация свойств экземпляра
// brand,
// model,
// price,
     
     
  
//   }



//   // Change code above this line
// }





// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// const founder = document.querySelector('#categories');
// console.log(founder)

// const foundered = document.querySelectorAll('.item')
// console.log(foundered)

// const ref = document.querySelector('li.item')
// console.log(ref)

// const refs = document.querySelectorAll('.item.Animals')
// console.log(refs)

// const founderedd = document.querySelector('Cat')
// console.log(founderedd)

// const foundereddd = document.querySelector('item.Cat')
// console.log(foundereddd)

// const founderedddd = document.querySelector('.Cat')
// console.log(founderedddd)



// NUMBER1

// const listEl = document.querySelector("#categories");
// console.log(listEl);

// const itemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: `, itemEl.length);

// const titleEl = document.querySelectorAll("h2");
// console.log(titleEl)
// const newListEl = document.querySelectorAll(".item ul");
// console.log(newListEl)
// for (let i = 0; i < titleEl.length; i += 1) {
//   console.log(`Category: `, titleEl[i].textContent);
//   console.log(`Elements: `, newListEl[i].children.length);
// }

// NUMBER2

// const itemRefs = document.querySelectorAll(".item");
// console.log("Number of categories: ", itemRefs.length);
// itemRefs.forEach((element) => {
//   const titleRefs = element.querySelector("h2").textContent;
//   console.log("Category: ", titleRefs);
//   const secondItemRefs = element.querySelectorAll("li");
//   console.log("Elements: ", secondItemRefs.length);
// });

// NUMBER3

// const listRefs = document.querySelector("#categories").children;
// console.log("Number of categories: ", listRefs.length);

// [...listRefs].forEach((element) => {
//   const title = element.querySelector("h2").textContent;
//   console.log("Category: ", title);

//   const lengthEl = element.querySelectorAll("li").length;
//   console.log("Elements: ", lengthEl);
// });





// console.log(tagsContainer);
// const btns = document.querySelectorAll('li');
// console.log(btns);

// const tagsContainer= document.querySelector('.tags');
// tagsContainer.addEventListener('click', onClick);
// const selectedTags = new Set();

// function onClick(evt) {
//     const nextActiveBatton = evt.target
//     if (nextActiveBatton.nodeName !== 'BUTTON') {
//         return
//     }
 

//    const exMachine = nextActiveBatton.classList.toggle('tags__btn--active')

//     selectedTags.add(nextActiveBatton.dataset.value);
    
//     if (!exMachine) {
//         selectedTags.delete(nextActiveBatton.dataset.value);
//     }
//     // exMachine?.selectedTags.delete(nextActiveBatton.dataset.value);

//     console.log(selectedTags);




//     // console.log('Нажатие на  кнопку прошло успешно))')
//     // console.log(evt.target);
   
// //    const currentActiveButton = document.querySelector('.tags__btn--active')
// //     // console.log(currentActiveButton);
   
// //     nextActiveBatton.classList.add('tags__btn--active');
// //     const selectedTag = nextActiveBatton.dataset.value

// //     if (currentActiveButton) {
// //         currentActiveButton.classList.remove('tags__btn--active')
// //     };

// //     currentActiveButton?.classList.remove('tags__btn--active')

// //     console.log(selectedTag)
// };


// const colors = [
//     // { hex: '#dfa801', rgb: '224,67,54' },
//     // { hex: '#e91e63', rgb: '238,38,99' },
//     // { hex: '#9c27b8', rgb: '156,37,53' },
//     // { hex: '#679f58', rgb: '311,57,43' },
//     // { hex: '#5f9ea0', rgb: '214,67,54' },
//     // { hex: '#0A75AD', rgb: '10,117,173' },
//     // { hex: '#b95355', rgb: '104,67,54' },
//     // { hex: '#898378', rgb: '84,6,54' },
//     // { hex: '#9b4848', rgb: '04,120,544' },
//     // { hex: '#b3cee5', rgb: '4,153,54' },
//     { hex: '#f6eee0', rgb: '0,62,54' },
//     { hex: '#324c65', rgb: '54,60,54' },
//     { hex: '#644123', rgb: '24,7,54' },
//     { hex: '#556f55', rgb: '22,12,54' },
//     { hex: '#4a4aa2', rgb: '104,112,54' },
//     { hex: '#f4e0a5', rgb: '100,171,54' },
//     { hex: '#c86060', rgb: '111,129,54' },
//     { hex: '#c4a6d4', rgb: '132,241,54' },
//     { hex: '#a56b9d', rgb: '145,234,54' },
//     { hex: '#869ea7', rgb: '153,42,54' },
//     { hex: '#c8b18d', rgb: '155,132,54' },
//     { hex: '#f49c14', rgb: '51,132,54' },
//     { hex: '#db560d', rgb: '34,6,54' },
//     { hex: '#0f8880', rgb: '86,186,90' },
//     { hex: '#8b9df2', rgb: '139,157,242' },

    
// ];



// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);


    
// function createColorCardsMarkup(colors) {
//     return colors.map(({ hex, rgb }) => {
//         return `
// <div class="color-card">
//  <div
//    class="color-swatch"
//    data-hex="${hex}"
//    data-rgb="${rgb}"
//    style="background-color: ${hex}"
//  ></div>
//  <div class="color-meta">
//    <p>HEX: ${hex}</p>
//    <p>RGB: ${rgb}</p>
//  </div>
// </div>
// `;
//     }).join('');
// };



// function onPaletteContainerClick(evt) {
//     const isColorSwatchEl = evt.target.classList.contains('color-swatch');


//     if (!isColorSwatchEl) {
//         return;
//     }

//     const currentActiveCard = document.querySelector('.color-card.is-active');

//     if (currentActiveCard) {
//         currentActiveCard.classList.remove('is-active');
// }

//     const swatchEl = evt.target;
//     const parentColorCard = swatchEl.closest('.color-card');

//     parentColorCard.classList.add('is-active');

//     document.body.style.backgroundColor = swatchEl.dataset.hex

// // console.log(swatchEl)

// }






// const tech = [
//     { label: 'HTML' },
//     { label: 'JavaScript' },
//     { label: 'Css' },
//     { label: 'C++' },
//     { label: 'React' },
//     { label: 'Node' },
//     { label: 'Rust' },
//     { label: 'MangoDb' },
//     { label: 'Vue' },
//     { label: 'Type Script' },
//     { label: 'Python' },
//     { label: 'PHP' },
//     { label: 'C#' },
//     { label: 'Ruby,' },
//     { label: 'Java' },
    

// ]



// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter')
// }

// refs.input.addEventListener('input', onFilterChange);

// const listItemsMarkup = createListItemsMarkup(tech)

// refs.list.innerHTML = listItemsMarkup;


// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// };

// function onFilterChange(evt) {
//     const filter = evt.target.value.toLowerCase();

//     const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter)
//     );

//     const listItemsMarkup = createListItemsMarkup(filteredItems);
//     refs.list.innerHTML = listItemsMarkup;

// }


const fetchPokemonById = id => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

fetchPokemonById(Math.round(Math.random() * (900 - 1 ) + 1)).then(onFetchSuccess).catch(onFetchError);





function onFetchSuccess(pokemon) {
    console.log(pokemon);
};
    
    
function onFetchError(error) {
    console.log(error);
};






const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5

        setTimeout(() => {
        if (passed) {
         resolve('ку-ку');
        }
        reject('error')
    })
        }, 2000);
};



makePromise().then(result => console.log(result)).catch(error => console.log(error));

setTimeout(() => {
    console.log('strange work of Timeout');
}, 2000);
        
const ilman = 0;



console.log(
    '%c Приветствую вас Ильман!',
    'color: green; font-size: 47px;',
);

console.log(
    '%c приятной работы в VScode)',
    'color: brown; font-size: 37px;',
);



fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(response => {
    return response.json();
    })
    .then(pokemon => {
    console.log(pokemon);
    })
    .catch(error => {
    console.log(error)
});
