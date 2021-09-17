const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

function read() {
  fs.readFile(contactsPath);
}

function write() {
  fs.writeFile(contactsPath, data);
}

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath);
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  fs.unlink(contactsPath, callback);
}

function addContact(name, email, phone) {
  fs.appendFile(contactsPath, {
    id: 999,
    name: name,
    email: email,
    phone: phone,
  });
}

module.exports = {
  read,
  write,
};
