import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import '../../style/project-item.scss';
import LazyLoad from 'react-lazyload';
import { useInView } from 'react-intersection-observer';

export default function ProjectItem(props) {
    const [showModal, setShowModal] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <div className="project-item">
            <div
                className={`project-card fade-in ${inView ? 'appear' : ''}`}
                style={{ transitionDelay: `${props.delay}s` }}
                ref={ref}
            >
                <LazyLoad height={300} offset={100}>
                    <img src={props.project.image} alt={props.project.name} />
                </LazyLoad>
                <div
                    className="project-card-body"
                    style={{
                        backgroundColor:
                            props.theme === 'light' ? '#fff' : '#181818',
                    }}
                >
                    <h2>{props.project.name}</h2>
                    <small>
                        {props.project.language.map((l, i) =>
                            i !== props.project.language.length - 1
                                ? `${l}, `
                                : l
                        )}
                    </small>
                    <div className="project-info-btn">
                        <button onClick={handleShowModal}>More Info</button>
                    </div>
                </div>
            </div>
            {showModal ? (
                <div className="modal-background">
                    <ProjectModal
                        project={props.project}
                        setShowModal={setShowModal}
                    />
                </div>
            ) : null}
        </div>
    );
}
