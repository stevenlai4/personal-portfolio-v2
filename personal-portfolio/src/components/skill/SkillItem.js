import React from 'react';
import '../../style/skillitem.scss';

export default function SkillItem(props) {
    const addSkillFlip = () => {
        const skillCircles = document.querySelectorAll('.skill-circle');
        skillCircles.forEach((skillCircle) => {
            skillCircle.classList.add('flipping');
        });
    };

    const removeSkillFlip = () => {
        const skillCircles = document.querySelectorAll('.skill-circle');
        skillCircles.forEach((skillCircle) => {
            skillCircle.classList.remove('flipping');
        });
    };

    return (
        <div className="skill-item">
            <div
                className="skill-circle"
                onMouseOver={addSkillFlip}
                onMouseOut={removeSkillFlip}
            >
                <div className="skill-front">
                    <img
                        width="60"
                        height="60"
                        src={props.itemInfo.image}
                        alt={props.item}
                    />
                </div>
                <div className="skill-back">
                    <p className="skill-percentage">
                        {props.itemInfo.percentage}%
                    </p>
                </div>
            </div>

            <p className="text-center">{props.item}</p>
        </div>
    );
}
