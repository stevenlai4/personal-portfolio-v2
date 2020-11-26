import React from 'react';
import SkillSet from './SkillSet';
import skills from '../../data/skill-data';
import '../../style/skill.scss';

export default function Skill() {
    const createSkill = (skill, index) => {
        return (
            <SkillSet
                key={index}
                name={skill.name}
                items={skill.items}
                itemInfo={skill.itemInfo}
            />
        );
    };

    return (
        <section id="skill" className="skill container">
            <h1>SKILLS</h1>

            <div className="row row-cols-md-2 row-cols-1">
                {skills.map(createSkill)}
            </div>
        </section>
    );
}
