const { MongoClient } = require("mongodb");

// ⭐ここにあなたのAtlasの接続文字列を貼る
const uri = "mongodb+srv://yurinahatsushika_db_user:kTZIU7yJjpgUQGZw@test.mhjn0yc.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  const database = client.db('notes');
  const notes = database.collection('notes');

  // id=1 のノートを更新
  const result = await notes.replaceOne(
    {
      id: 1
    },
    {
      id: 1,
      title: 'ノート１のタイトル更新しました',
      subTitle: 'ノート１のサブタイトルです',
      bodyText: 'ノート１の本文です'
    }
  );

  console.log(result);

  await client.close();
}

run();