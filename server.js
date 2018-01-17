const express = require('express')
const app = express()
var unirest = require('unirest');

app.get('/api/hello', (req, res) => {
    res.json({message: "Hello World"})
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

/*
unirest.get('https://7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix:263ec09fe38de9074079e2653e93626c75e4bb4db2e4c1cb59a4f47da6daf037@7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix.cloudant.com/_all_dbs')
  .headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
  .end(function(response) {
    console.log("The list of databases are, " + JSON.stringify(response.body));
    //console.log(JSON.stringify(response));
});

// This updates the DB "mydb with the params specified next"
unirest.post('https://7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix:263ec09fe38de9074079e2653e93626c75e4bb4db2e4c1cb59a4f47da6daf037@7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix.cloudant.com/mydb')
  .headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
  .send({
    "name": "Fermín Moreno",
    "email": "fermin@email.com",
    "phone": 1234567890
  })
  .end(function(response) {
    console.log("Data posted successfully");
});

// This piece of code throws back all the content inside the DB "mydb"
unirest.get('https://7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix:263ec09fe38de9074079e2653e93626c75e4bb4db2e4c1cb59a4f47da6daf037@7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix.cloudant.com/mydb/_all_docs')
  .headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
  .end(function(response) {
    console.log( JSON.stringify(response.body));
});

// This piece of code updates de DB "mydb". It seems you need both the _id and the _rev everytime you wish to update an argument
// The _rev argument changes every time the object is changed
unirest.put('https://7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix:263ec09fe38de9074079e2653e93626c75e4bb4db2e4c1cb59a4f47da6daf037@7bcc7c6b-582c-4f17-87a8-f259adcd425f-bluemix.cloudant.com/mydb/31863d2ba9c3524a10a42a5226e457da')
  .headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
  .send({
    "_id": "31863d2ba9c3524a10a42a5226e457da",
    "_rev": "1-883daea0eaf3f8c88ef481b57f6e5219",
    "name": "Mario Cornejo",
    "email": "alejandro@email.com"
  })
  .end(function(response) {
    console.log("Data updated successfully");
});
*/
