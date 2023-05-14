import { useEffect, useState } from "react";

export const Window = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("La ventana se ha redimensionado");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <p>Abre la consola y redimensiona la ventana</p>;
};

export const HandleHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((e) => e + 1)}> +1 </button>
    </div>
  );
};
