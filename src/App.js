import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

const words = [
  "Apple",
  "Turtle",
  "Gang",
  "Rabbit",
  "Purple",
  "React",
  "Glasses",
  "Cup",
  "Book",
  "Clock",
  "Phone",
  "Ambition",
  "Color",
  "Origin",
  "Robot",
  "Cool",
];
const positions = [
  [-1.5, 0, 0],
  [1.5, 0, 0],
  [0, 0, -1.5],
  [0, 0, 1.5],
  [0, 1.5, 0],
  [0, -1.5, 0],
  [1, 1, 0],
  [-1, -1, 0],
  [-1, 0, -1],
  [1, -1, 0],
  [-1, 0, 1],
  [1, 0, 1],
  [0, 1, -1],
  [1, 0, -1],
  [-1, 1, 0],
  [0.5, 0.5, 0.5],
];

function Word({ position, text }) {
  return (
    <mesh position={position}>
      <Text scale={[2, 2, 2]} color={"#EC2D2D"} dashed={true}>
        {text}
      </Text>
    </mesh>
  );
}

function Scene() {
  return (
    <group>
      {words.map((word, idx) => {
        return <Word position={positions[idx]} text={word} />;
      })}
    </group>
  );
}
function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Scene />
      <OrbitControls autoRotate={true} enableZoom={false} />
    </Canvas>
  );
}

export default App;
