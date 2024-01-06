import { useEffect, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

function Particle() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        line_linked: {
                            enable: false,
                            opacity: 0.03,
                        },
                        move: {
                            direction: "right",
                            speed: 0.05,
                        },
                        size: {
                            value: 1,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.05,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
        );
    }

    return <></>;
}

export default Particle;
