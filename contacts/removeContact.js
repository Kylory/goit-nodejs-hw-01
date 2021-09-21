const fs = require("fs/promises");
const path = require("path");
const getAllContacts = require("./getAllContacts");
const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

//Remove contact by ID
const removeContact = async (id) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((item) => item.id == id);

  if (index < 0) {
    return null;
  }

  const newContacts = contacts.filter((item) => item.id != id);
  fs.writeFile(contactsPath, JSON.stringify(newContacts));

  return true;
};

module.exports = removeContact;
