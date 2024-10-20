import Image from "next/image";

import speedPic from "./public/speed.webp";
import integrationPic from "./public/integration.webp";
import opensourcePic from "./public/opensource.webp";


export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-gray-900 py-24">
        <div className="container mx-auto items-center justify-between">
          <h1 className="text-3xl md:text-5xl extra-bold md:px-0 px-8 md:leading-relaxed text-white">
            A <span className="text-amber-500">blazing fast</span> and open-source <br/>
            in-memory storage with <br/>
            <span className="text-amber-500">nanosecond</span> response for <span className="text-amber-500">your</span> project
          </h1>
          <div className="flex gap-4 mt-8 md:mt-12 items-center">
            <a href="/docs#install" className="text-lg font-bold text-gray-900 hover:underline mr-6 bg-amber-500 px-5 py-2">
              Installation Guide
            </a>
            <a href="/docs" className="text-lg font-bold text-amber-500 hover:underline ml-6">
              Documentation
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full my-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
            <div className="w-full p-4">
              <div className="flex items-center justify-center h-full">
                <Image src={speedPic} alt="This image displays a high speed, which is a metaphor for Tetroflow's speed."/>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="flex items-center justify-center h-full">
                <div>
                  <h2 className="text-3xl extra-bold text-gray-900">
                    Blazingly <span className="text-amber-500">fast</span>
                  </h2>
                  <div className="text-gray-900">
                    <p className="mt-3"><span className="text-amber-500">Tetroflow</span> is built in modern <span className="text-amber-500">C++</span> for <span className="text-amber-500">nanosecond</span> response times, using in-memory storage and a specialized <span className="text-amber-500">hashmap</span> to handle data types like lists, strings, etc. with ease.</p>
                    <p className="mt-3">Despite its power, the executable is <span className="text-amber-500">under a megabyte</span>, lightweight, and relies solely on the POSIX C++ and STL with <span className="text-amber-500">no external libraries</span> required.</p>
                    <p className="mt-3"><span className="text-amber-500">Tetroflow</span> delivers both speed and efficiency, making it ideal for <span className="text-amber-500">high-performance</span> environments.</p>
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
                    Easy <span className="text-amber-500">Integration</span>
                  </h2>
                  <div className="text-gray-900">
                    <p className="mt-3"><span className="text-amber-500">Tetroflow</span> is designed for effortless integration into <span className="text-amber-500">any environment.</span></p>
                    <p className="mt-3">With its simple and straightforward <span className="text-amber-500">JSON interface</span> for all commands, it’s easy to interact with from any client.</p>
                    <p className="mt-3">Accessible over a Unix socket, <span className="text-amber-500">Tetroflow</span> eliminates the need for complex security configurations while still ensuring seamless communication.</p>
                    <p className="mt-3">Whether you&lsquo;re working with <span className="text-amber-500">local or distributed</span> systems, <span className="text-amber-500">Tetroflow</span> can be easily plugged into your existing setup, delivering high performance without the hassle.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 order-1 md:order-2">
              <div className="flex items-center justify-center h-full">
                <Image src={integrationPic} alt="This image dshows, that Tetroflow can be easily integrated into any environment."/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
            <div className="w-full p-4">
              <div className="flex items-center justify-center h-full">
                <Image src={opensourcePic} alt="This image shows, that Tetroflow is open-source and customizable."/>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="flex items-center justify-center h-full">
                <div>
                  <h2 className="text-3xl extra-bold text-gray-900">
                    Open-Source and  <span className="text-amber-500">Customizable</span>
                  </h2>
                  <div className="text-gray-900">
                    <p className="mt-3"><span className="text-amber-500">Tetroflow</span> is fully <span className="text-amber-500">open-source</span>, giving you complete control to adjust and optimize it for any system or use case. </p>
                    <p className="mt-3">Its flexible design allows developers to adapt it to their specific requirements, making it a <span className="text-amber-500">powerful solution </span>for a wide range of applications.</p>
                    <p className="mt-3">Whether you&lsquo;re looking to tweak performance or add new features, <span className="text-amber-500">Tetroflow</span> offers the freedom and transparency to make it your own.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
