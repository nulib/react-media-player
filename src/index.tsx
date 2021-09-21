import React from "react";
import ReactDOM from "react-dom";
import { Viewer } from "./components/Viewer/Viewer";
import Player from "./components/Player";

interface Props {
  manifestId: string;
}

const App: React.FC<Props> = ({ manifestId }) => {

  const streamingUrl: string =
    "https://meadow-streaming.rdc-staging.library.northwestern.edu/85/bd/1f/cd/-5/ff/6-/45/fb/-a/c5/1-/e4/56/44/6d/cb/00/6298d09f04833eb737504941812b0442e6253a4e286e79db3b11e16f9b39c604-1080.m3u8";
  const publicUrl: string =
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";


  return (
    <>
      <Player streamingUrl={publicUrl} />
      <Viewer
        manifest={{
          label: {
            en: ["manifest.label"],
          },
        }}
      />
    </>
  );
};

ReactDOM.render(
  <App manifestId="https://uri.for/manifest.json" />,
  document.getElementById("root")
);
