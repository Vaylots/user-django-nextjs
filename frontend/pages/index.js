import { Card } from "../Components/Card";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";

export default function Home({ users }) {
  return (
    <div className="w-full h-full grid items-center ">
      <Head>
        <title>Users</title>
        <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
      </Head>
      <header className="w-full">
        <Link href={"users/add"}>
          <ul className="flex justify-center mt-4  ">
            <li className="border-2 w-2/6 cursor-pointer text-center py-2   mx-1 shadow-lg hover:bg-gray-100 border-gray">
              Добавить пользователя
            </li>
          </ul>
        </Link>
      </header>
      <main className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center  p-10">
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
