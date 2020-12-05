var fs = require("fs");
let notesD = getNotes();

function getNotes() {
  let data = fs.readFileSync("./db/db.json", "utf-8");
  let notes = JSON.parse(data)
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = i
  }
  return notes;
}

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    notesD = getNotes();
    res.json(notesD);
  })

  app.post("/api/notes", function (req, res) {
    notesD.push(req.body);
    fs.writeFileSync("./db/db.json",JSON.stringify(notesD), "utf-8");
    res.json(true);
  })

  app.delete("/api/notes/:id", function (req, res) {
    const reqId = req.params.id;
    console.log(reqId);
    let eraseNote = notesD.filter(note => {
      return note.id != reqId;
    });
    console.log(eraseNote)
    const idx = notesD.indexOf(eraseNote)

    notesD.splice(idx, 1);

    fs.writeFileSync('./db/db.json', JSON.stringify(notesD), 'utf8');
    res.json("Note deleted");
  })
}