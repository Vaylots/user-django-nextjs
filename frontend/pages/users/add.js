import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import Link from "next/link";
const AddUser = () => {
  const newUsername = useRef(null);
  const newAge = useRef(null);
  const newGender = useRef(null);
  const newBirthday = useRef(null);
  const [addded, setAdded] = useState(true);
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
    <div className="flex h-screen justify-center items-center">
      {!addded ? (
        <div className="flex border-2  border-gray-400 p-10 rounded-lg items-center  flex-col shadow-2xl">
          <span>Добавление пользователя</span>
          <input
            className="border-2 border-gray-400 my-2 py-1 px-3 rounded-lg"
            type="text"
            ref={newUsername}
            placeholder="Новое имя..."
          />
          <input
            className="border-2 border-gray-400 my-2 py-1 px-3 rounded-lg"
            type="text"
            ref={newAge}
            placeholder="Новый возраст"
          />
          <input
            className="border-2 border-gray-400 my-2 py-1 px-3 rounded-lg"
            type="text"
            ref={newGender}
            placeholder="Новое пол..."
          />
          <input
            className="border-2 border-gray-400 my-2 py-1 px-3 rounded-lg"
            type="text"
            ref={newBirthday}
            placeholder="Новая дата рождения..."
          />
          <button
            onClick={() => {
              editPost();
            }}
            className="border-2 border-gray-400 mt-5 w-full shadow-lg hover:bg-gray-100 border-gray"
          >
            Добавить
          </button>
          <Link href={"/"}>
            <button className="border-2  border-gray-400 mt-5 w-full shadow-lg hover:bg-gray-100 border-gray">
              Главная
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex border-2 h-48 items-center border-gray-400 p-10 rounded-lg justify-center  flex-col shadow-2xl">
          <p>Пользователь добавлен</p>
          <Link href={"/"}>
            <button className="border-2 w-full  border-gray-400 mt-5  shadow-lg hover:bg-gray-100 border-gray">
              Главная
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddUser;
