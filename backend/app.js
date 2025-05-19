import express from "express"
import MoviesRoutes from "./src/routers/Movies.js"
import cookieParser from "cookie-parser"
import EmployeesRoutes from "./src/routers/Employees.js"
import ClientsRoutes from "./src/routers/Clients.js"
import RegisterClients from "./src/routers/RegisterClients.js"
import RegisterEmployees from "./src/routers/RegisterEmployees.js"
import LoginRoutes from "./src/routers/login.js"
import LogoutRoutes from "./src/routers/logout.js"
import RecoveryPasswordRoutes from "./src/routers/recoveryPassword.js"

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/Movies", MoviesRoutes)
app.use("/api/Employees", EmployeesRoutes)
app.use("/api/Clients", ClientsRoutes)
app.use("/api/RegisterClients",RegisterClients)
app.use("/api/RegisterEmployees",RegisterEmployees)
app.use("/api/login", LoginRoutes)
app.use("/api/logout", LogoutRoutes)
app.use("/api/recoveryPassword", RecoveryPasswordRoutes)

export default app;