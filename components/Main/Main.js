import {
  Wrapper, List,
  Paragraph, ChildText, PrimaryHeading, Button,
  Input, Form,
} from '../../HOC/HtmlElements.js';

import './Main.scss';

const Main = () => {
  // const main = Wrapper({
  //   component: 'main',
  //   className: 'main',
  // });

  // const sectionOne = Wrapper({
  //   component: 'section',
  //   className: 'section section-table',
  // });

  // const sectionTwo = Wrapper({
  //   component: 'section',
  //   className: 'section section-form',
  // });

  // const UnorderList = ListContainer({
  //   component: 'ul',
  //   className: 'playerList',
  // });

  const UnorderList = document.querySelector('.playerList');

  const Container = Wrapper({
    component: 'div',
    className: 'section-refresh_container',
  });

  const heading1 = PrimaryHeading({
    textContent: 'Recent scores',
    className: 'score-heading',
  });

  // const heading2 = SecondaryHeading({
  //   textContent: 'Add your score',
  //   className: 'form-heading',
  // });

  const button = Button({
    textContent: 'Refresh',
    className: 'button',
  });

  Container.append(heading1, button);

  const dummyScore = [100, 20, 50, 78, 125, 77, 42];

  dummyScore.forEach((eachList, index) => {
    const list = List({
      className: `player playerID_${index + 1}`,
    });

    const paragraph = Paragraph({
      className: 'player_detail',
      textContent: 'Name: ',
    });

    const span = ChildText({
      className: 'score',
      textContent: eachList,
    });

    paragraph.append(span);
    list.append(paragraph);
    UnorderList.append(list);
  });

  const playerNameInput = Input({
    type: 'text',
    className: 'input',
    placeholder: 'Your name',
    ariaLabel: 'please enter yourname',
  });

  const playerScoreInput = Input({
    type: 'number',
    className: 'input',
    placeholder: 'Your score',
    ariaLabel: 'please try to attempy wisely',
  });

  const submit = Input({
    type: 'submit',
    className: 'input',
    value: 'Submit',
    ariaLabel: 'please submit button to check result',
  });

  const form = Form({
    className: 'form',
  });

  form.append(
    playerNameInput,
    playerScoreInput,
    submit,
  );

  // sectionOne.append(Container);
  // sectionOne.append(UnorderList);

  // sectionTwo.append(heading2, form);
  // main.append(sectionOne, sectionTwo);
  // return main;
};

export default Main();