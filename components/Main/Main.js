import {
  Wrapper, List,
  Paragraph, ChildText, PrimaryHeading, Button,
  Input, Form,
} from '../../HOC/HtmlElements.js';

import Api from '../../utils/Api/Api.js';

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
  const refreshContainer = document.querySelector('.section-refresh_container');
  const sectionForm = document.querySelector('.section-form');

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
    onclick: () => {
      (async () => {
        const { result } = await Api.get();
        UnorderList.textContent = '';
        result.forEach((eachList, index) => {
          const list = List({
            className: 'player',
            id: `playerID-${index + 1}`,
          });

          const paragraph = Paragraph({
            className: 'player_detail',
            textContent: `${eachList.user}: `,
          });

          const span = ChildText({
            className: 'score',
            textContent: eachList.score,
          });

          paragraph.append(span);
          list.append(paragraph);
          UnorderList.append(list);
        });
      })();
    },
  });
  refreshContainer.appendChild(button);
  // Container.append(heading1, button);

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
    onsubmit: (e) => {
      e.preventDefault();
      const user = playerNameInput.value;
      const score = playerScoreInput.value;
      Api.post({ user, score });
      form.reset();
    },
  });

  form.append(
    playerNameInput,
    playerScoreInput,
    submit,
  );

  sectionForm.append(form);
  // sectionOne.append(Container);
  // sectionOne.append(UnorderList);

  // sectionTwo.append(heading2, form);
  // main.append(sectionOne, sectionTwo);
};

export default Main;