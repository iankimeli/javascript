let outputTag = document.getElementById('output')


function getName(event){
    event.preventDefault()
    let date = document.getElementById(date).value
    let gender = document.getElementById('gender').value
    let myBirthday = newDate(date).toDateString()
    let day = myBirthday.split(' ')[0]
    let message =`${day}`
    message = hello day
}

outputTag.innerHTML = message

