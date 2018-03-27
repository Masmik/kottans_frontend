import '../src/containers/reset.scss';

//import {PizzaListPage } from './containers';
// import {LoginPage } from './containers';
// import { RegistrationPage } from './containers';

import { Router } from '../src/utils';
import routesConfig from '../src/utils/routes_config';

let router = new Router({ el: document.getElementById("root"), routesConfig });

// let w = new LoginPage({ el: document.getElementById("root") });
// let w = new PizzaListPage({ el: document.getElementById("root") });
// let w = new RegistrationPage({ el: document.getElementById("root") });


// w.update();
