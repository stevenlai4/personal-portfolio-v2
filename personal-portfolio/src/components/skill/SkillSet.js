import React, { useState } from 'react';
import SkillItem from './SkillItem';
import '../../style/skillset.scss';

export default function SkillSet(props) {
    var delay = 0;

    const createSkillItem = (item, index) => {
        delay += 0.25;

        return (
            <SkillItem
                key={index}
                item={item}
                delay={delay}
                direction={props.direction}
                itemInfo={props.itemInfo[index]}
            />
        );
    };

    return (
        <div className="skill-set">
            <h3>{props.name}</h3>
            <div>{props.items.map(createSkillItem)}</div>
        </div>
    );
}
