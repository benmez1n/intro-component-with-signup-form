const form = document.querySelector("form"),
      firstName = document.querySelector("#first-name"),
      lastName = document.querySelector("#last-name"),
      email =  document.querySelector("#email"),
      password  = document.querySelector("#password");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(firstName.value === '')
        add(firstName)
    else
        remove(firstName)
    if(lastName.value === '')
        add(lastName)
    else 
        remove(lastName)
    if(password.value === '')
        add(password)
    else
         remove(password)
    if(ValidateEmail(email))
        remove(email)
    else if(email.value ==="")
        add(email)
    else 
        add(email)
})
function ValidateEmail(email) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    else{
        return false
    }
}
remove = (element) => {
    element.classList.remove("is-error")
    element.nextElementSibling.classList.remove("error");
}
add = (element) => {
    element.classList.add("is-error")
    element.nextElementSibling.classList.add("error");
}