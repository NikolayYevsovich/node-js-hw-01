const contacts = require("./contacts");
const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const searchedContact = await contacts.getContactById(id);
      console.log(searchedContact);
      break;

    case "add":
      const createdContact = await contacts.addContact({ name, email, phone });
      console.log(createdContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("--action <type>")
  .option("--id <type>")
  .option("--name <type>")
  .option("--email <type>")
  .option("--phone <type>");

program.parse();

const options = program.opts();

invokeAction(options);
