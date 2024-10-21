import React from 'react';

export default function FileBlock({ children }) {
    return (
        <pre className="code-block bg-gray-200 p-2 rounded">
            <code>
                {children}
            </code>
        </pre>
    );
}
