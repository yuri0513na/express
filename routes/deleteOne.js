const { MongoClient } = require("mongodb");

// ⭐ここにあなたのAtlasの接続文字列を貼る
const uri = "mongodb+srv://yurinahatsushika_db_user:kTZIU7yJjpgUQGZw@test.mhjn0yc.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  const database = client.db('notes');
  const notes = database.collection('notes');

  // id=2 のノートを削除
  const result = await notes.deleteOne({ id: 2 });
  console.log(result);

  await client.close();
}

run();