// Register View
const boardTitle = document.querySelector(
  '.board__contents .boardBlock__title'
);

const registerView = () => {
  const boardId = boardTitle.parentElement.href.split('/board/')[1];
  fetch(`/api/${boardId}/view`, {
    method: 'POST'
  });
};

if (boardTitle) {
  boardTitle.addEventListener('click', registerView);
}
