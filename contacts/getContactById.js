const getAllContacts = require("./getAllContacts");

//Get contact by ID
const getContactById = async (id) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((item) => item.id == id);

  if (index < 0) {
    return null;
  }

  return contacts[index];
};

module.exports = getContactById;
