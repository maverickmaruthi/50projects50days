const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
  notes.forEach(note => addNoteHandler(note));
}

addBtn.addEventListener('click', () => addNoteHandler());

function addNoteHandler(text = '') {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class= "${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = noteEl.querySelector('.edit');
  const deleteBtn = noteEl.querySelector('.delete');
  const mainEl = noteEl.querySelector('.main');
  const textareaEl = noteEl.querySelector('textarea');

  textareaEl.value = text;
  mainEl.innerHTML = marked(text);

  editBtn.addEventListener('click', () => editNoteHandler(mainEl, textareaEl));
  deleteBtn.addEventListener('click', () => deleteNoteHandler(noteEl));
  textareaEl.addEventListener('input', (e) => textareaInputHandler(e, mainEl))
  document.body.appendChild(noteEl);
}

function editNoteHandler(mainEl, textareaEl) {
  mainEl.classList.toggle('hidden');
  textareaEl.classList.toggle('hidden');
 
}

function deleteNoteHandler(noteEl) {
  noteEl.remove();
  updateLS();
}

function textareaInputHandler(e, mainEl) {
  const {value} = e.target;
  mainEl.innerHTML = marked(value);
  updateLS();
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach(textarea => notes.push(textarea.value));
  localStorage.setItem('notes', JSON.stringify(notes));
}