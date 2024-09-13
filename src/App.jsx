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
      <h1 style={{
        position: "absolute",
        fontSize: "4.6rem",
        top: 0,
        fontFamily: "Arial",
        margin: 0,
        marginLeft: "4px"
      }}>Merve Simsek</h1>
    </>
  );
}

export default App;
