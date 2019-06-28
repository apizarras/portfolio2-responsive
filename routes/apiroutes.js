var contacts = require("../models/contacts.js");

// Routes
// =============================================================
// module.exports = function(app) {
//   // If a user sends data to add a new contact...
//   app.post("/", function(req, res) {
//     // Take the request...
//     var contact = req.body;

//     // Create a routeName

//     // Using a RegEx Pattern to remove spaces from contact.name
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     var routeName = contact.name.replace(/\s+/g, "").toLowerCase();

//     // Then add the contact to the database using sequelize
//     contact.create({
//       routeName: routeName,
//       name: contacts.name,
//       email: contacts.email,
//       subject: contacts.subject,
//       message: contacts.message
//     });

//     res.status(204).end();
//   });
// };