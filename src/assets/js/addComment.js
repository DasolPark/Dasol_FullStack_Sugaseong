import axios from 'axios';

const addCommentForm = document.querySelector('#jsAddComment');
const commentList = document.querySelector('#jsCommentList');
const commentNumber = document.querySelector('#jsCommentNumber');

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async comment => {
  const boardId = window.location.href.split('/board/')[1];
  const response = await axios({
    url: `/api/${boardId}/comment`,
    method: 'POST',
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const onCommentFormSubmit = e => {
  e.preventDefault();

  const commentInput = addCommentForm.querySelector('input');
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = '';
};

if (addCommentForm) {
  addCommentForm.addEventListener('submit', onCommentFormSubmit);
}
