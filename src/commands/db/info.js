//const WebSocket = require('ws')
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
});

module.exports = {
  name: 'info',
  description: 'Displays your current role',

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    //const ping = reply.createdTimestamp - interaction.createdTimestamp;
    
    var sql = require("mssql");
    var results;
    // this needs to go in .env eventually
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

        //if(!interaction.guild) return; // Returns as there is no guild
        var guild = interaction.guild.id;
        var userID = interaction.user.id;
        // create Request object
        //var request = new sql.Request();
          
        //var DiscordID = '465114477012975639';
        //var conn = sql.connect(config);
        //conn.connect().then(function(conn) {
        //console.log(userID);

        sql.connect(config, function (err) {
          if (err) console.log(err);
          var request = new sql.Request();
          request.input('DiscordID', sql.VarChar(50), userID);
          //request.output('NameNew', sql.VarChar(30), 'Cbe');
          
          var query =
          "SELECT Users.DiscordName, Users.CustomDiscordName, Roles.Name\
          FROM dbo.Users\
          INNER JOIN UsersRoles ON Users.ID = UsersRoles.UserID\
          INNER JOIN Roles ON UsersRoles.RoleID = Roles.ID\
          WHERE DiscordID = ";
          //console.log(query.concat(DiscordID))
          request.query(query.concat(userID),
          function (err, recordset) {
          
          if (err) console.log(err)

          var roleName = recordset['recordset'][0]['Name'];
          var discordName = recordset['recordset'][0]['DiscordName'];
          var customDiscordName = recordset['recordset'][0]['CustomDiscordName'];

          // send records as a response
          //res.send(recordset);
          interaction.editReply(
              `Hello ${discordName}, your role is ${roleName}`,
            );
          });

          // request.execute('DisplayUsersRoles').then(function(err, result, returnValue) {
          //   console.dir(result);
            
          //   interaction.editReply(
          //     `SQL Dump: 
          //     returnValue: ${returnValue}
          //     recordsets: ${result.recordsets}`,
          //   );
          //   //console.dir(result);
          //   console.dir(err);
          // }).catch(function(err) {
          //   console.log(err);
          // });
        });

        // var query =
        //     "SELECT Users.DiscordName, Users.CustomDiscordName, Roles.Name\
        //     FROM dbo.Users\
        //     INNER JOIN UsersRoles ON Users.ID = UsersRoles.UserID\
        //     INNER JOIN Roles ON UsersRoles.RoleID = Roles.ID\
        //     WHERE DiscordID = ";
        //     console.log(query.concat(userID))
        //     request.query(query.concat(userID),
        //     function (err, recordset) {
            
        //     if (err) console.log(err)

        //     // send records as a response
        //     res.send(recordset);
            
        // });
    });
  },
};