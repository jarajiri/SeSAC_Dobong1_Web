import React from "react";
import HeaderMenu from "../components/Header";
import Container from "../components/lecture/Container";
import { Props1, Props2, Props3 } from "../components/lecture/Props";
import Text from "../components/lecture/Text";
import EventObj from "../components/lecture/EventObj";
import GenericList from "../components/lecture/GenericList";
import TodoList from "../components/lecture/TodoList";

export default function Lecture() {
  return (
    <>
      <HeaderMenu />
      <Container>
        <p>수업코드</p>
        {/* <Props1 name="abc" /> */}
        {/* <Props2 width="100px" height="100px" color="red" /> */}
        {/* <Props3 width={100} height={100} color="yellow" text="네모" /> */}
        {/* <Text /> */}
        {/* <EventObj /> */}
        <TodoList />
        {/* <GenericList /> */}
      </Container>
    </>
  );
}
