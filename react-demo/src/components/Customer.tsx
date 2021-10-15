import React from "react";

type Person = {
  firstName: string;
  lastName: string;
  age: Number;
  address?: string; // adress is optional
  isLegal: boolean;
};

const Customer = (props: Person) => {
  const { firstName, lastName, age, isLegal } = props;

  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{age}</li>
        <li>{isLegal}</li>
      </ul>
    </div>
  );
};

export default Customer;
