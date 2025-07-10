import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function DegreesContent() {
  const [activeIndex, setActiveIndex] = useState([0, 1]);

  return (
    <div
      className="w-full flex flex-col align-items-center justify-content-center text-black"
    >
    <div className="card" style={{ width: '90%', maxWidth: 1000 }}>
        <Accordion
        activeIndex={activeIndex}
        onTabChange={e => setActiveIndex(e.index)}
        className="bg-gray-800 text-900 border-round"
        >
        <AccordionTab
            header={
            <span className="text-900 flex align-items-center gap-2 w-full">
                <Avatar image="/img/ecole2600_logo.png" shape="square" />
                <span className="font-bold white-space-nowrap">Master&aposs in Cybersecurity</span>
                <Badge value="2022-2025" severity="info" className="ml-auto" />
            </span>
            }
        >
            <div className="m-0 text-left">
                <ul>
                    <li><span className="card-sub-menu">3rd Year Specialization in Red Team:</span> Advanced Offsec, mobile pentesting, red team intrusions, IoT and drone attacks, malware development, code auditing.</li>
                    <li><span className="card-sub-menu">Cybersecurity Expertise:</span> Social & reverse engineering, networks, web, forensics, defensive coding, IoT, blockchain, industrial cyber., Android.</li>
                    <li><span className="card-sub-menu">IT Knowledge:</span> Microprocessors & architectures, assembly language, OS, data structures and databases, applied mathematics.</li>
                    <li><span className="card-sub-menu">Risk Management:</span> Cyber law, geopolitics, communication, risk analysis.</li>
                </ul>
            </div>
        </AccordionTab>

        <AccordionTab
            header={
            <span className="text-900 flex align-items-center gap-2 w-full">
                <Avatar image="/img/uca_logo.png" shape="square" />
                <span className="font-bold white-space-nowrap">Bachelor in Computer Science</span>
                <Badge value="2020-2022" severity="info" className="ml-auto" />
            </span>
            }
        >
            <div className="m-0 text-left">
                <ul>
                    <li><span className="card-sub-menu">Programming Skills:</span> C/C++, C#, .NET, Java, web frontend and backend (HTML, CSS, JavaScript, PHP), Python, SQL databases, data structures, network and system administration, design patterns, IT law, communication, UML.</li>
                    <li><span className="card-sub-menu">End-of-studies internship at OCCE:</span> Website development in PHP + MVC arch.</li>
                    <li><span className="card-sub-menu">Mobility Experience:</span> 4-month exchange at the University of Quebec in Chicoutimi (Canada) → courses in application security, Android app development, C++ programming for UE4, and collaboration with a design team.</li>
                </ul>
            </div>
        </AccordionTab>
        </Accordion>
    </div>
    </div>
  );
}
