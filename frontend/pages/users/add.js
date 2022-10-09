import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

const AddUser = () => {
  const newUsername = useRef(null);
  const newAge = useRef(null);
  const newGender = useRef(null);
  const newBirthday = useRef(null);
  const [addded, setAdded] = useState(false);
  const editPost = () => {
    axios
      .post(`http://127.0.0.1:8080/users/add/`, {
        newUsername: newUsername.current.value,
        newAge: newAge.current.value,
        newGender: newGender.current.value,
        newBirthday: newBirthday.current.value,
      })
      .then(() => {
        setAdded(true);
      });
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <Head>
        <title>Добавление пользователя</title>
        <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
      </Head>
      {!addded ? (
        <div className="flex flex-col items-center  rounded-lg border-2 border-gray-400 bg-white  p-10 shadow-2xl">
          <span>Добавление пользователя</span>
          <input
            className="my-2 rounded-lg border-2 border-gray-400 py-1 px-3"
            type="text"
            ref={newUsername}
            placeholder="Новое имя..."
          />
          <input
            className="my-2 rounded-lg border-2 border-gray-400 py-1 px-3"
            type="text"
            ref={newAge}
            placeholder="Новый возраст"
          />
          <input
            className="my-2 rounded-lg border-2 border-gray-400 py-1 px-3"
            type="text"
            ref={newGender}
            placeholder="Новое пол..."
          />
          <input
            className="my-2 rounded-lg border-2 border-gray-400 py-1 px-3"
            type="text"
            ref={newBirthday}
            placeholder="Новая дата рождения..."
          />
          <button
            onClick={() => {
              editPost();
            }}
            className="border-gray mt-5 w-full border-2 border-gray-400 shadow-lg hover:bg-gray-100"
          >
            Добавить
          </button>
          <Link href={"/"}>
            <button className="border-gray  mt-5 w-full border-2 border-gray-400 shadow-lg hover:bg-gray-100">
              Главная
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex h-48 flex-col items-center justify-center rounded-lg border-2 border-gray-400 bg-white  p-10 shadow-2xl">
          <p>Пользователь добавлен</p>
          <Link href={"/"}>
            <button className="border-gray mt-5  w-full border-2  border-gray-400 shadow-lg hover:bg-gray-100">
              Главная
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddUser;
