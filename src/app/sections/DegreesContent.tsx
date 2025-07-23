'use client';

import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function DegreesContent() {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  return (
    <div className="w-full flex flex-column align-items-center justify-content-center text-black px-2 sm:px-4">
      <div className="card w-full sm:w-11 md:w-9 lg:w-7 xl:w-6">
        <Accordion
          multiple
          activeIndex={activeIndex}
          onTabChange={(e) =>
            setActiveIndex(Array.isArray(e.index) ? e.index : [e.index])
          }
          className="bg-gray-800 border-round shadow-2"
        >
          <AccordionTab
            header={
              <span className="text-left flex align-items-center gap-3 w-full">
                <Avatar image="/img/ecole2600_logo.png" shape="square" size="large" className="hidden md:block" />
                <span className="font-bold text-sm sm:text-base md:text-lg">
                Master&apos;s in Cybersecurity
                </span>
                <Badge
                  value="2022-2025"
                  severity="info"
                  className="ml-auto hidden md:block"
                />
              </span>
            }
          >
            <div className="m-0 text-left text-sm sm:text-base line-height-3">
              <ul className="pl-3">
                <li>
                  <span className="font-semibold">3rd Year Specialization in Red Team:</span> Advanced Offsec, mobile pentesting, red team intrusions, IoT and drone attacks, malware development, code auditing.
                </li>
                <li>
                  <span className="font-semibold">Cybersecurity Expertise:</span> Social & reverse engineering, networks, web, forensics, defensive coding, IoT, blockchain, industrial cyber., Android.
                </li>
                <li>
                  <span className="font-semibold">IT Knowledge:</span> Microprocessors & architectures, assembly language, OS, data structures and databases, applied mathematics.
                </li>
                <li>
                  <span className="font-semibold">Risk Management:</span> Cyber law, geopolitics, communication, risk analysis.
                </li>
              </ul>
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="text-left flex align-items-center gap-3 w-full">
                <Avatar image="/img/uca_logo.png" shape="square" size="large" className="hidden md:block" />
                <span className="font-bold text-sm sm:text-base md:text-lg">
                  Bachelor in Computer Science
                </span>
                <Badge
                  value="2020-2022"
                  severity="info"
                  className="ml-auto hidden md:block"
                />
              </span>
            }
          >
            <div className="m-0 text-left text-sm sm:text-base line-height-3">
              <ul className="pl-3">
                <li>
                  <span className="font-semibold">Programming Skills:</span> C/C++, C#, .NET, Java, web frontend and backend (HTML, CSS, JavaScript, PHP), Python, SQL databases, data structures, network and system administration, design patterns, IT law, communication, UML.
                </li>
                <li>
                  <span className="font-semibold">End-of-studies internship at OCCE:</span> Website development in PHP + MVC arch.
                </li>
                <li>
                  <span className="font-semibold">Mobility Experience:</span> 4-month exchange at the University of Quebec in Chicoutimi (Canada) → courses in application security, Android app development, C++ programming for UE4, and collaboration with a design team.
                </li>
              </ul>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
}
