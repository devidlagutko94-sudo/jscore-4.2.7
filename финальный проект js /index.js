const inputEmail = document.getElementById('input-email');
const inputFullname = document.getElementById('input-fullname');
const inputPassword = document.getElementById('input-password');

async function wait (){

}


const waitInputLogin =  new Promise((resolve, reject) => {
    let inputLogin = document.getElementById('login-field');
    inputLogin.addEventListener('blur', () => {
        let inputLoginWord = inputLogin.value.trim();
    if (inputLoginWord.length < 5) {
        document.getElementById("login-field-error").textContent = ("Ваш логин слишком котороткий, минимум 5 сиволов")
    } else resolve(inputLoginWord)
})
})

const waitInputPassword = new Promise((resolve, reject) => {
    let inputPassword = document.getElementById("password-field");
    inputPassword.addEventListener('blur', () => {
        let inputPasswordWord = inputPassword.value.trim();
    if (inputPasswordWord.length < 5) {
        document.getElementById("password-field-error").textContent = ("Ваш пароль не подходит, нужно миниум 5 сиволов")
    }else resolve(inputPasswordWord);
    })
})

const waitInputEmail = new Promise((resolve, reject) => {
    let inputEmail = document.getElementById("email-field");
    inputEmail.addEventListener('blur', () => {
        let inputEmailWord = inputEmail.value.trim();
    if (inputEmailWord.length < 5) {
        document.getElementById("email-field-error").textContent = ("Ваш пароль не подходит, нужно миниум 5 сиволов")
    }else resolve(inputEmailWord);
    })
})


async function searchRepositories(query) {
    let response = await fetch(`https://api.github.com/search/repositories?q=${query}&per_page=5`)
    let json = await response.json()
};


function waitForClick(element) {
    return new Promise((resolve) => {
        element.addEventListener('click', (event) =>{
            resolve(event);
        },)
    })
}

const buttonRegistration = document.getElementById('registration-form');
buttonRegistration.addEventListener('click', () => {
    Promise.all([waitInputLogin, waitInputPassword, waitInputEmail])
    .then (([login, password, email]) => {
        console.log(login, password, email)
        const dataToSent = {
        currentTime: new Date().toISOString()
        };
        let ide = "10";
        let data = {
            login: login,
            password: password,
            surname: "ideу",
            name: "ide"//, 
            //email: email
            
            
        }
        console.log(JSON.stringify(data))
        //let promise = fetch('http://94.198.50.185:8031/api/users/registration', [options])
        let response = fetch('http://94.198.50.185:8031/api/users/registration', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json' // Говорим серверу, что отправляем JSON
            },
            body: JSON.stringify(data) // Преобразуем объект в JSON-строку
        });
    
        
        
})  

    })
  
    
   