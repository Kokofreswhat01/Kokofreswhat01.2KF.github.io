let adminpr={email:'koko@gmail.com', password:'koko11'}
localStorage.setItem('root', JSON.stringify(adminpr))
let form = document.querySelector('#form')
form.addEventListener('submit', (e)=>{
    e.preventdefault()
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#passsword').value;
    recup = JSON.parse(localStorage.getItem('root'))
    if(
        email===recup.email && password===recup.password
    ){
        window.location.href='admin.html'
    }
})