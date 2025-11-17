// Initialize Framework7 App
var app = new Framework7({
    root: '#app',
    name: 'Offline Notes App',
    id: 'com.notes.pwa',
});

document.getElementById('addNoteBtn').addEventListener('click', () => {
    app.dialog.alert('Add Note button clicked!');
});

document.getElementById('addNoteBtn').addEventListener('click', async () => {
    const title = prompt('Enter title:');
    const content = prompt('Enter content:');
    if (title && content) {
        console.log("Saving note:", title, content); // <--- confirm in console
        await addNote({ title, content });
        alert("Note saved!");
    }
});



const API_URL = "http://localhost:8080/api/notes";

document.addEventListener('DOMContentLoaded', getNotes);

function displayNotes(notes) {
    const list = document.getElementById('notesList');
    list.innerHTML = '';
    notes.forEach(note => {
        list.innerHTML += `
            <div class="card">
              <div class="card-content card-content-padding">
                <b>${note.title}</b>
                <p>${note.content}</p>
                <button class="button color-green" onclick="editNote(${note.id})">Edit</button>
                <button class="button color-red" onclick="deleteNote(${note.id})">Delete</button>
              </div>
            </div>
        `;
    });
}

function editNote(id) {
    const title = prompt('New title:');
    const content = prompt('New content:');
    if (title && content) {
        updateNote(id, { title, content });
    }
}

document.getElementById('addNoteBtn').addEventListener('click', async () => {
    const title = prompt('Enter title:');
    const content = prompt('Enter content:');
    if (title && content) {
        await addNote({ title, content });
    }
});


// Fetch all notes
async function getNotes() {
    const res = await fetch(API_URL);
    const data = await res.json();
    displayNotes(data);
}

// Add note
async function addNote(note) {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
    });
    await getNotes();
}

// Update note
async function updateNote(id, note) {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
    });
    await getNotes();
}

// Delete note
async function deleteNote(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    await getNotes();
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
