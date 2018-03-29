import { Component } from '../components';
import { bindAll, checkGrantAccess } from '../utils';


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
            currentUserAccess: ['userAuth']
        };

        this.el = props.el;

        window.addEventListener('hashchange', () => this.handleUrlChange(this.path));

        this.handleUrlChange(this.path);
    }

    get path() {
        return window.location.hash.slice(1);
    }

    handleUrlChange(path) {
        const { routesConfig, currentPath } = this.state;

        var nextRoute = routesConfig.find(({ href }) => href === this.path);

        if (this.path == '') {
            nextRoute = routesConfig.find(({ href }) => href === '/login');
        }

        if (checkGrantAccess(this.state.currentUserAccess, nextRoute)) {
            console.log('access granted')
        } else {
            console.log('access denied');
            this.navigateTo('/login');
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
    }

    navigateTo(url) {
        window.location.hash = url;
    }


    render() {
        let { activeComponent } = this.state;

        return activeComponent.update();
    }
}

export default Router;
