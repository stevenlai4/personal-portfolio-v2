import React from 'react';

export default function Separator(props) {
    return (
        <div className="container">
            <hr
                style={{
                    backgroundColor:
                        props.theme === 'dark' ? '#fff' : 'rgba(0,0,0,.2)',
                }}
            />
        </div>
    );
}
