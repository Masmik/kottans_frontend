import { Component } from './';
import { bindAll, realTimeClock } from '../utils';
import './clock.scss';

class Clock extends Component {
    constructor(props) {
        super(props);
        bindAll(this, 'updateTime');
        this.el = document.createElement('div');
        this.el.classList.add('timeBlock');

        setInterval(this.updateTime, 1000)
    }

    updateTime() {
        var timeEl = this.el.querySelector('.time');
        if (!timeEl) {
            return;
        }
        timeEl.textContent = realTimeClock();
    }

    render() {
        var curTime = realTimeClock();

        return `<i class="fa fa-clock-o" aria-hidden="true"></i>
                <time class="time">${curTime}</time>`;
    }

}

export default Clock;
