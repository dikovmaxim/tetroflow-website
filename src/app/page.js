import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <div className="flex bg-gray-900 py-24">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl md:text-5xl extra-bold md:px-0 px-8 md:leading-relaxed text-white">
            A <span className="text-amber-500">blazing fast</span> and open-source <br/>
            in-memory storage with <br/>
            <span className="text-amber-500">nanosecond</span> response for <span className="text-amber-500">your</span> project
          </h1>
        </div>
      </div>
      <div className="container mx-auto w-full my-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
            <div className="w-full bg-gray-700 p-4">
              <div className="flex items-center justify-center h-full">
                <Image src="/favicon.ico" alt="Centered Image" width={200} height={200} />
              </div>
            </div>
            <div className="w-full p-4">
              <div className="flex items-center justify-center h-full">
                <div>
                  <h2 className="text-3xl extra-bold text-gray-900">
                    Blazingly <span className="text-amber-500">fast</span>
                  </h2>
                  <div className="text-gray-900">
                    <p className="mt-3"><span className="text-amber-500">Tetrocache</span> is built in modern <span className="text-amber-500">C++</span> for <span className="text-amber-500">nanosecond</span> response times, using in-memory storage and a specialized <span className="text-amber-500">hashmap</span> to handle data types like lists, strings, floats, and integers with ease.</p>
                    <p className="mt-3">Despite its power, the executable is <span className="text-amber-500">under a megabyte</span>, lightweight, and relies solely on the POSIX C++ and STL with <span className="text-amber-500">no external libraries</span> required.</p>
                    <p className="mt-3"><span className="text-amber-500">Tetrocache</span> delivers both speed and efficiency, making it ideal for <span className="text-amber-500">high-performance</span> environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
            <div className="w-full p-4 order-2 md:order-1">
              <div className="flex items-center justify-center h-full">
                <div>
                  <h2 className="text-3xl extra-bold text-gray-900">
                    Blazingly <span className="text-amber-500">fast</span>
                  </h2>
                  <div className="text-gray-900">
                    <p className="mt-3"><span className="text-amber-500">Tetrocache</span> is built in modern <span className="text-amber-500">C++</span> for <span className="text-amber-500">nanosecond</span> response times, using in-memory storage and a specialized <span className="text-amber-500">hashmap</span> to handle data types like lists, strings, floats, and integers with ease.</p>
                    <p className="mt-3">Despite its power, the executable is <span className="text-amber-500">under a megabyte</span>, lightweight, and relies solely on the POSIX C++ and STL with <span className="text-amber-500">no external libraries</span> required.</p>
                    <p className="mt-3"><span className="text-amber-500">Tetrocache</span> delivers both speed and efficiency, making it ideal for <span className="text-amber-500">high-performance</span> environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-700 p-4 order-1 md:order-2">
              <div className="flex items-center justify-center h-full">
                <Image src="/favicon.ico" alt="Centered Image" width={200} height={200} />
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
