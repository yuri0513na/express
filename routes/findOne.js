

const { MongoClient } = require("mongodb");

// ⭐ここにあなたのAtlasの接続文字列を貼る
const uri = "mongodb+srv://yurinahatsushika_db_user:kTZIU7yJjpgUQGZw@test.mhjn0yc.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  const database = client.db('notes');
  const notes = database.collection('notes');

  // id=1 のドキュメントを取得
  const query = { id: 1 };
  const note = await notes.findOne(query);
  console.log(note);

  await client.close();
}

run();