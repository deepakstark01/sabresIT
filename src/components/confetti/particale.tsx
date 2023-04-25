import React, { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Particle1(props: unknown) {
  const optionsForParticles = {
  
    background: {
      color: {
        value: '#000',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        // onClick: {
        //   enable: true,
        //   mode: 'push',
        // },
        // onHover: {
        //   enable: true,
        //   mode: 'repulse',
        // },
        resize: true,
      },
      // modes: {
      //   push: {
      //     quantity: 4,
      //   },
      //   repulse: {
      //     distance: 200,
      //     duration: 0.4,
      //   },
      // },
    },
    particles: {
      color: {
        value: ['#4287f5', '#eff542'],
      },
      // links: {
      //   color: '#ffffff',
      //   distance: 150,
      //   enable: true,
      //   opacity: 0.5,
      //   width: 1,
      // },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'random',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      // @ts-ignore
      options={optionsForParticles}
    />
  );
}
