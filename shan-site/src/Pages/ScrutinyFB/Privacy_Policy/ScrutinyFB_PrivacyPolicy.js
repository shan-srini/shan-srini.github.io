import React, { Component } from 'react'
import './PrivacyPolicy.css'

class ScrutinyFBPrivacyPolicy extends Component {

    FadeInSection(props) {
        const [isVisible, setVisible] = React.useState(false);
        const domRef = React.useRef();
        React.useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            });
            observer.observe(domRef.current);
        }, []);
        return (
            <div
                className={`section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}
            >
                {props.children}
            </div>
        );
    }

    render() {
        return (
            <div className={"PrivacyPolicy"}>
                <h1 className="HeadingContainer">
                    PRIVACY POLICY
                </h1>
                <div className="PrivacyPolicyTextContainer">
                    <this.FadeInSection>
                        <p className={"PrivacyPolicyText"}>
                            ScrutinyFB DOES NOT store any user data whatsoever. We have no intent or even capability to do so.
                        </p>
                    </this.FadeInSection>
                </div>
            </div>
        )
    }
}

export default ScrutinyFBPrivacyPolicy;