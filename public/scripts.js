const socket = io();
const codeBlockElement = document.getElementById('codeBlock');
const codeEditorElement = document.getElementById('codeEditor');
const smileyContainer = document.getElementById('smileyContainer');
const roomId = '<%= id %>';
let userRole;

socket.emit('joinRoom', roomId);

socket.on('role', (role) => {
  userRole = role;
  if (role === 'mentor') {
    codeEditorElement.style.display = 'none';
    hideSmiley();
  } else {
    codeEditorElement.style.display = 'block';
    codeEditorElement.value = codeBlockElement.textContent;
    codeEditorElement.addEventListener('input', () => {
      socket.emit('codeUpdate', { roomId, code: codeEditorElement.value });
    });
  }
});

socket.on('codeUpdate', (code) => {
  codeBlockElement.textContent = code;
  hljs.highlightElement(codeBlockElement);

  const codeText = codeBlockElement.textContent;
  const codeBlockTitle = '<%= codeBlock.title %>';

  if (userRole !== 'mentor') {
    if (codeBlockTitle === 'Add' && code.includes("number1+number2")) {
      showSmiley();
    } else if (codeBlockTitle === 'Subtract' && code.includes("number1-number2")) {
      showSmiley();
    } else if (codeBlockTitle === 'Multiplication' && code.includes("number1*number2")) {
      showSmiley();
    } else if (codeBlockTitle === 'Division' && code.includes("number1/number2")) {
      showSmiley();
    } else if (codeBlockTitle === 'Absolute' && code.includes("(-1)*number")) {
      showSmiley();
    } else if (codeBlockTitle === 'Square' && code.includes("number*number")) {
      showSmiley();
    } else {
      hideSmiley();
    }
  } else {
    hideSmiley();
  }
});

hljs.highlightElement(codeBlockElement);

function showSmiley() {
  smileyContainer.style.display = 'block';
}

function hideSmiley() {
  smileyContainer.style.display = 'none';
}
