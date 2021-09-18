const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
// function listContacts() {
//   fs.readFile(contactsPath, "utf-8")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));
// }

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id == id);

  if (index < 0) {
    return null;
  }
  return contacts[index];
};

function removeContact(contactId) {
  fs.unlink(contactsPath, callback);
}

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: contacts.length + 1,
    name: name,
    email: email,
    phone: phone,
  };
  const newContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  // console.log("Added new contact");
  return "Added new contact";
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
