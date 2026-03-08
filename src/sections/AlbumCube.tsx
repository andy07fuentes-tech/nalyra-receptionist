import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Sub-component for the Floating Glass Background
const GlassPlanes = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
            groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh position={[2, 1, -5]} rotation={[0.4, 0.5, 0]}>
                <planeGeometry args={[15, 10]} />
                <MeshDistortMaterial
                    color="#1e293b"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    transparent
                    opacity={0.3}
                />
            </mesh>
            <mesh position={[-3, -2, -6]} rotation={[-0.2, -0.3, 0.5]}>
                <planeGeometry args={[20, 15]} />
                <MeshDistortMaterial
                    color="#0f172a"
                    speed={1.5}
                    distort={0.3}
                    radius={1}
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </group>
    );
};

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
            ref={sectionRef}
            className="relative w-full h-screen bg-[#0a0a0c] overflow-hidden"
        >
            {/* Dynamic Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px]" />
            </div>

            {/* Elegant Header Branding */}
            <div className="absolute top-[10%] md:top-[12%] inset-x-0 flex flex-col items-center pointer-events-none z-20">
                <h2 className="font-script text-6xl md:text-8xl text-white/90 drop-shadow-2xl">
                    {t('nav.brandName') || 'Nalyra'}
                </h2>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent mt-2" />
            </div>

            {/* 3D Canvas */}
            <div className="absolute inset-0 z-10">
                <Canvas
                    camera={{ position: [0, 0, 7.5], fov: 45 }}
                    gl={{ antialias: true }}
                >
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.8} />
                        <pointLight position={[0, 0, 5]} intensity={2.5} color="#ffffff" />
                        <spotLight position={[10, 10, 10]} intensity={2} angle={0.2} penumbra={1} color="#ffffff" />
                        <spotLight position={[-10, 5, 5]} intensity={2} angle={0.2} penumbra={1} color="#60a5fa" />

                        <Cube rotationProgress={rotationProgress} />
                        <GlassPlanes />

                        <Environment preset="studio" />
                    </Suspense>
                </Canvas>
            </div>

            {/* Glassmorphic UI Info */}
            <div className="absolute inset-x-0 bottom-8 md:bottom-12 flex justify-center z-20 px-8">
                <div className="md:backdrop-blur-xl md:bg-white/5 md:border md:border-white/10 md:rounded-2xl p-4 md:p-8 max-w-2xl w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 md:shadow-2xl">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center">
                            <span className="text-lg md:text-xl font-serif text-white/50 italic">0{currentAlbumIndex + 1}</span>
                        </div>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <h3 className="font-serif text-3xl md:text-5xl text-white mb-1 md:mb-2 tracking-tight drop-shadow-md">
                            {currentAlbum?.title}
                        </h3>
                        <p className="font-sans text-[10px] md:text-sm text-white/40 tracking-[0.3em] uppercase drop-shadow-sm">
                            {currentAlbum?.subtitle}
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col gap-2">
                        {albums.map((_, index) => (
                            <div key={index}
                                className={`w-1 h-3 rounded-full transition-all duration-500 ${index === currentAlbumIndex ? 'bg-white h-8' : 'bg-white/10'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Minimal Indicators */}
            <div className="absolute top-12 left-12 z-20 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[10px] text-white/30 uppercase tracking-[0.4em]">Internal System Live</span>
            </div>
        </section>
    );
}
