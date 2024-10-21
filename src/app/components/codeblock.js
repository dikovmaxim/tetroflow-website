import React from 'react';

const colorMap = {

    'int64_t': 'text-blue-600',
    'int32_t': 'text-blue-600',
    'int16_t': 'text-blue-600',
    'int8_t': 'text-blue-600',
    'uint64_t': 'text-blue-600',
    'uint32_t': 'text-blue-600',
    'uint16_t': 'text-blue-600',
    'uint8_t': 'text-blue-600',
    'std::shared_ptr': 'text-cyan-600',
    'std::list': 'text-cyan-600',
    'std::vector': 'text-cyan-600',
    'std::map': 'text-cyan-600',
    'std::unordered_map': 'text-cyan-600',
    'std::unordered_set': 'text-cyan-600',
    'std::static_pointer_cast': 'text-cyan-600',
    'std::set': 'text-cyan-600',
};

export default function CodeBlock({children }) {

    function colorizeCode(code) {
        // if code is not a string, return it as is
        if (typeof code !== 'string') {
            return code;
        }

        //code = code.replace(/(\/|src\/)[^\s]+/g, '<span class="text-red-900">$&</span>');

        // colorize keywords
        Object.keys(colorMap).forEach((key) => {
            code = code.replace(new RegExp(key, 'g'), `<span class="${colorMap[key]}">${key}</span>`);
        });

        // colorize file paths

        return <span dangerouslySetInnerHTML={{ __html: code }} />;
    }

    return (
        <span className="code-block bg-gray-200 px-2 py-1 rounded">
            {colorizeCode(children)}
        </span>
    );
}
