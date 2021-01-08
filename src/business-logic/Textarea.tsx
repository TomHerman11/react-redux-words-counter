import { useState } from 'react';
import { connect } from 'react-redux';
import { textChanged as textChangedActionDispatcher } from '../redux/actions';

import './Textarea.css';

function Textarea({ textChangedActionDispatcher }: { textChangedActionDispatcher: (text: string) => unknown }) {
    const [text, setText] = useState('');

    const textChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);

        // dispatch a redux action:
        textChangedActionDispatcher(text);
    }

    return (
        <div className="Textarea">
            <textarea
                value={text}
                onChange={textChanged}
                placeholder='Hi! Happy typing :)'
                autoFocus />
        </div>
    );
}

export default connect(null, { textChangedActionDispatcher })(Textarea);
