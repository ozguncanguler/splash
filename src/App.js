import React from "react";
import "./App.css";
import {
  useSpring,
  useSpringRef,
  useChain,
  animated,
  config,
} from "react-spring";

function App() {
  const text1Ref = useSpringRef();
  const text2Ref = useSpringRef();
  const text3Ref = useSpringRef();
  const imgRef = useSpringRef();

  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);
  const text3Style = useAnimation(text3Ref);

  const imgStyle = useSpring({
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    from: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    ref: imgRef,
  });

  useChain([text1Ref, text2Ref, text3Ref, imgRef]);

  return (
    <div className="App">
      <animated.h1 style={text1Style}></animated.h1>
      <animated.h1 style={text2Style}>Welcome to the</animated.h1>
      <animated.h1 style={text3Style}>ARSIGNA</animated.h1>
      <animated.img
        src="https://izmirsogutma.com/img/markalar/arcelik.png"
        height={400}
        alt=""
        style={imgStyle}
      ></animated.img>
    </div>
  );
}

const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: "scale(0.3)",
    },
    to: [
      {
        opacity: 1,
        transform: "scale(1)",
      },
      {
        opacity: 0,
        transform: "scale(0.5)",
      },
    ],
    ref: ref,
  });
  return spring;
};

export default App;
