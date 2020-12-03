import React from 'react';
import moment from 'moment';
import DateTime from './DateTime';

const withPretty = () => Component => class extends React.Component {

    
    render() {
    const it = moment(this.props.date).fromNow();
        return <Component {...this.props} date={it} />;}
}

const DateTimePretty = withPretty()(DateTime);

export default DateTimePretty;
