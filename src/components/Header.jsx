function Header(){
    return (
        <nav class="navbar navbar-light">
            <div class="container">
                Condult
            </div>
            <ul class="nav navbar-nav pull-xs-right">
              <li class="nav-item">
                <a routerlink="/editor" routerlinkactive="active" class="nav-link" href="/editor"><i class="ion-compose"></i>&nbsp;New Article </a>
              </li>
              <li class="nav-item">
                <a routerlink="/settings" routerlinkactive="active" class="nav-link" href="/settings"><i class="ion-gear-a"></i>&nbsp;Settings </a>
              </li>
              <li class="nav-item">
             </li>
            </ul>
        </nav>
    );
}

export default Header;