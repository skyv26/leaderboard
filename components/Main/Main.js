import {
  List, Paragraph, ChildText, Button,
  Input, Form,
} from '../../HOC/HtmlElements.js';

import Api from '../../utils/Api/Api.js';

import './Main.scss';

const UnorderList = document.querySelector('.playerList');
const scoreBoardHandler = () => {
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
};

const Main = () => {
  const refreshContainer = document.querySelector('.section-refresh_container');
  const sectionForm = document.querySelector('.section-form');

  const errorMessage = Paragraph({
    className: 'player_detail',
    textContent: '!! Please Add Some Data !!',
  });

  const button = Button({
    textContent: 'Refresh',
    className: 'button',
    onclick: () => {
      scoreBoardHandler();
      if (UnorderList.children.length < 1) {
        UnorderList.append(errorMessage);
      }
    },
  });
  refreshContainer.appendChild(button);

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
  if (UnorderList.children.length < 1) {
    errorMessage.textContent = 'please wait...';
    UnorderList.append(errorMessage);
  }
  scoreBoardHandler();
  sectionForm.append(form);
};

export default Main;