import "./style/post.css";

const Container = ({ children }) => {
  return (
    <>
      <header>PostList</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Container;
