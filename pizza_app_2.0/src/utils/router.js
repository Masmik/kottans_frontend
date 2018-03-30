import { Component } from '../components';
import { bindAll, checkGrantAccess, Auth, navigateTo } from '../utils';


class Router extends Component {
    constructor(props) {

        super(props);
        bindAll(this, 'handleUrlChange');

        const { routesConfig } = props;

        this.state = {
            routesConfig,
            currentPath: null,
            currentComponent: null,
            activeComponent: null,
            currentUserAccess: Auth.currentUserAccess,
            user: {}
        };

        this.el = props.el;

        window.addEventListener('hashchange', () => this.handleUrlChange(this.path));

        this.handleUrlChange(this.path);
    }

    get path() {
        return window.location.hash.slice(1);
    }

    logOut() {
        this.state.user = {};
    }


    handleUrlChange(path) {
        const { routesConfig, currentPath } = this.state;

        this.state.currentUserAccess = Auth.currentUserAccess;

        if (Auth.isExpired()) {
            this.logOut();
        }
        var nextRoute = routesConfig.find(({ href }) => href === this.path);

        if (this.path == '') {
            nextRoute = routesConfig.find(({ href }) => href === '/login');
        }

        console.log(this.path);

        if (this.path == '/logout') {
            Auth.logOut();
            navigateTo('/login');
            return;
        }


        if (checkGrantAccess(this.state.currentUserAccess, nextRoute)) {
            console.log('access granted')
        } else {
            console.log('access denied');
            navigateTo('/login');
            return;
        }

        // var nextRoute = routesConfig.reduce((previousValue, currentValue, index, array) => {
        //     if (currentValue.href === this.path) {
        //         return currentValue;
        //     }
        //     return previousValue;
        // }, { href: '/', component: PizzaListPage });

        if (nextRoute && nextRoute !== currentPath) {
            // this.state.currentPath = nextRoute;
            // this.state.activeComponent = new nextRoute.component();
            // this.update();

            this.updateState({
                currentPath: nextRoute,
                activeComponent: new nextRoute.component()
            })
        }
        this.update();
    }

    render() {
        let { activeComponent } = this.state;

        return activeComponent.update();
    }
}

export default Router;
