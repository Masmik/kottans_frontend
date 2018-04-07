import PizzaListPage from '../containers/pizza_list_page';
import LoginPage from '../containers/login_page';
import RegistrationPage from '../containers/registration_page';
import CreatePizzaPage from '../containers/create_pizza_page'

const routesConfig = [
    {
        component: PizzaListPage,
        href: '/',
        access: ['userAuth']
    },
    {
        component: LoginPage,
        href: '/login',
        access: []
    },
    {
        component: RegistrationPage,
        href: '/registration',
        access: []
    }, {
        component: CreatePizzaPage,
        href: '/create',
        access: ['userAuth']
    },

];

export default routesConfig;
