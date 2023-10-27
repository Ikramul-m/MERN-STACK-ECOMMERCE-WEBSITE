const app = require("./app")


app.listen(process.env.PORT,() => {

    console.log(`Serever is working on http://localhost:${process.env.PORT}`)
})

