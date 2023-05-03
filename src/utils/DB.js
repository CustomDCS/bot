var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'bot',
        password: 'ZebraIsAMeatball',
        server: 'localhost', 
        database: 'CustomSQL',
        trustServerCertificate: true
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        var DiscordID = '465114477012975639';
        var query = "SELECT Users.DiscordName, Users.CustomDiscordName, Roles.Name\
        FROM dbo.Users\
        INNER JOIN UsersRoles ON Users.ID = UsersRoles.UserID\
        INNER JOIN Roles ON UsersRoles.RoleID = Roles.ID\
        WHERE DiscordID = ";
        console.log(query.concat(DiscordID));
        // query to the database and get the records
        request.query(query.concat(DiscordID),
        function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});