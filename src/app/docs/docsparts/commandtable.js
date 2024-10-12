import CopyBox from "@/app/components/copybox";
import { commands } from "./commands";

export default function CommandsTable(){

    function makeTable(){
        return commands.map((command, index) => {
            return (
                <tr key={index} className="text-gray-800 p-4 border-black ">
                    <td className="border p-2">
                        {command.command}
                    </td>
                    <td className="border p-2">
                        {command.description}
                    </td>
                    <td className="border p-2">
                        <CopyBox value={command.request} />
                    </td>
                    <td className="border p-2">
                        {command.response}
                    </td>
                    <td className="border p-2">
                        {command.introduced}
                    </td>
                </tr>
            );
        });
    }

    return(
        <table className="w-full table-auto commandstable">
            <thead className="text-left bg-gray-200">
                <tr className="text-gray-800">
                    <th className="p-2 border-black">Command</th>
                    <th className="p-2 border-black">Description</th>
                    <th className="p-2 border-black">Request</th>
                    <th className="p-2 border-black">Response</th>
                    <th className="p-2 border-black">Introduced</th>
                </tr>
            </thead>
            <tbody>
                {makeTable()}
            </tbody>
        </table>
    );
}