
// Notes Class
class Notes {
  constructor(taks, label) {
    this.taks = taks;
    this.label = label;
  }
}

const note = new Notes('Makan', 'janji');
console.log(note);

// UI
// add
class UI {

  // static displayNotes() {

  // }

  static addNotes(notes) {

    // get container all notes
    const allNotes = document.getElementById('all-notes');

    // create card
    const colElem = document.createElement('div');
    colElem.className = 'col-6 mb-4';

    colElem.innerHTML = `
    <div class="card note">
      <div class="card-body">
        <h5 class="teks-primary">${notes.taks}</h5>
        <p class="label teks-second">${notes.label}</p>
        <button class="btn btn-hapus btn-danger" style="width: 100%;">Hapus</button>
      </div>
    </div>
    `;

    // append
    allNotes.append(colElem)


  }






}


//storage


/// Event Add
const notesForm = document.getElementById('notes-form');
notesForm.addEventListener('submit', function(evt) {

  evt.preventDefault();

  // get value
  const note = document.getElementById('note').value;
  const label = document.getElementById('label').value;

  // jadikan data nya
  const notes = new Notes(note, label);

  // add
  UI.addNotes(notes);


})



// event Remove
const allNotes = document.getElementById('all-notes');

allNotes.addEventListener('click', function(evt) {


  UI.removeNotes(evt.target)

  // console.log(evt.target);

})

