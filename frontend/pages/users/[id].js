import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const User = ({ user }) => {
  const [male, setMale] = useState("M");
  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" border-2 w-1/3">
        <ul className="flex items-center flex-col">
          <li className="mb-2">Данные пользователя:</li>
          <li className="mb-1 ">Имя: </li>
          <li className="mb-1 ">{user.username}</li>
          <li className="mb-1">Возраст: </li>
          <li className="mb-1 ">{user.age}</li>
          <li className="mb-1">Дата рождения:</li>
          <li className="mb-1 ">{user.birthday}</li>
          <li className="mb-1">Пол:</li>
          {user.gender == male ? <li>Мужчина</li> : <li>Женщина</li>}
        </ul>
        <div className="flex justify-between my-3 mx-3 ">
          <button className="border-2 w-1/3 mx-1 shadow-lg hover:bg-gray-100 border-gray">
            Изменить
          </button>
          <Link href={"/"}>
            <button className="border-2 w-1/3 mx-1 shadow-lg hover:bg-gray-100  border-gray">
              Главная
            </button>
          </Link>
          <Link href={"/"}>
            <button
              onClick={() => {
                axios.get(`http://127.0.0.1:8080/users/delete/${user.id}`);
              }}
              className="border-2 w-1/3 mx-1 shadow-lg hover:bg-gray-100  border-gray"
            >
              Удалить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const response = await axios.get(
    `http://127.0.0.1:8080/users/${context.params.id}`
  );
  const user = response.data[0];
  console.log(user);

  return {
    props: { user }, // will be passed to the page component as props
  };
}

export default User;
