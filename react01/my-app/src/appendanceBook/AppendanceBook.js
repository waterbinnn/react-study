import React from "react";

const students = [
  {
    id: 1, //key 값으로 이용될 아이
    name: "noze",
  },
  {
    id: 2,
    name: "shuwha",
  },
  {
    id: 3,
    name: "minnie",
  },
  {
    id: 4,
    name: "miyeon",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        //key 값 잊지말고 넣어주기 !!!!
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
