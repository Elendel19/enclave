import React from "react";

const Item = (props) => {
  const { slot, id, name, desription } = props;

  return (
    <div key={`${slot}-item`}>

    </div>
  )
};

export default Item;