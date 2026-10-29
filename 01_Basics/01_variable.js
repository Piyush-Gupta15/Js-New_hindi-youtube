const accountId = 122423
let accountEmail = "Piyush@gmail.com"
var accountPassword = 2345643
accountCity = "Dhanbad"   // we can also declare variable in this way , it is not a good practise to write code
/* Prefer not to use 'var' because of issue in block scope
 and functional scope*/

accountEmail = "Aman@gmail.com"
accountPassword = 9999
console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity])

let accountState ;   // It will show undefined
console.table([accountState , accountId , accountEmail , accountPassword , accountCity])

