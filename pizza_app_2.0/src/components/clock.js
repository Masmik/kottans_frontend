import {Component} from './';
import {bindAll, realTimeClock} from '../utils';
import './clock.scss';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('timeBlock');
    }


    render() {
        let onLineTime = realTimeClock();

        return `<i class="fa fa-clock-o" aria-hidden="true"></i>
                <time class="time">${onLineTime}</time>`;
    }

}

export default Clock;
