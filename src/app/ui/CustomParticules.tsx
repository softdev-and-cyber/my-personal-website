'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export default function CustomParticules() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadTrianglesPreset(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => ({
    preset: "triangles",
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    detectRetina: true,
    particles: {
      move: { speed: 1.2 },
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
    },
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
}