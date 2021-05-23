
const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {


    // Create a Note
    const note = new Note(req.body
        
    //     {
    //     name: req.body.name || "UngroceryItemd Note",
    //     image: req.body.image,
    //     price: req.body.price,
    //     description: req.body.description
    // }
    );

    // Save Note in the database
    note.save()
        .then(data => {
            res.send({ "result": "success" });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });

};

// exports.findCart = (req, res) => {
//     Note.find()
//         .then(notes => {
//             res.send(notes);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving notes."
//             });
//         });

// };


// // Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//     Note.findByIdAndRemove(req.body._id)
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.body._id
//                 });
//             }
//             res.send({ "result": "success" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.body._id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Could not delete note with id " + req.body._id
//             });
//         });

// };

// exports.deleteAll = (req, res) => {
//     Note.deleteMany()
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.body._id
//                 });
//             }
//             res.send({ "result": "success" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.body._id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Could not delete note with id " + req.body._id
//             });
//         });

// };