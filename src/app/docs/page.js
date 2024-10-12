'use client';
import { useState, useEffect } from 'react';
import DocsDescription from './docsdescription.client';
import CommandsTable from './docsparts/commandtable';
import Description from './docsparts/description';
import BuildingFromSource from './docsparts/buildingfromsource';
import SystemRequirements from './docsparts/systemrequirements';
import Datatypes from './docsparts/datatypes';

export default function Page(){

    return (
        <div className="pb-20">
            <div className="container mx-auto h-full">
                <div className="flex h-full">
                    {/* Adjust width to w-1/4 for better readability */}
                    <div className="w-1/4 h-screen sticky top-0 p-4"> 
                        <DocsDescription />
                    </div>
                    {/* Adjust right column width to compensate */}
                    <div className="w-3/4 ml-auto overflow-y-auto">
                        <div className="p-4 space-y-4">
                            <h2 className="text-3xl font-bold">
                                Documentation
                            </h2>
                            <span id="description"></span>
                            <Description />
                            <span id="systemrequirements"></span>
                            <SystemRequirements />
                            <span id="buildingfromsource"></span>
                            <BuildingFromSource />
                            <span id="commands"></span>
                            <CommandsTable />
                            <span id="datatypes"></span>
                            <Datatypes />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}