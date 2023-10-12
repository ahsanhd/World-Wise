import { Link } from "react-router-dom";
import Navigation from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <Navigation />
      <h1>Homepage</h1>

      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
