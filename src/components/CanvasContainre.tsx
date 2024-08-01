"use client"

import { JordanGLTF } from '@/typings'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Jordan from './Jordan'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Html, Loader } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);


export const Loading = () => {
    return (
        <Html>
            <Loader />
        </Html>
    );
};

const CanvasContainre = () => {
    return (
        <Canvas camera={{
            position: [4.742922067308307, 2.2387122409413784, 1.2218255872664914],
        }}>
            {/* <pointLight /> */}
            <ambientLight />
            <OrbitControls enablePan={false} enableZoom={false} />
            <Suspense fallback={<Loading />}>
                <Jordan />
            </Suspense>
            <Environment preset='city' />
        </Canvas >
    )
}

export default CanvasContainre
