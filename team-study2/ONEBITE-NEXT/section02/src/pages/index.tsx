import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css"; // css를 모듈화
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book.item";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchBooks from "../lib/fetch-books";
import fetchRandomBooks from "../lib/fetch-random-books";

// page 컴포넌트보다 먼저실행되어서 컴포넌트에게 필요한 데이터를 불러오는 함수
// 백엔드서버에서만 실행되기때문에 여기안에서 콘솔로그 같은건 터미널안에서만 실행됨
export const getStaticProps = async () => {
  console.log("index page");
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, recoBooks },
  };
};

export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
