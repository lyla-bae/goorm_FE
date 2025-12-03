import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const observerRef = useRef(null);
  const hasFetched = useRef(false);

  // 데이터 가져오기 (마운트될 때 1번만)
  useEffect(() => {
    if (hasFetched.current) return; //중복방지

    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  // 페이지 변경 시 데이터 추가
  useEffect(() => {
    if (posts.length === 0) return;

    const start = (currentPage - 1) * postsPerPage;
    const end = currentPage * postsPerPage;
    const newPosts = posts.slice(start, end);

    // 중복체크
    setDisplayedPosts((prev) => {
      const existingIds = new Set(prev.map((p) => p.id));
      const uniqueNewPosts = newPosts.filter((p) => !existingIds.has(p.id));

      return [...prev, ...uniqueNewPosts];
    });
  }, [currentPage, posts]);

  // Intersection Observer 설정
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (currentPage < Math.ceil(posts.length / postsPerPage)) {
            setCurrentPage((prev) => prev + 1);
          }
        }
      });
    }, options);

    observerRef.current = observer;

    // 클린업
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [posts.length, currentPage]);

  // 마지막 포스트 관찰
  useEffect(() => {
    if (!observerRef.current) return;

    const lastPost = document.querySelector(".post:last-child");
    if (lastPost) {
      observerRef.current.observe(lastPost);
    }

    return () => {
      if (lastPost && observerRef.current) {
        observerRef.current.unobserve(lastPost);
      }
    };
  }, [displayedPosts]);

  return (
    <div id="post-container">
      {displayedPosts.map((post, index) => (
        <div key={post.id} className="post">
          <h2>
            {post.id}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
