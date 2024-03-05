function funcUpDonContact(event){
    const target =event.currentTarget
    console.log(target)

    const formElement=document.querySelector('.forms')
    formElement.innerHTML=`<div class="forms"></div>`

}

let contactElement=document.querySelector(".contact")
contactElement.addEventListener('click',funcUpDonContact)
console.log(contactElement)