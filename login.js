let logIn=[
    {id:1, userName:"Raghava", password:"Raghava143"},
    {id:2, userName:"Raghavan", password:"Raghava144"},
    {id:3, userName:"Raghuvaran", password:"Raghava145"}
];
logIn.push({id:4, userName:"jaiBalayya", password:"chennu"});
console.log(logIn);
//let login = $(logIn).val();
var myJSON =JSON.stringify(logIn);
localStorage.setItem("loginDetails", logIn);
