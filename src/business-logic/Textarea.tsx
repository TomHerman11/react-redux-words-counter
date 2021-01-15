import { useState } from 'react';
import { connect } from 'react-redux';
import { textChanged as textChangedActionDispatcher } from '../redux/actions';

import './Textarea.css';

function Textarea({ textChangedActionDispatcher }: { textChangedActionDispatcher: (text: string) => unknown }) {
    const [text, setText] = useState('');

    const textChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        // dispatch a redux action with the new text as payload:
        textChangedActionDispatcher(event.target.value);
    }

    return (
        <div className="Textarea">
            <textarea
                value={text}
                onChange={textChanged}
                placeholder='Happy typing!'
                autoFocus />
        </div>
    );
}

// pass 'null' as we don't consume data from the redux state
export default connect(null, { textChangedActionDispatcher })(Textarea);
