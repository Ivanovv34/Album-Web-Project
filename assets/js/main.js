/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

/*==== Search SHOW ====*/
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*==== Search Hidden ====*/
/*Validate*/
if(searchClose){
    searchClose.addEventListener('click',() =>{
        searchContent.classList.remove('show-search')
    })
}
/*=============== LOGIN ===============*/
/*=============== SEARCH ===============*/
const loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content')

/*==== Login SHOW ====*/
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/*==== Login Hidden ====*/
/*Validate*/
if(loginClose){
    loginClose.addEventListener('click',() =>{
        loginContent.classList.remove('show-login')
    })
}
