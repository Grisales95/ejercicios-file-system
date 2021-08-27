//Imports de los módulos
// const users = require("./users.json");
const fs = require("fs");
const path = require("path");
const pathUsers = path.resolve("./users.json");

const readFileUsers = () => {
  //Imprimir en consola el arreglo de usuarios
  fs.promises
    .readFile(pathUsers, "utf8")
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

const writeHelloWorld = () => {
  const pathFile = path.resolve("./hello.txt");
  const data = "hello world!";
  //Escribir hello world! en el archivo hello.txt
  fs.promises
    .writeFile(pathFile, data)
    .then((result) => {
      console.log("archivo modificado");
    })
    .catch((err) => {
      console.log(err);
    });
};

const addUser = async (username) => {
  fs.promises
    .appendFile(pathUsers, username)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//No hace falta ejecutar las funciones

module.exports = {
  readFileUsers,
  writeHelloWorld,
  addUser,
};
