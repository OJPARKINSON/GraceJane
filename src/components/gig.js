import React from 'react';
import './layout.css';

const Gig =  props => (
<div className="gig">
    <h3>{props.dateNum}</h3>
    <div className="gigDate">
    <h3>{props.weekDay}<br/>{props.month}</h3>
    </div>
    <h3>{props.location}</h3>
    <span id="gig"><a href="https://www.songkick.com/concerts/35183634-grace-jane-at-boileroom">Tickets</a></span>
</div>
)

export default Gig