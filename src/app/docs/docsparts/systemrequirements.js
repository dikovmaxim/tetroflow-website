import CodeBlock from "@/app/components/codeblock";

export default function SystemRequirements(){
    return (
        <div>
            <h3 className="text-xl font-bold">System requirements</h3>
            <div className="text-gray-500 my-4">
                Tetroflow is a standalone application developed for POSIX-compliant systems.
                The following are the minimal system requirements to run Tetroflow:
                <ul className="list-disc ml-6">
                    <li>POSIX-compliant kernel (Linux, Unix, MacOS) or any other with <CodeBlock>mmap</CodeBlock> and <CodeBlock>fork</CodeBlock> support. Filesystem is optional :)</li>
                    <li>glibc 2.38 or higher (if using dynamically linked binaries)</li>
                    <li>64-bit architecture</li>
                    <li>250MB of RAM</li>
                    <li>1GHz processor</li>
                </ul>
            </div>
        </div>
    );
}