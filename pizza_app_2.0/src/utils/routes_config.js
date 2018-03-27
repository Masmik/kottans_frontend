import PizzaListPage from '../containers/pizza_list_page';
import LoginPage from '../containers/login_page';
import RegistrationPage from '../containers/registration_page';

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
    },

];

export default routesConfig;
