import React from 'react';

export default function heading(props) {
  console.log(props);
  const Heading = `h${props.level}`;
  return (
    <>
      <Heading>
        {props.children}
      </Heading>
      <hr />
    </>
  );
}