import CopyBox from "@/app/components/copybox";

export default function BuildingFromSource(){
    return (
        <div>
            <h3 className="text-xl font-bold">Building from source</h3>
            <p className="text-gray-500 my-4">
                Tetroflow, as mentioned, is an open-source project, thus can be buit directly from source or be customized, if needed.
            </p>
            <div className="text-gray-500 my-4">
                To build Tetroflow from source, you need to have the following dependencies installed: <br />
                <ul className="list-disc text-gray-500 ml-6">
                    <li>gcc & g++ (with C++ 20 support)</li>
                    <li>make</li>
                </ul>
                <h5 className="text-lg font-bold my-4">Steps to build:</h5>
                <ol className="list-decimal text-gray-500 ml-6 space-y-4">
                    <li>
                        Clone the repository: <code><CopyBox value="git clone https://github.com/dikovmaxim/tetroflow.git"/> </code>
                    </li>
                    <li>
                        Install the dependencies: <code><CopyBox value="sudo apt-get install g++ make"/> </code>
                    </li>
                    <li>
                        Build the project: <code><CopyBox value="make"/> </code>
                    </li>
                    <li>
                        Run the executable (from the root of the project):
                        <code><CopyBox value="./Tetroflow"/> </code>
                    </li>
                </ol>
                <p className="text-gray-500 my-4">
                    It is recommended to run the executable as a systemd service or a background process to ensure it runs continuously.
                </p>
            </div>
        </div>
    );
}