import './Header.scss';
import { Paragraph, Wrapper } from '../../HOC/HtmlElements.js';

const Header = () => {
  const logo = Paragraph({
    textContent: 'Leaderboard',
    className: 'header-logo',
  });

  const header = Wrapper({
    component: 'header',
    className: 'header',
  });

  header.append(logo);
  return header;
};

export default Header();