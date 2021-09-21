const {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const asyncHandler = require("./utils/asyncHandler");

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

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // (async () => {
      //   try {
      //     const contacts = await getAllContacts();
      //     console.table(contacts);
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      // })();

      (async () => {
        const contacts = await asyncHandler(getAllContacts());
        console.table(contacts);
      })();
      break;

    case "get":
      // (async () => {
      //   try {
      //     const oneProduct = await getContactById(id);
      //     if (!oneProduct) {
      //       throw new Error(`Contact with id ${id} not found`);
      //     }
      //     console.log(oneProduct);
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      // })();

      (async () => {
        const oneProduct = await asyncHandler(getContactById(id));
        if (!oneProduct) {
          throw new Error(`Contact with id ${id} not found`);
        }
        console.table(oneProduct);
      })();
      break;

    case "add":
      // (async () => {
      //   try {
      //     const newContact = await addContact(name, email, phone);
      //     console.log("Added new contact", newContact);
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      // })();

      (async () => {
        const newContact = await asyncHandler(addContact(name, email, phone));
        console.log("Added new contact", newContact);
      })();
      break;

    case "remove":
      // (async () => {
      //   try {
      //     const result = await removeContact(id);
      //     if (!result) {
      //       throw new Error(`Contact with id ${id} not found`);
      //     }
      //     console.log(`Contact with id ${id} was removed`);
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      // })();

      (async () => {
        const result = await asyncHandler(removeContact(id));
        if (!result) {
          throw new Error(`Contact with id ${id} not found`);
        }
        console.log(`Contact with id ${id} was removed`);
      })();
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
