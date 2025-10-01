const accountId = 14553
let accountEmail = "j@google.com"
var accountPassword = "12345"
accountCity = "Bhagalpur"
let accountState

// accountId = 2 // not allowed

accountEmail = "k@gmail.com"
accountPassword = "12121"
accountCity = "Bengaluru"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
