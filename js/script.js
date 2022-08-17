

// Чисто тещу пк свой :


// const nubm = Math.round(Math.random() * (10 - 1 ) + 1 )

// console.log( 'your payment is ' , nubm  );

 

// for (let i = 20; i > 70; i += 1)
// if (i % 10 === 0) {}

// stars = (stars % 10) 



// switch (stars){
//  case 1:
//     price = 20;
//     break; 
// case 2:
//     price = 30
//     break;
// case 3:
//     price = 40
//     break;
// case 4:
//     price = 50
//     break;
   
//   default:

//   price = "Ты проиграл чёрт"
// }

const  stars =  Math.round(Math.random() * ( 70 - 20 ) + 20 ) ; 

let price ; 


if ( stars >= 20 &&  stars <= 30) {
    price = 'ну ты чистый конченный полупокерный выпердеж шакала,чистый  нол ёбанный'
} else if  (stars <= 40) {
    price = 'ты как быы  и лох и как бы не очень, фуцишка вообщем по нашему'
} else if ( stars <= 70 ) {
    price = `ебать огромный прайс : ${stars}`
} else {
 console.log(`Ты ебаный крендель и прайс твой равен : `, stars )
}


console.log(price);
