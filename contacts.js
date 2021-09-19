const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

//Get all contacts
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);

  return contacts;
};

//Get contact by ID
const getContactById = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id == id);

  if (index < 0) {
    return null;
  }

  return contacts[index];
};

//Add new contact
const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
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

//Remove contact by ID
const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id == id);

  if (index < 0) {
    return null;
  }

  const newContacts = contacts.filter((item) => item.id != id);
  fs.writeFile(contactsPath, JSON.stringify(newContacts));

  return true;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
