import CodeBlock from "@/app/components/codeblock";

export default function Datatypes(){
    return (
        <div id="datatypes">
            <h3 className="text-xl font-bold">Data types</h3>
            <div className="text-gray-500 my-1">
                As mentioned earlier, Tetroflow is a key-value store. It supports a variety of data types, but unlike other key-value stores, for example Redis, it has a &quot;stromgly typed&quot; approach to data storage.
                This means that each key-value pair is stored as a specific data type, thus cannont be suddenly handled as another type.
                Instead, you first have to cast the data to the desired type before using it.
                <br/>
                To ensure starage compatability over all Datatypes, they all share a common interface <CodeBlock>DataType</CodeBlock> which is defined in <CodeBlock>src/datatypes/Datatype.hpp</CodeBlock> header file.
                <br/>
                Service data types, like <CodeBlock>Error</CodeBlock> are defined aswell, but are not intended for direct use, also our apporoach does not encurage the use of any standart pointers,
                instead we use <CodeBlock>std::shared_ptr&lt;DataType&gt;</CodeBlock> to ensure proper memory management and additional functionality. All transmitions and variable passing are
                also done using shared pointers with a <CodeBlock>std::static_pointer_cast&lt;DataType&gt;</CodeBlock> cast if needed.
                <br/>
                <br/>
                The following are the main data types supported by Tetroflow:
            </div>
            <div className="my-6" id="datatype-strings">
                <p className="text-gray-500 text-lg font-bold">1. Strings</p>
                <div className="text-gray-500 my-1">
                    Strings are one of the basic data types in tetroflow. They are stored as <CodeBlock>std::string</CodeBlock>, with a custom wrapper <CodeBlock>String</CodeBlock> to provide additional functionality, 
                    which is defined in <CodeBlock>src/datatypes/String.hpp</CodeBlock> header file.<br/>
                </div>
            </div>
            <div className="my-6" id="datatype-integers">
                <p className="text-gray-500 text-lg font-bold">2. Integers</p>
                <div className="text-gray-500 my-1">
                    Integers are stored as <CodeBlock>int64_t</CodeBlock> and are wrapped in a <CodeBlock>Integer</CodeBlock> class, which is defined in <CodeBlock>src/datatypes/Integer.hpp</CodeBlock> header file.<br/>
                    Integers can be stored as 64-bit signed integers.<br/>
                </div>
            </div>
            <div className="my-6" id="datatype-floats">
                <p className="text-gray-500 text-lg font-bold">3. Floats</p>
                <div className="text-gray-500 my-1">
                    Floats are stored as <CodeBlock>double</CodeBlock> and are wrapped in a <CodeBlock>Float</CodeBlock> class, which is defined in <CodeBlock>src/datatypes/Float.hpp</CodeBlock> header file.<br/>
                </div>
            </div>
            <div className="my-6" id="datatype-bools">
                <p className="text-gray-500 text-lg font-bold">4. Booleans</p>
                <div className="text-gray-500 my-1">
                    Booleans are stored as <CodeBlock>bool</CodeBlock> and are wrapped in a <CodeBlock>Boolean</CodeBlock> class, which is defined in <CodeBlock>src/datatypes/Boolean.hpp</CodeBlock> header file.<br/>
                </div>
            </div>
            <div className="my-6" id="datatype-geo">
                <p className="text-gray-500 text-lg font-bold">5. Geospatial data</p>
                <div className="text-gray-500 my-1">
                    Geospatial data is stored as 2 floats, representing latitude and longitude, and are wrapped in a <CodeBlock>Geolocation</CodeBlock> class, which is defined in <CodeBlock>src/datatypes/Geolocation.hpp</CodeBlock> header file.<br/>
                    Requesting a geolocation with a <CodeBlock>GET</CodeBlock> command will return a json object with <CodeBlock>{'{'}&quot;latitude&quot;: 1.0, &quot;longitude&quot;: 2.0{'}'}</CodeBlock>.<br/>
                </div>
            </div>
            <div className="my-6" id="datatype-lists">
                <p className="text-gray-500 text-lg font-bold">6. Lists</p>
                <div className="text-gray-500 my-1">
                    Lists are stored as <CodeBlock>std::list&lt;std::shared_ptr&lt;DataType&gt;&gt;</CodeBlock> and are wrapped in a <CodeBlock>List</CodeBlock> class, which is defined in <CodeBlock>src/datatypes/List.hpp</CodeBlock> header file.<br/>
                    Lists are the default fata type to parse JSON arrays, like <CodeBlock>[1, 2, 3]</CodeBlock> or <CodeBlock>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</CodeBlock>, because unfortunately, JSON does not have a native set type.<br/>
                    They are parsed recursively, so any element of the list is guaranteed to be a <CodeBlock>std::shared_ptr&lt;DataType&gt;</CodeBlock> object,
                    thus making it possible to (unlike in Redis) store any data type in a list (even different ones, like <CodeBlock>[&quot;a&quot;, 1, 2.5, []]</CodeBlock>) including other lists etc.<br/>
                    A constrcustion of storing a list of sets of list of other types is possible.<br/>
                    To convert list to other types, you can use the <CodeBlock>CAST</CodeBlock> command, which is described in the <a href="/docs#commands" className="text-amber-500 hover:underline">Commands</a> section.<br/>
                </div>
            </div>
            <div className="my-6" id="datatype-sets">
                <p className="text-gray-500 text-lg font-bold">7. Sets</p>
                <div className="text-gray-500 my-1">
                    Sets are stored as <CodeBlock>std::set&lt;std::shared_ptr&lt;DataType&gt;&gt;</CodeBlock> and are wrapped in a <CodeBlock>Set</CodeBlock> class, which is defined in <CodeBlock>src/datatypes/Set.hpp</CodeBlock> header file.<br/>
                    They are pretty similar to lists, but they do not allow duplicates. Requesting a set with a <CodeBlock>GET</CodeBlock> command will return a json array with unique elements.<br/>
                </div>
            </div>
        </div>
    );
}