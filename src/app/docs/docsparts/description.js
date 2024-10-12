
export default function Description(){
    return (
        <div>
            <h2 className="text-2xl font-bold">Description</h2>
            <div className="text-gray-500 my-4">
                Tetracache is a high-performance, in-memory database built to deliver exceptional speed and efficiency.
                Written in modern C++, it responds within nanoseconds thanks to a specialized hashmap for data storage, allowing seamless handling of various data types like lists, strings, floats, and integers.
                The entire executable is under a megabyte, requiring no external libraries, which ensures lightweight deployment and minimal resource usage.
                Its straightforward JSON interface makes it incredibly easy to integrate with any system, and since it communicates over a Unix socket, there’s no need for complex security setups.
                Tetracache is fully open-source, giving developers complete control to customize and adapt it for their unique needs.
                Whether optimizing performance or adding new features, the flexibility of Tetracache allows for adjustments to fit any specific use case.
                Combining speed, simplicity, and customization, Tetracache is the ideal solution for high-performance, in-memory data management in any environment.
            </div>
        </div>
    );
}