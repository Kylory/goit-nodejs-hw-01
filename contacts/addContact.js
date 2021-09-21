const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "..", "db", "contacts.json");
const getAllContacts = require("./getAllContacts");

//Add new contact
const addContact = async (name, email, phone) => {
  const contacts = await getAllContacts();
  const newContact = {
    id: contacts.length + 1,
    name: name,
    email: email,
    phone: phone,
  };
  const newContacts = [...contacts, newContact];
  fs.writeFile(contactsPath, JSON.stringify(newContacts));

  return newContact;
};

module.exports = addContact;
