import { Component } from './';
import { bindAll } from '../utils';

class WeatherPlaceList extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'componentReceivedProps');
    }

    componentReceivedProps(props) {

    }


    render () {
        let html = '';
        return html;
    }

}

export default WeatherPlaceList;
