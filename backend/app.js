import express from "express"
import MoviesRoutes from "./src/routers/Movies.js"
import cookieParser from "cookie-parser"
import CustomerRoutes from "./src/routers/Customer.js"
import ClientsRoutes from "./src/routers/Clients.js"
import RegisterClients from "./src/routers/RegisterClients.js"
import RegisterCustomer from "./src/routers/RegisterCustomer.js"

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/Movies", MoviesRoutes)
app.use("/api/Customer", CustomerRoutes)
app.use("/api/Clients", ClientsRoutes)
app.use("/api/RegisterClients",RegisterClients)
app.use("/api/RegisterClients",RegisterCustomer)

export default app;