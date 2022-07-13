const view = {};

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'adminScreen':
            document.getElementById('app').innerHTML = components.adminScreen;
            break;
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen;
            let btnLogin = document.getElementById('login-btn');
            let username = document.getElementById('#username');
            let password = document.getElementById('#password');
            btnLogin.onclick = () => {
                console.log(username.value, password.value)
                controller.login(username.value , password.value);
            }
            break;
        default:
            break;
    }
}