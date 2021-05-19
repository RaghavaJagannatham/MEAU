function testarea() {
    console.log("testing");
    var name1=document.getElementById("Name")
    var age1=document.getElementById("Age")
    var country1=document.getElementById("Country")
    var state1=document.getElementById("State")

    localStorage.setItem("Name",name1.value);
    localStorage.setItem("Age",age1.value);
    localStorage.setItem("Country",country1.value);
    localStorage.setItem("State",state1.value);

}
function signIn() {
    console.log("signIn is clicked");
}
 