import Header from '../components/Header/Header.js';
import Main from '../components/Main/Main.js';
import { Wrapper } from '../HOC/HtmlElements.js';

const App = () => {
  const wrapper = Wrapper({
    component: 'div',
  });
  wrapper.append(Header, Main());
  return wrapper;
};

export default App();