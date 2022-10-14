import {listPaginatedLaureates} from "../controllers/laureates_controller.js";

const port = process.env.PORT;

export const swaggerDocs = {
    swagger: "2.0",
    info :{
        title: "API Documentation",
        description: "Realised by VALENNE Nathan X Toillon Samuel",
        contact: {
            name: "VALENNE Nathan X Toillon Samuel"
        }
    },
    servers: [`http://localhost:${port}/`],
    apis : ["server.js", "./routers/*.js"],
    paths : {
        "/laureates": {
            get: {
                tags :["All laureates"],
                description: "List all laureates (paginated)",
                responses : listPaginatedLaureates
            }
        }
    }
}