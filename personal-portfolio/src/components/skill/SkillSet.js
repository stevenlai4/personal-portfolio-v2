import React from 'react';
import SkillItem from './SkillItem';
import '../../style/skillset.scss';

export default function SkillSet(props) {
    const createSkillItem = (item, index) => {
        return (
            <SkillItem
                key={index}
                item={item}
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
