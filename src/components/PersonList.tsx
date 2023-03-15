import React from "react";
type PersonListProp = {
  nameList: { first: string; last: string }[];
};

export default function PersonList(props: PersonListProp) {
  return (
    <div>
      {props.nameList.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
}
