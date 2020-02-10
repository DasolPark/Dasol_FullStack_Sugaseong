import axios from 'axios';

const addCommentForm = document.querySelector('#jsAddComment');
const commentList = document.querySelector('#jsCommentList');
const commentNumber = document.querySelector('#jsCommentNumber');
const commentDelBtn = document.querySelectorAll('#jsDelBtn');

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const delReqComment = async list => {
  const boardId = window.location.href.split('/board/')[1];
  const listId = list.id;
  const response = await axios({
    url: `/api/${boardId}/delComment`,
    method: 'POST',
    data: {
      listId
    }
  });
  if (response.status === 200) {
    list.parentElement.removeChild(list);
    decreaseNumber();
  }
};

const addComment = (comment, newCommentId) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');
  btn.innerHTML = '❌';
  btn.addEventListener('click', e => {
    const list = e.target.parentElement;
    delReqComment(list);
  });
  span.innerHTML = comment;
  li.id = newCommentId;
  li.appendChild(span);
  li.appendChild(btn);
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
    addComment(comment, response.data);
  }
};

const onCommentFormSubmit = e => {
  e.preventDefault();

  const commentInput = addCommentForm.querySelector('input');
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = '';
};

const onDelBtnClick = e => {
  const list = e.target.parentElement;
  delReqComment(list);
};

if (addCommentForm) {
  addCommentForm.addEventListener('submit', onCommentFormSubmit);
  commentDelBtn.forEach(btn => btn.addEventListener('click', onDelBtnClick));
}
