import { Wrapper, ListContainer, List, Paragraph, ChildText, PrimaryHeading, Button, Input, Form, SecondaryHeading } from "../../HOC/HtmlElements";
import './Main.scss';

const Main = () => {

  const main = Wrapper({
    component: 'main',
    className: 'main',
  });

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
    className: 'section-refresh_container',
  });

  const heading_1 = PrimaryHeading({
    textContent: 'Recent scores',
    className: 'score-heading'
  });

  const heading_2 = SecondaryHeading({
    textContent: 'Add your score',
    className: 'form-heading'
  });

  const button = Button({
    textContent: 'Refresh',
    className: 'button',
  });

  Container.append(heading_1, button);

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

    paragraph.append(span);
    list.append(paragraph);
    UnorderList.append(list);
  })

  const playerNameInput = Input({
    type: 'text',
    className: 'input',
    placeholder: 'Your name',
  })

  const playerScoreInput = Input({
    type: 'number',
    className: 'input',
    placeholder: 'Your score',
  })

  const submit = Input({
    type: 'submit',
    className: 'input',
    value: 'Submit',
  })

  const form = Form({
    className: 'form'
  });
  form.append(
    playerNameInput, 
    playerScoreInput, 
    submit
  );

  section_one.append(Container);
  section_one.append(UnorderList);

  section_two.append(heading_2, form)
  console.log(section_two);
  main.append(section_one, section_two);
  return main;
};

export default Main();