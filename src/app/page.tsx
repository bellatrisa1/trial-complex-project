"use client";

import Model from "./components/Model";

export default function Home() {
  return (
    <div>
      <Model url="/path/to/your/model.gltf" />{" "}
      {/* Укажите правильный путь к вашей модели */}
    </div>
  );
}