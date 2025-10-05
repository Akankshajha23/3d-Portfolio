import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export function Bird() {
  const birdRef = useRef();
  const direction = useRef(1); // 1 = forward, -1 = backward

  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
    birdRef.current.position.set(-5, 2, 1); // set initial position manually
  }, []);

  useFrame(({ clock, camera }) => {
    const bird = birdRef.current;
    const camX = camera.position.x;

    // Floating effect
    bird.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Flip direction only when crossing bounds
    if (direction.current === 1 && bird.position.x > camX + 10) {
      direction.current = -1;
      bird.rotation.y = Math.PI;
    } else if (direction.current === -1 && bird.position.x < camX - 10) {
      direction.current = 1;
      bird.rotation.y = 0;
    }

    // Move bird based on direction
    bird.position.x += 0.01 * direction.current;
    bird.position.z -= 0.01 * direction.current;
  });

  return (
    <mesh ref={birdRef} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird