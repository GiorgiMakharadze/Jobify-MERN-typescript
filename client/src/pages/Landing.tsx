import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to={"/"} />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dicta impedit, architecto officiis, repellat sit dolorum hic,
              necessitatibus est vitae ipsum maxime adipisci fuga error! Minima
              vitae libero optio inventore.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
