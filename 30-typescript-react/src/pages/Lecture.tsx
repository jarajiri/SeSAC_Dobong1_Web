import React from "react";
import HeaderMenu from "../components/Header";
import { Props1, Props2, Props3 } from "../components/lecture/Props";
import Container from "../components/lecture/Container";
import Text from "../components/lecture/Text";
import EventObj from "../components/lecture/EventObj";
import TodoList from "../components/lecture/TodoList";
import GenericList from "../components/lecture/GenericList";

const Lecture = () => {
  return (
    <>
      <HeaderMenu />
      <Container>
        <h2>수업 코드</h2>
        {/* <Props1 name="rimeboret" />
        <Props2 width="10rem" height="10rem" color="purple" />
        <Props3 width={100} height={100} color="pink" text="hello" /> */}
        {/* <Text /> */}
        {/* <EventObj /> */}
        {/* <TodoList /> */}
        <GenericList />
      </Container>
    </>
  );
};

export default Lecture;
