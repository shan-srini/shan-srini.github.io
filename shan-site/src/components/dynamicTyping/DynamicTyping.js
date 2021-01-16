import React, { useEffect, useState } from 'react'
import './DynamicTyping.css'

const DynamicTyping = ({ displayText }) => {
    const [timeoutEvent, setTimeoutEvent] = useState(null);
    const [forward, setForward] = useState(null);
    const [text, setText] = React.useState('');

    const updateText = () => {
        if (text.length === 0) {
            setTimeoutEvent(
                setTimeout(() => {
                    setText(displayText.slice(0, 1));
                    setForward(true);
                }, 2000)
            )
        }
        else if (forward && text.length === displayText.length) {
            setTimeoutEvent(
                setTimeout(() => {
                    setForward(false)
                }, 5000)
            )
        }
        else if (text.length > 0) {
            setTimeoutEvent(
                setTimeout(() => {
                    const index = forward ? text.length + 1 : text.length - 1;
                    setText(displayText.slice(0, index));
                }, 250)
            )
        }
    }

    useEffect(() => {
        updateText();
        return () => {
            timeoutEvent && clearTimeout(timeoutEvent)
        }
    }, [text, forward])

    return (
        <span className="dynamicTextContainer">{text}</span>
    )
}

export default DynamicTyping;