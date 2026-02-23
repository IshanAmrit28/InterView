import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // Generate gradient orbs
    const orbs = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        size: Math.random() * 400 + 300, // 300-700px
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 20 + 30, // 30-50s
    }));

    // Generate floating particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2, // 2-6px
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 15 + 20, // 20-35s
        opacity: Math.random() * 0.4 + 0.2 // 0.2-0.6
    }));

    // Generate mesh grid lines
    const gridLines = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        position: (i / 11) * 100, // Evenly spaced
        delay: i * 0.5,
    }));

    return (
        <div className="animated-background">
            {/* Gradient Mesh Background */}
            <div className="gradient-mesh">
                {orbs.map((orb) => (
                    <div
                        key={`orb-${orb.id}`}
                        className="gradient-orb"
                        style={{
                            width: `${orb.size}px`,
                            height: `${orb.size}px`,
                            left: `${orb.left}%`,
                            top: `${orb.top}%`,
                            animationDelay: `${orb.delay}s`,
                            animationDuration: `${orb.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating Particles */}
            <div className="particles-layer">
                {particles.map((particle) => (
                    <div
                        key={`particle-${particle.id}`}
                        className="particle"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                            opacity: particle.opacity
                        }}
                    />
                ))}
            </div>

            {/* Shadow Birds Layer - Water Flow Pattern */}
            <div className="birds-layer">
                {/* Staggered timing for smooth continuous flow */}
                {[...Array(100)].map((_, i) => {
                    // Create waves of birds for smooth flow
                    const wave = Math.floor(i / 10); // 10 birds per wave
                    const positionInWave = i % 10;

                    return (
                        <div
                            key={`bird-${i}`}
                            className="shadow-bird"
                            style={{
                                top: `${(positionInWave * 8) + (wave * 2) + 5}%`, // Diagonal pattern
                                '--bird-scale': 0.5 + (positionInWave * 0.05),
                                '--bird-delay': `${(wave * 5) + (positionInWave * 0.5)}s`, // Smooth stagger
                                '--bird-duration': `${40 + (wave * 2)}s`, // Consistent speeds per wave
                                '--flap-duration': `${0.5 + (positionInWave * 0.05)}s`,
                                '--bob-duration': `${3 + (positionInWave * 0.2)}s`,
                                opacity: 0.3 + (positionInWave * 0.03)
                            }}
                        >
                            <div className="bird-body"></div>
                            <div className="bird-wing-left"></div>
                            <div className="bird-wing-right"></div>
                        </div>
                    );
                })}
            </div>

            {/* Animated Grid Lines */}
            <div className="grid-lines">
                {gridLines.map((line) => (
                    <React.Fragment key={`line-${line.id}`}>
                        <div
                            className="grid-line horizontal"
                            style={{
                                top: `${line.position}%`,
                                animationDelay: `${line.delay}s`,
                            }}
                        />
                        <div
                            className="grid-line vertical"
                            style={{
                                left: `${line.position}%`,
                                animationDelay: `${line.delay + 0.25}s`,
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>

            {/* Radial Gradient Overlay */}
            <div className="radial-overlay" />
        </div>
    );
};

export default AnimatedBackground;
