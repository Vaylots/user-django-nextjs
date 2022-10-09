import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { AvatarLoader } from "./Loaders";
import { useState } from "react";

export const Card = ({ id, username, age, gender, birthday, image }) => {
  const [male, setMale] = useState("M");
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="mb-10 w-3/4 rounded-lg border-2 border-gray-300 bg-white px-1 py-3 shadow-2xl">
      {!deleted ? (
        <div>
          <ul className="flex flex-col  items-center">
            <Image loader={AvatarLoader} width={250} height={250} src={image} />
            <li className="mb-2">Данные пользователя:</li>
            <li className="mb-1 ">Имя: </li>
            <li className="mb-1 ">{username}</li>
            <li className="mb-1">Возраст: </li>
            <li className="mb-1 ">{age}</li>
            <li className="mb-1">Дата рождения:</li>
            <li className="mb-1 ">{birthday}</li>
            <li className="mb-1">Пол:</li>
            {gender == male ? <li>Мужчина</li> : <li>Женщина</li>}
          </ul>
          <div className="my-3 mx-3 flex flex-col items-center justify-center ">
            <Link href={`/users/edit/${id}`}>
              <button className="border-gray my-2 w-3/6  border-2 px-2 shadow-lg hover:bg-gray-100">
                Изменить
              </button>
            </Link>
            <Link href={`/users/${id}`}>
              <button className="border-gray my-2 w-3/6  border-2  px-2 shadow-lg hover:bg-gray-100">
                Профиль
              </button>
            </Link>
            <button
              onClick={() => {
                axios.get(`http://127.0.0.1:8080/users/delete/${id}`);
                setDeleted(true);
              }}
              className="border-gray my-2 w-3/6 border-2  px-2 shadow-lg  hover:bg-gray-100"
            >
              Удалить
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">Удалён</div>
      )}
    </div>
  );
};
