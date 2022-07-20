import "reflect-metadata"
import { DataSource } from "typeorm"
import { identifications } from "./entity/identification"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "crud",
    synchronize: true,
    logging: false,
    entities: [identifications],
    migrations: [],
    subscribers: [],
})
