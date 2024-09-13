import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Merve S.</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>😋</text></svg>"></link>
      </Helmet>

      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>

      <div style={{
        position: "absolute",
        top: 0,
        marginLeft: "4px",
        pointerEvents: "none"
      }}>
        <h1 style={{
          fontSize: "4.6rem",
          fontFamily: "Arial",
          margin: 0      
        }}>Merve Simsek</h1>
        <a style={{
          fontSize: "1.5rem",
          pointerEvents: "all"
        }} href="https://www.linkedin.com/in/mervesi/" target="_blank">https://www.linkedin.com/in/mervesi/</a>
      </div>
    </>
  );
}

export default App;
