const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "..", "db", "contacts.json");

//Get all contacts
const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);

  return contacts;
};

module.exports = getAllContacts;
