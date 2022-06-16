import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음만난 파이썬" numOfPage={100} />
      <Book name="처음만난 AWS" numOfPage={300} />
      <Book name="처음만난 React" numOfPage={400} />
    </div>
  );
}

export default Library;
