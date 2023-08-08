if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
//importing modules
var window = require('window');
var alert = require('alert');
const express = require("express");
const dbdata = require("./model/product");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const initialize = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
// mysql connection

const path = require('path');
const connect = require("./db/connect");
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'atnom'
});
const datajson = require("./routes/products");
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
}); 

initialize.initialize(
    passport,
    email => user.find(user => user.email === email)
    , id => user.find(user => user.id === id)
)
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use("/api/products", datajson);
app.use(cors(corsOptions))
const user = []
//post  1
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

//register post
app.post("/register", checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        user.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        // add data to database\

        var sql = "INSERT INTO new_table (name, email, password) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + hashedPassword + "')";
        //if email already exist in     database

        var sql1 = "SELECT * FROM new_table WHERE email = '" + req.body.email + "'";
        connection.query(sql1, function (err, result) {
            // if email already exist
            if (err) {
                console.log(err);

                return res.redirect("/register");
            }

            if (result.length > 0) {
                console.log("email already exist");
                alert("email already exist");
                return res.redirect("/register");
            }
            else {
                connection.query(sql, function (err, result) {
                    // if email already exist'
                    if (err) {
                        console.log(err);
                        return res.redirect("/register");
                    }

                    console.log("1 record inserted");
                });
                console.log(user);
                res.redirect("/login")
            }
        });


    } catch {
        res.redirect("/register")
    }
})
//login post
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}));


//routes
app.get("/getuser", checkAuthenticated, (req, res) => {
    res.json(req.user.name);
}
 
);
app.get("/", checkAuthenticated, (req, res) => {

    res.writeHead(302, {
        'Location': 'http://localhost:3000/',




    });






    res.end();













}
);


app.get("/login", checkNotAuthenticated, (req, res) => {
    res.render("login.ejs");
}
);
app.get("/register", checkNotAuthenticated, (req, res) => {

    res.render("register.ejs");
}
);

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {

        return res.redirect("/")
    }
    next()
}
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);
app.get("/getdata", (req, res) => {
    dbdata.find().then((data) => {
        res.json(data);
    }
    ).catch((err) => {
        console.log(err);
    }
    );

}
);


// End routes

app.delete("/logout", (req, res) => {
    req.logOut(req.user, err => {
        if (err) {
            return next(err);
        }

    });
    res.redirect("/login");
}

);


