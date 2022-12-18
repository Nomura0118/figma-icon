import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgPlay = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path d="M10 15.464 16 12l-6-3.464v6.928Z" fill={props.color} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill={props.color}
    />
  </Svg>
);
export default SvgPlay;
