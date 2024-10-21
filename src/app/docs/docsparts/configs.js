import CodeBlock from "@/app/components/codeblock";
import CopyBox from "@/app/components/copybox";
import FileBlock from "@/app/components/fileblock";

export default function Configs(){
    return (
        <div>
            <h3 className="text-xl font-bold">Configuration</h3>
            <div className="text-gray-500 my-4">
                Tetroflow has a flexible coniguration system. By default it loads a config file from
                the same folder <CodeBlock>tetroflow.cfg</CodeBlock>. You can specify a different config file
                as a first argument when starting the server. <br/>Example: <CodeBlock>./tetroflow /var/path_to_my_config.cfg</CodeBlock>
                <br/>
                A simple config file looks like this:
                <FileBlock>
                    ;this is a default configuration file for your tetroflow server<br/>
                    <br/>
                    socket= /tmp/tetroflow.sock<br/>
                    <br/>
                    replicateListen= 127.0.0.1:2732<br/>
                    <br/>
                    replicateConnect= replicatedomain.com:2732, replicatedomain.com:2733, replicatedomain.com:2734<br/>
                    <br/>
                    tableReserveSize= 1000
                </FileBlock>
                <br/>
                The following options are available:
                <ul className="list-disc ml-6 space-y-2">
                    <li><CodeBlock>socket</CodeBlock> - the path to the Unix socket file. Default is <CodeBlock>/tmp/tetroflow.sock</CodeBlock></li>
                    <li><CodeBlock>replicateListen</CodeBlock> - the IP and port to listen for replication connections. Default is </li>
                    <li><CodeBlock>replicateConnect</CodeBlock> - the list of IP and ports of nodes to connect to for replication. (the current node&apos;s IP and port for replication are in replicateListen)</li>
                    <li><CodeBlock>tableReserveSize</CodeBlock> - the size of the hash table. Default is 1000</li>
                </ul>
            </div>
        </div>
    );
}