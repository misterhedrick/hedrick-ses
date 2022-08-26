const Footer = (props) => {
  return (
    <footer class="main-footer hide-desktop">
      <div class="main-footer-items">
        <div class="main-footer-item" onclick="scrollToByID('home')">
          <i class="fas fa-home fa-2x">home</i>
        </div>
        <div class="main-footer-item" onclick="scrollToByID('me')">
          <i class="fas fa-user fa-2x">user</i>
        </div>
        <div class="main-footer-item" onclick="scrollToByID('languages')">
          <i class="fas fa-laptop-code fa-2x">code</i>
        </div>
        <div class="main-footer-item" onclick="scrollToByID('achievements')">
          <i class="fas fa-tasks fa-2x">task</i>
        </div>
        <div class="main-footer-item" onclick="scrollToByID('experience')">
          <i class="fas fa-history fa-2x">history</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
