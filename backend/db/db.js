const mongoose = require("mongoose")

const main = async () => {
  await mongoose.connect("mongodb+srv://victoralves:mica1234@cluster0.hcsor8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Conectou!");
  }).catch(() => {
    console.log("Erro ao conectar!");
  })
}
main()

module.exports = mongoose