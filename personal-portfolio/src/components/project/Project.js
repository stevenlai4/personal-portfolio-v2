import React, { useState, useEffect } from 'react';
import ProjectCategory from './ProjectCategory';
import ProjectItem from './ProjectItem';
import { projects, projectCategory } from '../../data/project-data';
import '../../style/project.scss';

export default function Project(props) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filterProject, setFilterProject] = useState(projects);

    const handleFilterProject = () => {
        if (selectedCategory === 'All') {
            setFilterProject(projects);
        } else {
            const filteredProject = projects.filter((p) =>
                p.category.includes(selectedCategory)
            );

            setFilterProject(filteredProject);
        }
    };
    useEffect(() => {
        handleFilterProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory]);

    const createProjectModal = (project, i) => {
        return <ProjectItem key={i} theme={props.theme} project={project} />;
    };

    return (
        <section className="project container">
            <h1>PROJECTS</h1>
            <div className="project-category-container">
                <ProjectCategory
                    selectedCategory={selectedCategory}
                    categories={projectCategory}
                    onSetCatSelection={setSelectedCategory}
                />
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 project-container">
                {filterProject.map(createProjectModal)}
            </div>
        </section>
    );
}