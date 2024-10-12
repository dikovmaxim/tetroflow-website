'use client'

export default function CopyBox(props) {

    let value = props.value;

    function copyToClipboard() {
        navigator.clipboard.writeText(value);
    }

    return (
        <div className="copy-box bg-gray-200 p-1 px-2 rounded cursor-pointer hover:bg-gray-300"
        onClick={copyToClipboard}>
            <p>
                {value}
            </p>
        </div>
    )
}