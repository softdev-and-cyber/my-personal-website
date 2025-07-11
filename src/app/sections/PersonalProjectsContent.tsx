import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { allProjects } from '@/data/allProjects';

export default function PersonalProjectsContent() {
  return (
    <div className="m-auto text-white max-w-screen-lg text-justify px-4">
      <div className="grid p-0 md:p-5 align-stretch">
        {allProjects.map((project, index) => (
          <div key={index} className="col-12 md:col-12 lg:col-6 xl:col-4 flex">
            <Card
              title={project.label}
              subTitle={project.subtitle}
              header={
                <img alt={project.label} src={project.image} />
              }
              footer={
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button label="Go to project" icon="pi pi-arrow-up-right" />
                </a>
              }
              className="w-12"
            >
              <p className="m-0">{project.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
