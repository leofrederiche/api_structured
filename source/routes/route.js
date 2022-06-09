const { index } = require("./index")

const nameRoute = require("./name")

const route = (app) => {
    app.route("/").get(index)

    app.route("/data").get(nameRoute.index)
    app.route("/data").post(nameRoute.insert)
    app.route("/data/:index").put(nameRoute.update)
    app.route("/data/:index").get(nameRoute.show)
    app.route("/data/:index").delete(nameRoute.destroy)
}

module.exports = { route }