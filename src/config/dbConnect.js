import mongoose from "mongoose";

mongoose.connect("mongodb://alura:123@alura-shard-00-00.jdh65.mongodb.net:27017,alura-shard-00-01.jdh65.mongodb.net:27017,alura-shard-00-02.jdh65.mongodb.net:27017/alura-node?ssl=true&replicaSet=atlas-10phu7-shard-0&authSource=admin&retryWrites=true&w=majority");

const db = mongoose.connection;

export default db;