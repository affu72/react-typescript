import React from "react";

type ChildProp = {
  children: React.ReactNode;
};

export default function ChildAsComponent(props: ChildProp) {
  return <div>{props.children}</div>;
}
