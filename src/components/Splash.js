import React, { useRef, Component } from 'react';
import {useSpring, animated, useChain} from 'react-spring';





const Splash=() => {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const imgRef = useRef();


  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);
  const text3Style = useAnimation(text3Ref);

  const imgStyle = useSpring({
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    },
    ref: imgRef 
  })

  useChain ([text1Ref, text2Ref, text3Ref, imgRef])


  return (
    <div className="App">
      <animated.h1 style={text1Style}>Save</animated.h1>
      <animated.h1 style={text2Style}>My</animated.h1>
      <animated.h1 style={text3Style}>Place</animated.h1>
      <animated.img src="https://imageshack.com/i/f0yWAbBGj" 
      height={100%""}
      alt=""
      style={imgStyle}
      />
    </div>
  );
}

const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
        opacity: 0,
        position: "absolute",
        transform: 'scale(0.2)'
    },
    to: [
    {
        opacity: 1, 
        transform: 'scale(2.2)'
    },
    {
        opacity: 0,
        transform: 'scale(0.2)'
    }
  ],
    ref: ref
  });
  return spring
}


export default Splash;
