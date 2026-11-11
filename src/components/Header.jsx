import { Link } from "react-router";

function Header(){
    return (
        <nav class="navbar navbar-light">
            <div class="container">
                Condult
            </div>
            <ul class="nav navbar-nav pull-xs-right">
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/editor">New Article</Link>
              </li>
              <li class="nav-item">
                <Link to="/settings">Settings</Link>
              </li>
              <li class="nav-item">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
        </nav>
    );
}

export default Header;