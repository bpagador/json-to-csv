# json-to-csv

* userList.csv = the logic to generate this file is all in app.js
  * really wanted to try json2csv npm package to see if it would work -- it did!
* userList.json = used this file to import into MongoDB Compass connected to a MongoAtlas cluster
* chargesTomorrow.json = all users with payments due tomorrow 
  * used db.csv-json.find({'charges.datetime' : '2020-11-23T00:00:00.000Z'}) in MongoDB Compass to filter and export 
* delinquentList.json = all users with payments due today (11/23 and any date prior)
  * used db.csv-json.find( {'charges.datetime':{$lte:'2020-11-23T00:00:00.000Z'}}) in MongoDB Compass to filter and export 
