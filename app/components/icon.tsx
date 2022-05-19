import { HiMenuAlt2, HiOutlineHeart } from "react-icons/hi";

const switchFn =
  (lookupObject: any, defaultCase = "_default") =>
  (expression: string | number) =>
    lookupObject[expression] || lookupObject[defaultCase];

export const iconMaps = {
  menu: <HiMenuAlt2 />,
  default: <HiOutlineHeart />,
};

const iconSwitch = switchFn(iconMaps, "default");

interface IconProps {
  name: "menu";
}

export const Icon = ({ name }: IconProps) => iconSwitch(name);
