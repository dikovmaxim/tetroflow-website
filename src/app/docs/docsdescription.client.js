'use client';

export default function DocsDescription() {
  return (
        <div className="overflow-y-auto border-r border-gray-200">
            <div className="p-4">
                <ul className="text-gray-900 list-disc">
                    <li>
                        <a href="/docs/#description" className="hover:underline font-bold">
                            General
                        </a>
                        <ul className="text-gray-500 list-disc ml-6">
                            <li>
                                <a href="/docs/#description" className="hover:underline">
                                    Description
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#features" className="hover:underline">
                                    Features 
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#architecture" className="hover:underline">
                                    Architecture
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/docs/#general" className="hover:underline font-bold">
                            Getting Started
                        </a>
                        <ul className="text-gray-500 list-disc ml-6">
                            <li>
                                <a href="/docs/#systemrequirements" className="hover:underline">
                                    System Requirements
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#buildingfromsource" className="hover:underline">
                                    Building from source
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/docs/#commands" className="hover:underline font-bold">
                            Commands
                        </a>
                    </li>
                    <li>
                        <a href="/docs/#datatypes" className="hover:underline font-bold">
                            Data Types
                        </a>
                        <ul className="text-gray-500 list-disc ml-6">
                            <li>
                                <a href="/docs/#datatype-strings" className="hover:underline">
                                    Strings
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#datatype-integers" className="hover:underline">
                                    Integers
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#datatype-flaots" className="hover:underline">
                                    Floats
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#datatype-bools" className="hover:underline">
                                    Booleans
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#datatype-geo" className="hover:underline">
                                    Geospatial
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#datatype-lists" className="hover:underline">
                                    Lists
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#datatype-sets" className="hover:underline">
                                    Sets
                                </a>
                            </li>
                            <li>
                                <a href="/docs/#datatype-sortedsets" className="hover:underline">
                                    Sorted Sets
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
  );
}