
// Notes Class
class Notes {
  constructor(taks, label, id) {
    this.taks = taks;
    this.label = label;
  }
}


// UI
class UI {

  static displayNotes() {

    // display notes from storage

    const notes = Store.getStorage();

    notes.forEach((note) => UI.addNotes(note))
    console.log(notes);

  }

  static addNotes(notes) {

    // get container all notes
    const allNotes = document.getElementById('all-notes');

    // create card
    const colElem = document.createElement('div');
    colElem.className = 'col-6 mb-4';

    colElem.innerHTML = `
    <div class="card note shadow-sm">
      <div class="card-body">
        <h5 class="teks-primary title-note">${notes.taks}</h5>
        <p class="label teks-second">${notes.label}</p>
        <button class="btn btn-hapus btn-danger" style="width: 100%;">Hapus</button>
      </div>
    </div>
    `;

    // append
    allNotes.append(colElem)


  }

  static removeNotes(elem) {

    if(elem.classList.contains('btn-hapus')) {

      // delete pake dom Transversal
      elem.parentNode.parentNode.parentNode.remove()

    }

  }

  static clearFields() {

    // get value
    const note = document.getElementById('note').value = '';
    const label = document.getElementById('label').value = '';

  }


}


//// Storage

class Store {

  static getStorage(){

    let notes;
    // checks
    if(localStorage.getItem('notes') === null) {
      notes = [];
    } else {
      notes = JSON.parse(localStorage.getItem('notes'));
    }


    // array 
    return notes;

  }

  static addNotesStore(note) {

    // get array notes
    let notes = Store.getStorage();

    // isi yg baru
    notes.push(note);

    //save it
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log(notes);

  }

  static removeNotesStore(elemNote) {

    // get array notes
    let notes = Store.getStorage();

    // get taks
    const taks = elemNote.previousElementSibling.previousElementSibling.textContent;

    notes.forEach((n, index) => {
      if(taks == n.taks) {
        notes.splice(index, 1);
      }
    })
    
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log(taks);

  }

}



//// Event Display
document.addEventListener("DOMContentLoaded", UI.displayNotes());


/// Event Add
const notesForm = document.getElementById('notes-form');
notesForm.addEventListener('submit', function(evt) {

  evt.preventDefault();

  // get value
  const note = document.getElementById('note').value;
  const label = document.getElementById('label').value;

  // validate
  if(note === '' || label === '') {
    alert('gabisa kosong maap');
  } else {

    // create instance / object
    const newNotes = new Notes(note, label);

    // add
    UI.addNotes(newNotes);

    // store
    Store.addNotesStore(newNotes);

    // clear
    UI.clearFields();

  }

  

})



// event Remove
const allNotes = document.getElementById('all-notes');

allNotes.addEventListener('click', function(evt) {


  // remove
  UI.removeNotes(evt.target)

  // remove from storage
  Store.removeNotesStore(evt.target)

  // console.log(evt.target);

})
