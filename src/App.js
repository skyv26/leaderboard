import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Wrapper } from "../HOC/HtmlElements";

const App = () => {
  const wrapper = Wrapper({
    component: 'div',
  })
  wrapper.append(Header, Main);
  return wrapper;
};

export default App();