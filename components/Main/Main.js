import { Wrapper, ListContainer, List, Paragraph, ChildText, PrimaryHeading, Button } from "../../HOC/HtmlElements";

const Main = () => {

  const main = Wrapper({
      component: 'section',
      className: 'main'  
  })

  const section_one = Wrapper({
    component: 'section',
    className: 'section section-table'
  });

  const section_two = Wrapper({
    component: 'section',
    className: 'section section-form',
  });

  const UnorderList = ListContainer({
    component: 'ul',
    className: 'playerList',
  });

  const Container = Wrapper({
    component: 'div',
    className: 'refresh-container',
  });

  const heading_1 = PrimaryHeading({
    textContent: 'Recent scores'
  });

  const button = Button({
    textContent: 'Refresh',
  });

  Container.append('beforeend',heading_1, button);

  const dummyScore = [100, 20, 50, 78, 125, 77, 42];

  dummyScore.forEach((eachList, index) => {
    const list = List({
      className: `player playerID_${index+1}`,
    })

    const paragraph = Paragraph({
      className: 'player_detail',
      textContent: 'Name: ',
    })

    const span = ChildText({
      className: 'score',
      textContent: eachList,
    })

    paragraph.insertAdjancentElement('beforeend', span);
    list.insertAdjancentElement('afterbegin', paragraph);
    UnorderList.insertAdjancentElement('beforeend',list);
  })

  section_one.append(Container);
  section_one.append(UnorderList);

};

export default Main;