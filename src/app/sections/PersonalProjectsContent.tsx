import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { allProjects } from '@/data/allProjects';
import Image from 'next/image';

export default function PersonalProjectsContent() {
  return (
    <div className="m-auto text-white max-w-screen-lg text-justify px-4">
      <div className="grid align-stretch">
        {allProjects.map((project, index) => (
          <div key={index} className="col-12 md:col-6 flex">
            <Card
              title={project.label}
              subTitle={project.subtitle}
              header={<Image alt={project.label} src={project.image} />}
              footer={
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button label="Go to project" icon="pi pi-arrow-up-right" />
                </a>
              }
              className="w-full"
            >
              <p className="m-0">{project.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
