import React from 'react';
import Svg, { Path, Circle } from "react-native-svg"

export const HeartIcon = ({ 
  colorFill, 
  stroke,
  size,
}) => (
  <Svg
  fill={ colorFill }
  stroke={ stroke }
  width={size}
  height={size}
  cursor="pointer"
  viewBox="0 0 24 24"

>
  <Path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z" />
</Svg>
);

export const SearchIcon = ({
  stroke,
  size,
}) => (

  <Svg
    className="prefix__icon prefix__icon-tabler prefix__icon-tabler-search"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={stroke}
    fill='none'
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Circle cx={10} cy={10} r={7} />
    <Path d="M21 21l-6-6" />
  </Svg>

);

export const ShareIconAndroid = ({}) => (

  <Svg
    width={22}
    height={22}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Circle cx={6} cy={12} r={3} />
    <Circle cx={18} cy={6} r={3} />
    <Circle cx={18} cy={18} r={3} />
    <Path d="M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
  </Svg>

);

export const ShareIconIOS= ({}) => (
  <Svg 
    width={22} 
    height={22} 
    viewBox="0 0 72 72"
  >
  <Path d="M29 7.5c-4.1 4.2-6.1 6.8-5.5 7.4.7.7 2.7-.6 5.7-3.5L34 6.9l.2 19.8c.3 16.8.5 19.8 1.8 19.8s1.5-3 1.8-19.8L38 6.9l4.8 4.5c3 2.9 5 4.2 5.7 3.5.6-.6-1.4-3.2-5.5-7.4C39.5 3.9 36.3 1 36 1c-.3 0-3.5 2.9-7 6.5z" />
  <Path d="M10 47.5V72h52V22.9l-7.7.3c-9.3.4-10.4 2.2-1.5 2.6l6.2.3V69H13V26.1l6.3-.3c8.8-.4 7.7-2.2-1.5-2.6l-7.8-.3v24.6z" />
</Svg>
);



export const HomeIcon = ({
  stroke,
  size,
}) => (
  <Svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke={stroke}
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <Path d="M0 0h24v24H0z" stroke="none" />
  <Path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  <Path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
</Svg>
)

export const ListIcon = ({
  stroke,
  size,
}) => (
  <Svg
  className="prefix__icon prefix__icon-tabler prefix__icon-tabler-list"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke={stroke}
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <Path d="M0 0h24v24H0z" stroke="none" />
  <Path d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
</Svg>
)

export const HistoryIcon = ({
  stroke,
  size,
}) => (
  <Svg
  className="prefix__icon prefix__icon-tabler prefix__icon-tabler-history"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke={stroke}
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <Path d="M0 0h24v24H0z" stroke="none" />
  <Path d="M12 8v4l2 2" />
  <Path d="M3.05 11a9 9 0 11.5 4m-.5 5v-5h5" />
</Svg>
)

export const EyeIcon = ({
  stroke,
  size,
}) => (
  <Svg
  className="prefix__icon prefix__icon-tabler prefix__icon-tabler-eye"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke={stroke}
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <Path d="M0 0h24v24H0z" stroke="none" />
  <Circle cx={12} cy={12} r={2} />
  <Path d="M2 12l1.5 2a11 11 0 0017 0l1.5-2M2 12l1.5-2a11 11 0 0117 0l1.5 2" />
</Svg>
)