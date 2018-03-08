class Component {

    constructor(props) {
        this.props = props || {};
        this.state = {};

        this.el = null;
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        this._render();
    }

    componentReceivedProps(nextProps) {}

    update(nextProps) {
        if (typeof nextProps == 'undefined') {
            return this._render();
        }
        this.componentReceivedProps(nextProps);
        this.props = nextProps;
        return this._render();
    }

    _render() {
        // console.log('component props', this.props, this.state);

        const children = this.render();

        this.el.innerHTML = '';

        if (typeof children === 'string') {
            this.el.innerHTML = children;
        } else if (Array.isArray(children)) {
            this.el.append(...children);
        } else {
            this.el.append(children);
        }

        return this.el;
    }

    render() {}
}

export default Component;
