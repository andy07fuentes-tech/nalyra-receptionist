import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

gsap.registerPlugin(ScrollTrigger);


interface CubeProps {
    rotationProgress: number;
}

const Cube = ({ rotationProgress }: CubeProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();

    const textures = useTexture([
        '/images/cube/cube-1.jpg',
        '/images/cube/cube-2.jpg',
        '/images/cube/cube-3.jpg',
        '/images/cube/cube-4.jpg',
        '/images/cube/cube-5.jpg',
        '/images/cube/cube-6.jpg',
    ]);

    const cubeSize = Math.min(viewport.width * 0.5, viewport.height * 0.35, 3);

    useFrame(() => {
        if (meshRef.current) {
            const targetRotationY = rotationProgress * Math.PI * 2;
            const targetRotationX = Math.sin(rotationProgress * Math.PI) * 0.3;

            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                targetRotationY,
                0.1
            );
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                targetRotationX,
                0.1
            );
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
            <mesh ref={meshRef}>
                <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
                {textures.map((texture, index) => (
                    <meshStandardMaterial
                        key={index}
                        attach={`material-${index}`}
                        map={texture}
                        roughness={0.1}
                        metalness={0.5}
                        transparent
                        opacity={1}
                    />
                ))}
            </mesh>
        </Float>
    );
};

export function AlbumCube() {
    const { t } = useLanguage();

    const sectionRef = useRef<HTMLDivElement>(null);
    const [inViewRef, inView] = useInView({ threshold: 0.01 });
    const [rotationProgress, setRotationProgress] = useState(0);
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

    const getTrans = (path: string, fallback: string) => {
        const val = t(path);
        return val !== path ? val : fallback;
    };

    const albums = [
        { title: getTrans('albumCube.features.0.title', 'VOICE AI'), subtitle: getTrans('albumCube.features.0.subtitle', 'INTELLIGENT CALLS') },
        { title: getTrans('albumCube.features.1.title', 'CHATBOT'), subtitle: getTrans('albumCube.features.1.subtitle', 'SMART MESSAGING') },
        { title: getTrans('albumCube.features.2.title', 'SCHEDULING'), subtitle: getTrans('albumCube.features.2.subtitle', 'AUTO CALENDAR') },
        { title: getTrans('albumCube.features.3.title', 'GLOBAL'), subtitle: getTrans('albumCube.features.3.subtitle', 'MULTILINGUAL') },
    ];

    useEffect(() => {
        if (!sectionRef.current) return;

        const st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=300%',
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
                const progress = self.progress;
                setRotationProgress(progress);

                const albumIndex = Math.min(
                    Math.floor(progress * 4),
                    albums.length - 1
                );
                setCurrentAlbumIndex(albumIndex);
            },
        });

        return () => st.kill();
    }, [albums.length]);

    const currentAlbum = albums[currentAlbumIndex];

    return (
        <section
            id="album-cube"
            ref={(el) => {
                //@ts-ignore
                sectionRef.current = el;
                //@ts-ignore
                inViewRef.current = el;
            }}
            className="relative w-full h-screen bg-slate-50 overflow-hidden"
        >
            {/* Dynamic Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full blur-[150px]" />
            </div>

            {/* Elegant Header Branding */}
            <div className="absolute top-[10%] md:top-[12%] inset-x-0 flex flex-col items-center pointer-events-none z-20">
                <h2 className="font-script text-5xl md:text-8xl text-blue-600/90">
                    {t('nav.brandName') || 'Nalyra'}
                </h2>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent mt-2" />
            </div>

            {/* 3D Canvas */}
            <div className="absolute inset-0 z-10">
                {inView && (
                    <Canvas
                        camera={{ position: [0, 0, 7.5], fov: 45 }}
                        gl={{ antialias: true, powerPreference: 'high-performance' }}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.5} />
                            <pointLight position={[0, 0, 5]} intensity={3} color="#ffffff" />
                            <spotLight position={[10, 10, 10]} intensity={2.5} angle={0.2} penumbra={1} color="#ffffff" />
                            <spotLight position={[-10, 5, 5]} intensity={2.5} angle={0.2} penumbra={1} color="#3b82f6" />

                            <Cube rotationProgress={rotationProgress} />
                            {/* We could hide glass planes or make them lighter for light theme */}
                            <group position={[0, 0, -2]}>
                                <mesh rotation={[0.4, 0.5, 0]}>
                                    <planeGeometry args={[15, 10]} />
                                    <MeshDistortMaterial
                                        color="#bfdbfe"
                                        speed={2}
                                        distort={0.4}
                                        radius={1}
                                        transparent
                                        opacity={0.1}
                                    />
                                </mesh>
                            </group>

                            <Environment preset="studio" />
                        </Suspense>
                    </Canvas>
                )}
            </div>

            {/* Glassmorphic UI Info */}
            <div className="absolute inset-x-0 bottom-8 md:bottom-12 flex justify-center z-20 px-8">
                <div className="md:backdrop-blur-xl md:bg-white/80 md:border md:border-slate-200 md:rounded-2xl p-4 md:p-8 max-w-2xl w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-xl">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-slate-200 flex items-center justify-center">
                            <span className="text-lg md:text-xl font-serif text-slate-400 italic">0{currentAlbumIndex + 1}</span>
                        </div>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <h3 className="font-serif text-2xl md:text-5xl text-dark-theme mb-1 md:mb-2 tracking-tight">
                            {currentAlbum?.title}
                        </h3>
                        <p className="font-sans text-[10px] md:text-sm text-slate-400 tracking-[0.3em] uppercase">
                            {currentAlbum?.subtitle}
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col gap-2">
                        {albums.map((_, index) => (
                            <div key={index}
                                className={`w-1 h-3 rounded-full transition-all duration-500 ${index === currentAlbumIndex ? 'bg-blue-600 h-8' : 'bg-slate-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Minimal Indicators */}
            <div className="absolute top-12 left-12 z-20 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.4em]">Internal System Live</span>
            </div>
        </section>
    );
}
