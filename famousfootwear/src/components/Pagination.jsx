import { Button } from "@chakra-ui/button";
import React from "react";

const Pagination = ({page,totalpages,onchange}) => {
  const previous = (
    <Button isDisabled={page === 1} onClick={() => onchange(-1)}
    >
      Prev
    </Button>
  );

  const current = <Button>{page}</Button>;

  const next = (
    <Button  onClick={() => onchange(+1)} >
      Next
    </Button>
  );

  return (
    <div>
      {previous}
      {current}
      {next}
    </div>
  );
};

export default Pagination;
