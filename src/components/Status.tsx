import React from "react";

type StatusProp = {
  status: "loading" | "success" | "error";
};

export default function Status(props: StatusProp) {
  let message: string = "";

  if (props.status === "loading") message = "Loading...";
  else if (props.status === "success") message = "Payment Successful";
  else if (props.status === "error") message = "Payment Failed";

  return (
    <div>
      <h2>Status- {message}</h2>
    </div>
  );
}
