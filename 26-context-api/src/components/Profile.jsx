import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { AgeContext } from "../contexts/AgeContext";

const Profile = () => {
  const nameContext = useContext(UserContext);
  const ageContext = useContext(AgeContext);

  console.log(nameContext);
  console.log(ageContext);

  const { name, setName } = useContext(UserContext);
  const { age, setAge } = useContext(AgeContext);
  return (
    <div>
      <h3>사용자 Profile</h3>
      <p>나이 :{age}</p>
      <p>이름 :{name}</p>

      <input type="text" placeholder="이름 입력" />
      <input type="number" placeholder="나이 입력" />
      <br />
      <button>바꾸기</button>
    </div>
  );
};

export default Profile;
