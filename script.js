function changeBackgroundColorToGreen() {              ///we just declared a function
    let body = document.body;
    console.log(body);
    body.style.backgroundColor = "green";


}

//changeBackgroundColorToGreen()              ////camelCase 
function greatUser() {
    let person = prompt("Please enter your name");
    console.log(person);
    if (person != "") {   ///!= is not equal to
        alert("Hello! " + person + " please email me @ninambash@gmail.com")

    }

}
  //greatUser() /// calling the function when you click