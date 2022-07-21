# RUMEL CORTEZ SIMPLE CRUD PROJECT Build with TypeORM AND EXPRESS JS

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Download PostgreSQL database and import the `crud.sql` file attached inside the file
4. Run `npm start` command
5. You can now access the code via `http://localhost:3000/identification`

# Routes to use 

* fetch all - `GET` : `http://localhost:3000/identification`
* fetch by id - `GET` : `http://localhost:3000/identification/:id`
* update data - `PUT` : `http://localhost:3000/identification/:id`
* create data - `POST` : `http://localhost:3000/identification`
* delete data - `DELETE` : `http://localhost:3000/identification/:id`