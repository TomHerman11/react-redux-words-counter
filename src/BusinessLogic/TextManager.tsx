import React, { useState } from 'react';

import './TextManager.css';

function TextManager() {
    const [text, setText] = useState('Hi! Happy typing :)');

    const textChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }

    return (
        <div className="TextManager">
            <textarea value={text} onChange={textChanged} autoFocus />
        </div>
    );
}

export default TextManager;
