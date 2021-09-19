const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      (async () => {
        try {
          const contacts = await listContacts();
          console.table(contacts);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    case "get":
      (async () => {
        try {
          const oneProduct = await getContactById(id);
          if (!oneProduct) {
            throw new Error(`Contact with id ${id} not found`);
          }
          console.log(oneProduct);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    case "add":
      (async () => {
        try {
          const newContact = await addContact(name, email, phone);
          console.log("Added new contact", newContact);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    case "remove":
      (async () => {
        try {
          const result = await removeContact(id);
          if (!result) {
            throw new Error(`Contact with id ${id} not found`);
          }
          console.log(`Contact with id ${id} was removed`);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
