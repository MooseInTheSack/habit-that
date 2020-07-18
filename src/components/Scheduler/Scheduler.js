import React, { Component } from 'react';
import moment from 'moment';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './Scheduler.css';

const scheduler = window.scheduler;
 
export default class Scheduler extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.start_on_monday = false
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
 
        const { events } = this.props;
        const currentYearNumber = moment().year();
        const currentMonthNumber = moment().month();
        const currentDayOfMonth = moment().date();
        scheduler.init(this.schedulerContainer, new Date(currentYearNumber, currentMonthNumber, currentDayOfMonth));
        scheduler.clearAll();
        scheduler.parse(events);
    }
 
    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }
            ></div>
       );
    }
}