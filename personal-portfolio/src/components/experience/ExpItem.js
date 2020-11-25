import React from 'react';
import parse from 'html-react-parser';
import '../../style/experience-item.scss';

export default function ExpItem(props) {
    return (
        <div className="exp-item card">
            <div className="card-body">
                <h4 className="card-title">
                    <b>{props.filteredExp.title}</b>
                </h4>
                <div className="card-subtitle">
                    <p className="company">{props.filteredExp.company}</p>
                    <p className="date">
                        {`${props.filteredExp.start_month} ${props.filteredExp.start_year} - ${props.filteredExp.end_month} ${props.filteredExp.end_year}`}
                    </p>
                    <div className="card-text exp-description">
                        {parse(props.filteredExp.description)}
                    </div>
                </div>
            </div>
        </div>
    );
}