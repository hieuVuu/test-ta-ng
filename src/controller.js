const controller = {};

controller.login = ({email, password}) => {
    if (email !== '' && password !== '') {
    const dataLogin = { email, password };
    console.log(1);
    model.login(dataLogin);
    }
}