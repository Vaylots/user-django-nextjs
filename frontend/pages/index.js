import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { Card } from "../Components/Card";

export default function Home({ users }) {
  return (
    <div className="grid h-full w-full items-center ">
      <Head>
        <title>Users</title>
        <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
      </Head>
      <header className="w-full">
        <Link href={"users/add"}>
          <ul className="mt-4 flex justify-center  ">
            <li className="border-gray mx-1 w-2/6 cursor-pointer border-2 bg-white   py-2 text-center shadow-lg hover:bg-gray-100">
              Добавить пользователя
            </li>
          </ul>
        </Link>
      </header>
      <main className="grid place-items-center p-10 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
        {users.map((element) => {
          return (
            <Card
              id={element.id}
              key={element.id}
              username={element.username}
              age={element.age}
              gender={element.gender}
              birthday={element.birthday}
              image={element.image}
            />
          );
        })}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await axios.get("http://127.0.0.1:8080/users/");
  const users = response.data;

  return {
    props: { users }, // will be passed to the page component as props
  };
}
