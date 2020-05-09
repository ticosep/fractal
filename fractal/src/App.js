import React from "react";
import logo from "./logo.svg";
import * as PIXI from "pixi.js";
import "./App.css";

function App() {
  const [app, setApp] = React.useState(
    new PIXI.Application({ width: 600, height: 600, transparent: false })
  );
  const [graph, setGraph] = React.useState(new PIXI.Graphics());

  const [pixiContent, setPixiContent] = React.useState(undefined);

  const updatePixiCnt = (element) => {
    console.log(element);
    setPixiContent(element);
    //now we are adding the application to the DOM element which we got from the Ref.
    if (pixiContent && pixiContent.children.length <= 0) {
      pixiContent.appendChild(app.view);
    }
  };

  graph.lineStyle(2, 0xff00ff, 1);

  app.stage.addChild(graph);

  app.ticker.add(() => {
    graph.moveTo(0, 0);
    graph.lineTo(300, 300);
  });

  return <div ref={updatePixiCnt} />;
}

export default App;
