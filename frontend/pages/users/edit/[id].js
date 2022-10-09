import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import Link from "next/link";
const AddUser = ({ user }) => {
  const newUsername = useRef(null);
  const newAge = useRef(null);
  const newGender = useRef(null);
  const newBirthday = useRef(null);
  const [edited, setEdited] = useState(false);
  const editPost = () => {
    axios
      .post(`http://127.0.0.1:8080/users/edit/${user.id}`, {
        newUsername: newUsername.current.value,
        newAge: newAge.current.value,
        newGender: newGender.current.value,
        newBirthday: newBirthday.current.value,
      })
      .then(() => {
        setEdited(true);
      });
  };
  return (
    <div className="flex h-screen justify-center items-center">
      {!edited ? (
        <div className="flex border-2 border-gray-400 p-10 rounded-lg  flex-col shadow-2xl">
          <span>Редактирование пользователя: {user.username}</span>
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
            className="border-2 border-gray-400 mt-5  shadow-lg hover:bg-gray-100 border-gray"
          >
            Изменить
          </button>
          <Link href={"/"}>
            <button className="border-2 border-gray-400 mt-5  shadow-lg hover:bg-gray-100 border-gray">
              Главная
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex border-2 w-1/6 items-center border-gray-400 p-10 rounded-lg  flex-col shadow-2xl">
          <p>Пользователь {user.username} изменен</p>
          <Link href={"/"}>
            <button className="border-2 w-5/6  border-gray-400 mt-5  shadow-lg hover:bg-gray-100 border-gray">
              Главная
            </button>
          </Link>
        </div>
      )}
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
export default AddUser;
