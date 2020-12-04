import React from 'react';
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai';
import parser from 'html-react-parser';
import { MdWeb } from 'react-icons/md';
import '../../style/project-modal.scss';

export default function ProjectModal(props) {
    const handleCloseModal = () => {
        props.setShowModal(false);
    };

    return (
        <div className="project-modal">
            <i className="close" onClick={handleCloseModal}>
                <AiOutlineClose />
            </i>
            <img src={props.project.image} alt={props.project.name} />
            <div className="project-modal-content">
                <h2>{props.project.name}</h2>
                <p className="language">
                    {props.project.language.map((l, i) =>
                        i !== props.project.language.length - 1 ? `${l}, ` : l
                    )}
                </p>
                <p>{parser(props.project.description)}</p>
                <div className="project-btn-group">
                    <a
                        href={props.project.git}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i>
                            <AiFillGithub />
                        </i>
                        Github
                    </a>
                    {props.project.url ? (
                        <a
                            href={props.project.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i>
                                <MdWeb />
                            </i>
                            Website
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
