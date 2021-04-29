
const authName = document.querySelector('.signName')
const authEmail = document.querySelector('.signEmail')
const submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click' , e => {
    e.preventDefault()

    if(authName.value === '' || authEmail.value === ''){
        alert("Fill the inputs")
    }else{
        if(authName.value === 'admin' || authEmail.value === 'admin'){
            alert("Welcome")
            window.open('index.html' , '_self')
            authName.value = ''
            authEmail.value = ''
            localStorage.setItem('isAuth' , "true")
            window.location.reload()
        }else{
            alert("Error")
            authName.value = ''
            authEmail.value = ''
            localStorage.setItem('isAuth' , "false")
        }
    }
})

window.addEventListener('load' , () => {
    const isAuth = localStorage.getItem('isAuth')
    isAuth === 'true' ? window.open('index.html' , '_self') : null
})