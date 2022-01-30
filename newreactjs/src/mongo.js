db.movies.deleteMany({rating:8.6})

db.movies.find({}).pretty()
//projection
db.movies.find({},{name:1}) // inclusion

db.movies.find({}).count()

db.movies.find({rating:8.6}).count()

db.movies.find({},{name:1,rating:1}).sort({rating:1})//sort ascending

db.movies.find({},{name:1,rating:1}).sort({rating:1,name:-1})//sort dscending   

db.movies.find({}).sort({rating:1}).limit(2)//limit

db.movies.updateOne({name:"jai Bhim"},{$set:{rating:9.2}})

db.orders.insertMany([
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
    ])

db.orders.aggregate([{$match:{status:"urgent"}}])

{$group:{_id:"productName"}}

db.orders.aggregate([{$match:{status:"urgent"}},{$group:{_id:"$productName", total:{$sum:"$quantity"}}}])




