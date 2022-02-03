'use strSct'

//! return total items of values 
const array = [1,4,2,5]
const total = array.reduce((acc, val) => {
  console.log( `value ${val} | acc ${acc}` );
    return acc + val;
}, 0);

console.log(total);

const shopCarte =[
  { p_id: '1', price: 100 , quantity: 3},
  { p_id: '2', price: 150 , quantity: 2},
  { p_id: '3', price: 200 , quantity: 1},
  { p_id: '4', price: 200 , quantity: 1},
]

const getTotalPrice = shopCarte.reduce((acc, val) => {
  console.log( `price ${val.price} |quntity ${val.quantity} | acc ${acc}` );
  return acc + val.price * val.quantity;
}, 0);

console.log(getTotalPrice);



//// get uniques from array of same type restOfItems

const listArr = [0 ,9,4,3,4,9,1,4,5,4,6,1,3,2,7,3,6,7,8,9,0,5,3,2,1]

const filterArr = listArr.reduce((acc, val) => {
  return  acc.includes(val) ? acc : [...acc, val]
}, [])
console.log(filterArr.sort((a,b) => a - b));