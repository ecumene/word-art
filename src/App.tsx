import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WordArt from "./react-wordart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <WordArt
            text="Why don't scientists trust atoms? They make up everything!"
            theme="rainbow"
            fontSize={40}
          />
          <WordArt
            text="I told my wife she was drawing her eyebrows too high. She looked surprised!"
            theme="blues"
            fontSize={40}
          />
          <WordArt
            text="What do you call a fake noodle? An impasta!"
            theme="superhero"
            fontSize={40}
          />
          <WordArt
            text="Why did the scarecrow win an award? He was outstanding in his field!"
            theme="radial"
            fontSize={40}
          />
          <WordArt
            text="I'm reading a book about anti-gravity. It's impossible to put down!"
            theme="tilt"
            fontSize={40}
          />
          <WordArt
            text="Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
            theme="purple"
            fontSize={40}
          />
          <WordArt
            text="Why don't skeletons fight each other? They don't have the guts!"
            theme="horizon"
            fontSize={40}
          />
          <WordArt
            text="What's the best thing about Switzerland? I don't know, but the flag is a big plus!"
            theme="italicOutline"
            fontSize={40}
          />
          <WordArt
            text="How do you organize a space party? You planet!"
            theme="slate"
            fontSize={40}
          />
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
