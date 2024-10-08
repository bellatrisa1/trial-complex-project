// src/app/components/Model.tsx
"use client"; // Убедитесь, что эта строка в начале файла

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { animated, useSpring } from "@react-spring/three"; // Импортируем animated и useSpring
import * as THREE from "three"; // Импортируем THREE для работы с типами

interface GLTFModelProps {
  url: string; // Путь к GLTF модели
}

const Model = ({ url }: GLTFModelProps) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  // Используем useSpring для анимации
  const props = useSpring({
    opacity: modelRef.current ? 1 : 0, // Определяем opacity
    config: { duration: 1000 }, // Настройка длительности анимации
  });

  return (
    <animated.group
      ref={modelRef}
      scale={[1, 1, 1]} // Настрой масштаб
      onClick={() => {
        // Логика взаимодействия (например, вращение или масштабирование)
        modelRef.current?.rotateY(Math.PI / 4); // Пример вращения
      }}
      {...props} // Применяем анимационные свойства
    >
      <primitive object={scene} />
    </animated.group>
  );
};

export default Model;
