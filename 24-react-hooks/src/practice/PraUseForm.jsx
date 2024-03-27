import React from "react";
import { useForm } from "react-hook-form";

const PraUseForm = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };
  const onInvalid = (data) => {
    console.log("invalid========", data);
  };

  console.log();

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.name?.message}
        <br />
        <input
          type="number"
          defaultValue={0}
          {...register("age", {
            validate: {
              aboveZero: (value) => {
                return value > 0 || "0 이상의 숫자만 입력가능합니다.";
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default PraUseForm;
