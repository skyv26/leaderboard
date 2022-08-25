import './Header.scss';
import { Paragraph } from "../../HOC/HtmlElements";

const Header = () => {
  Paragraph({
    textContent: 'Leaderboard',
    className: 'logo'
  });
};

export default Header;