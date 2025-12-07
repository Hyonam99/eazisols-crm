import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-5xl">Page Not Found</h2>
      <p>the page you are trying to visit does not exist</p>

      <button className="btn_primary" onClick={() => navigate(-1)}>
        Go back
      </button>
    </section>
  );
};

export default PageNotFound;
