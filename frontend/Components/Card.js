import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Card = ({ id, username, age, gender, birthday, image }) => {
  const [male, setMale] = useState("M");
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="border-2 w-4/6  mb-10 px-1 py-3 rounded-lg shadow-2xl">
      {!deleted ? (
        <div>
          <ul className="flex items-center flex-col">
            <img className="w-48 h-48" src={`http://localhost:8080/${image}`} />
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
          <div className="flex items-center flex-col justify-center my-3 mx-3 ">
            <Link href={`/users/edit/${id}`}>
              <button className="border-2 my-2 w-3/6  px-2 shadow-lg hover:bg-gray-100 border-gray">
                Изменить
              </button>
            </Link>
            <Link href={`/users/${id}`}>
              <button className="border-2 my-2 w-3/6  px-2  shadow-lg hover:bg-gray-100 border-gray">
                Профиль
              </button>
            </Link>
            <button
              onClick={() => {
                axios.get(`http://127.0.0.1:8080/users/delete/${id}`);
                setDeleted(true);
              }}
              className="border-2 w-3/6 my-2 px-2  shadow-lg hover:bg-gray-100  border-gray"
            >
              Удалить
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">Удалён</div>
      )}
    </div>
  );
};
