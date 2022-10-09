import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AvatarLoader } from "../../Components/Loaders";
import axios from "axios";

const User = ({ user }) => {
  const [male, setMale] = useState("M");
  return (
    <div className="flex  h-screen items-center justify-center">
      <Head>
        <title>Edit {user.username}</title>
        <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
      </Head>
      <div className=" w-1/3 rounded-lg border-2 bg-white p-4 shadow-2xl">
        <ul className="flex flex-col  items-center">
          <Image
            className="border"
            loader={AvatarLoader}
            width={250}
            height={250}
            src={user.image}
          />
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
        <div className="my-3 mx-3 flex justify-between ">
          <button className="border-gray mx-1 w-1/3 border-2 shadow-lg hover:bg-gray-100">
            Изменить
          </button>
          <Link href={"/"}>
            <button className="border-gray mx-1 w-1/3 border-2 shadow-lg  hover:bg-gray-100">
              Главная
            </button>
          </Link>
          <Link href={"/"}>
            <button
              onClick={() => {
                axios.get(`http://127.0.0.1:8080/users/delete/${user.id}`);
              }}
              className="border-gray mx-1 w-1/3 border-2 shadow-lg  hover:bg-gray-100"
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

  return {
    props: { user }, // will be passed to the page component as props
  };
}

export default User;
