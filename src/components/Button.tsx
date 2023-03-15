import React from "react";
type ButtonProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    msg: string
  ) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={(event) =>
        props.handleClick(event, "Hello from anotherComponent")
      }
    >
      Click
    </button>
  );
}
