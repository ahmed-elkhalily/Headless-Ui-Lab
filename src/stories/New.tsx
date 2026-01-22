import React from "react";
import cn from "classnames";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export const New = ({ variant, children }: ButtonProps) => {
  return <button className={"bg-green-500"}>{children}</button>;
};
