import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../style/contact.scss';

export default function Contact(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div
            id="contact"
            className={`contact container fade-in ${inView ? 'appear' : ''}`}
            ref={ref}
        >
            <h1>CONTACT</h1>
            <form
                action="mailto:steven_lai4@hotmail.com"
                method="post"
                encType="text/plain"
            >
                <div className="form-group name-form-group">
                    <input
                        id="name"
                        name="name"
                        autoComplete="off"
                        type="text"
                        style={{
                            color: props.theme === 'light' ? '#000' : '#fff',
                        }}
                        required
                    />
                    <label
                        className="label-name"
                        htmlFor="name"
                        style={{
                            borderBottom:
                                props.theme === 'light'
                                    ? '1px solid #000'
                                    : '1px solid #fff',
                        }}
                    >
                        <span className="name-content">Name</span>
                    </label>
                </div>
                <div className="form-group email-form-group">
                    <input
                        id="email"
                        name="email"
                        autoComplete="off"
                        type="email"
                        style={{
                            color: props.theme === 'light' ? '#000' : '#fff',
                        }}
                        required
                    />
                    <label
                        className="label-email"
                        htmlFor="email"
                        style={{
                            borderBottom:
                                props.theme === 'light'
                                    ? '1px solid #000'
                                    : '1px solid #fff',
                        }}
                    >
                        <span className="email-content">Email</span>
                    </label>
                </div>
                <div className="form-group message-form-group">
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        style={{
                            color: props.theme === 'light' ? '#000' : '#fff',
                        }}
                        required
                    ></textarea>
                    <label
                        className="label-message"
                        htmlFor="message"
                        style={{
                            borderBottom:
                                props.theme === 'light'
                                    ? '1px solid #000'
                                    : '1px solid #fff',
                        }}
                    >
                        <span className="message-content">Message</span>
                    </label>
                </div>
                <input
                    className="contact-submit"
                    type="submit"
                    value="SUBMIT"
                />
            </form>
        </div>
    );
}
