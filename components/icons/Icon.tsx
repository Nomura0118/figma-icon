import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import SvgPlay from './Play';

export type IconTypeProps =
  | 'play'
  | '';

export interface IconProps {
  type: IconTypeProps;
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}

const Icon: FC<IconProps> = (props) => {
  switch (props.type) {
    case 'play':
      return (
        <SvgPlay
          width={props.size}
          height={props.size}
          color={props.color}
          style={props.style}
        />
      );
    default:
      return (
        <SvgPlay
          width={props.size}
          height={props.size}
          color={props.color}
          style={props.style}
        />
      );
  }
};

export default Icon;
