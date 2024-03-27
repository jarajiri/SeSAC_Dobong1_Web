import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  //   const forms = useForm();
  //   console.log(forms); /// {...,handleSubmit,watch,register,...}
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  //단축평가?
  /* 
    &&:여러 조건 중에 하나라도 false라면 전체값 false
    ||:여러 조건 중에 하나라도 true라면 전체값 true
  */

  //   console.log("단축평가::||=======", false || "hello");
  //   console.log("단축평가::||=======", true || "hello");
  //   console.log("단축평가::&&=======", false && "hello");
  //   console.log("단축평가::&&=======", true && "hello");

  //에러 처리
  //   console.log("errors", errors);
  //   console.log("message", errors.email?.message);
  //   console.log("message", errors.username?.message);

  //watch
  //   console.log("watch username", watch("username")); //string을 반환한다
  //   console.log("entire info", watch()); // object를 반환한다

  const onValid = (data) => {
    console.log("valid========", data);
    //data:{username:'~~~'}
    //axios요청은 요기서
  };
  const onInvalid = (data) => {
    console.log("invalid=========", data);
    // console.log(data.username?.message);
  };

  //   const userNameRegister = register("username");
  //   console.log(userNameRegister);

  return (
    <>
      <h1>useForm 사용해보기</h1>
      {/* 
      handleSubmit(func1 [,func2]: 인자로 두 개의 함수를 받을 수 있음)
      -func1: 필수, 유효할때 실행
      -func2: 선택, 유효하지 않을때 실행
      */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* handleSubmit은 자동으로 새로고침이 막아진다. */}
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해주세요",
            minLength: {
              value: 2,
              message: "이름은 최소 두글자 이상작성해주세요",
            },
          })}
        />
        {errors.username?.message}

        <br />
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요",
            validate: {
              useGmail: (value) => {
                //value는 input.value
                return value.includes("gmail.com") || "gmail로만 가입가능합니다.";
                //gmail.com이 포함되면 true, 포함되지 않으면 string 리턴
              },
            },
          })}
        />
        {errors.email?.message}

        <br />
        <input type="password" placeholder="password" />
        <br />
        <button type="sumbit">회원가입</button>
      </form>
    </>
  );
};

export default Form;
