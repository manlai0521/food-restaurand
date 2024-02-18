import  express  from 'express';
import mysql from 'mysql'
import cors from 'cors'
// import session from "express-session"
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(
      {
    origin:["http://localhost:19006"],
    methods: ["POST, GET"],
    credential: true
    }

));
  

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'signup'
})



// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: false,
//         maxAge: 1000 * 60 * 60 *24
//     }
// }))

// app.get('/', (req, res)=>{
//     if (req.session.role){
//         return res.json({valid: true, role: req.session.role})

//     } else {
//         return res.json({valid: false })
//     }
// })

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql, [values], (err, data) => {
//         if(err) {
//             return res.json("Error");
//         }
//         return res.json(data);
//     } )
// } )



// app.get("/", (req, res)=> {
//     const sql = "SELECT  * FROM login";
//     db.query(sql, (err, result) =>{
//         if(err) return res.json({Message: "error inside"});
//         return res.json(result);     
//     })
// } )





// app.get('/logout', (req, res ) => {
//     req.session.destroy();
//     return res.json("success")
// })


// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql, (err, result) =>{
//         if(err) return res.json({Message: "error inside"});
//         return res.json(result);   
//     })
// } )







//Хоол нэмэх хэсэг




app.get("/", (req, res)=> {
    const sql = "SELECT  * FROM food";
    db.query(sql, (err, result) =>{
        if(err) return res.json({Message: "error inside"});
        return res.json(result);     
    })
} )

app.post('/food', (req, res)=>{
    const sql = "INSERT INTO food (`productName`,`price`,`description`,`productType`, `productImage`) VALUES (?)";
    console.log(req.body)
    const vlaues = [
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.type,
        req.body.image
    ]
    db.query(sql, [vlaues], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})


app.get('/read/:id', (req, res)=> {
    const sql = "SELECT  * FROM food  WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "error inside"});
        return res.json(result);     
    })
} )
app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE food SET `productName`=?, `Price`=?, `productType`=?, `Description`=?, `productImage`=? WHERE ID=?';
    const id = req.params.id;
    db.query(sql, [req.body.name, 
        req.body.price,
        req.body.description,
        req.body.type,
        req.body.image, id ], (err, result) => {
            if(err) return res.json({Message: 'error inside server'});
            return res.json(result);
        }) 
})


app.delete('/delete/:id', (req, res ) => {
    const sql = "DELETE  FROM food WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
            if(err) return res.json({Message: 'error inside server'});
            return res.json(result);
        }) 
})

  



app.listen(8081, ()=> {
    console.log("connect to the server")
})