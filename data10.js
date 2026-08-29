const fs = require("fs");
// Load data from JSON file
const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString();
        return JSON.parse(dataJson);
    }
    catch {
        return [];
    }
};
// Save data to JSON file
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData);
    fs.writeFileSync("data10.json", saveAllDataJson);
};
// Add person
const addPerson = (id, fname, lname, city, age) => {
    const allData = loadInfo();
    const duplicatedData = allData.filter((obj) => {
        return obj.id === id;
    });
    if (duplicatedData.length === 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,
            age: age
        });
        saveAllData(allData);
        console.log("Person added successfully");
    } 
    else {
        console.log("ERROR: DUPLICATED ID");
    }
};
// Delete specific person
const deleteData = (id) => {
    const allData = loadInfo();
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id;
    });
    if (dataToKeep.length === allData.length) {
        console.log("ID NOT FOUND");
    } 
    else {
        saveAllData(dataToKeep);
        console.log("Person deleted successfully");
    }
};
// Delete all people
const deleteAllData = () => {
    saveAllData([]);
    console.log("All people deleted successfully");
};
// Read specific person
const readData = (id) => {
    const allData = loadInfo();
    const itemNeeded = allData.find((obj) => {
        return obj.id == id;
    });
    if (itemNeeded) {
        console.log(itemNeeded);
    } 
    else {
        console.log("ID NEEDED NOT FOUND");
    }
};
// List all people
const listData = () => {
    const allData = loadInfo();
    if (allData.length === 0) {
        console.log("NO DATA FOUND");
        return;
    }
    allData.forEach((obj) => {
        console.log(
            `ID: ${obj.id} | Name: ${obj.fname} ${obj.lname} | Age: ${obj.age} | City: ${obj.city}`
        );
    });
};
// List full name and city
const listNamesAndCities = () => {
    const allData = loadInfo();
    if (allData.length === 0) {
        console.log("NO DATA FOUND");
        return;
    }
    allData.forEach((obj) => {
        console.log(
            `Full Name: ${obj.fname} ${obj.lname} | City: ${obj.city}`
        );
    });
};
module.exports = {
    addPerson,
    deleteData,
    deleteAllData,
    readData,
    listData,
    listNamesAndCities
};
