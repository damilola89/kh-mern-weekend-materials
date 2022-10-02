// import mongodb, express, cors, body-parser
let app = require("express")();
let cors = require("cors");
let parser = require("body-parser");
let mongoClient = require("mongodb").MongoClient;
let dbUrl = "mongodb://localhost:27017";
let PORTNO = 9091;

// run the server
app.listen(PORTNO, () => console.log(`Access Webservice in ${PORTNO}`));

// use body parser & cors
app.use(parser.json());
app.use(cors());

// storing the records
app.post("/users", (request, response) => {
    mongoClient.connect(dbUrl, { useNewUrlParser: true}, 
        (error, client) => { 
            if(error) throw error;
            else {
                let data = request.body;
                let db = client.db("mydb");
                db.collection("users")
                .insertOne(data)
                .then(result => {client.close(); response.status(200).json(result); })
                .catch(err => {client.close(); response.status(404).json(err)});
            }
        });
});

// findAll the records
app.get("/users", (request, response) => {
    mongoClient.connect(dbUrl, { useNewUrlParser: true }, 
        (error, client) => { 
            if(error) throw error;
            else {
                let db = client.db("mydb");
                let cursor = db.collection("users").find();
                let users = [];
                /*
                forEach 1st callback executes on each iteration by passing iterated item
                forEach 2nd callback executes at the end of iteration
                */
                cursor.forEach((doc) => users.push(doc), () => {
                    client.close();
                    response.json(users);
                });
            }
        });
});
// fetch user by id
app.get("/users/:id", (request, response) => { 
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => { 
        if(error) throw error;
        else {
            let db = client.db("mydb");
            let id = parseInt(request.params.id);
            db.collection("users").findOne({_id: id})
            .then(result => {
                client.close(); 
                if(result != undefined) {
                    response.status(200).json(result);
                } else {
                    response.status(404).json({"error":`User with an id ${id} not found`})
                }
            })
            .catch(err => { 
                client.close(); 
                response.status(404).json({"error":"User Fetch Failed"})
            });
        }
    });
});
// update user phone by id
app.put("/users/:id/:phone", (request, response) => { 
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => { 
        if(error) throw error;
        else {
            let db = client.db("mydb");
            let id = parseInt(request.params.id);
            let ph = parseInt(request.params.phone);
            db.collection("users").updateOne({_id: id}, {$set:{phone: ph}})
            .then(result => {
                client.close();
                response.json(result);
            })
            .catch(err => { 
                client.close;
                response.json(err);
            });
        }
    })
})
// delete the user by id
app.delete("/users/:id", (request, response) => { 
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, 
        (error, client) => {
            if(error) 
            throw error;
            else {
                let db = client.db("mydb");
                let id = parseInt(request.params.id);
                db.collection("users").deleteOne({_id: id})
                .then(result => {
                        client.close();
                        response.status(200).json(result);
                    }
                ).catch(
                    err => {
                        client.close();
                        response.status(404).json(result);
                    }
                )
            }
        });
})