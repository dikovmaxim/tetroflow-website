import React from 'react';

export default function CodeBlock({children }) {
    return (
        <span className="code-block bg-gray-200 px-2 py-1 rounded">
            {children}
        </span>
    );
}
