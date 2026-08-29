const fs = require("fs");
const yargs = require("yargs");
const data10 = require("./data10");

// ADD PERSON
yargs.command({
    command: "add",
    describe: "to add a person",
    builder: {
        id: {
            describe: "Person ID",
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "First Name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "Last Name",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: "City",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Age",
            demandOption: true,
            type: "number"
        }

    },
    handler: (x) => {
        data10.addPerson(
            x.id,
            x.fname,
            x.lname,
            x.city,
            x.age
        );
    }
});
// DELETE SPECIFIC PERSON
yargs.command({
    command: "delete",
    describe: "to delete a specific person",
    builder: {
        id: {
            describe: "Person ID",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        data10.deleteData(x.id);
    }
});
// DELETE ALL PEOPLE
yargs.command({
    command: "delete-all",
    describe: "to delete all people",
    handler: () => {
        data10.deleteAllData();
    }
});
// READ SPECIFIC PERSON
yargs.command({
    command: "read",
    describe: "to read a specific person",
    builder: {
        id: {
            describe: "Person ID",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) => {
        data10.readData(x.id);
    }
});
// LIST ALL PEOPLE
yargs.command({
    command: "list",
    describe: "to list all people",
    handler: () => {
        data10.listData();
    }
});
// LIST FULL NAME AND CITY
yargs.command({
    command: "names",
    describe: "to show full name and city",
    handler: () => {
        data10.listNamesAndCities();
    }
});
yargs.parse();
