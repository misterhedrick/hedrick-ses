const Header = (props) => {
  return (
    <header id="main-header" class="main-header whiteNav hide-mobile">
      <div class="main-header-title" id="main-header-title">
        Daniel
      </div>
      <nav class="main-header-nav">
        <ul class="main-header-nav-items">
          <li class="main-header-nav-item" onclick="scrollToByID('home')">
            Home
          </li>
          <li class="main-header-nav-item" onclick="scrollToByID('me')">
            Me
          </li>
          <li class="main-header-nav-item" onclick="scrollToByID('languages')">
            Languages
          </li>
          <li
            class="main-header-nav-item"
            onclick="scrollToByID('achievements')"
          >
            Achievements
          </li>
          <li class="main-header-nav-item" onclick="scrollToByID('experience')">
            Experience
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
