import { Link } from "react-router";

function Header({isLoggedIn}){
    return (
        <nav class="navbar navbar-light">
            <div class="container">
                Condult
            </div>
            <ul class="nav navbar-nav pull-xs-right">
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              {isLoggedIn
                ? <>
                  <li class="nav-item">
                    <Link to="/editor">New Article</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/profile">Profile</Link>
                  </li>
                </>
                : <>
                  <li class="nav-item">
                    <Link to="/login">로그인</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/register">회원가입</Link>
                  </li>
                </>
              }
              
            </ul>
        </nav>
    );
}

export default Header;