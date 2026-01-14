var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');

// ★ あなたのAtlasの接続文字列に書き換えてね！
const uri = "wwwwwwwwwwwwww";
const client = new MongoClient(uri);

// 必要なときだけ接続する関数
async function connectClient() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
    console.log('MongoDB connected');
  }
}

/**
 * GET /notes
 */
router.get('/', async (req, res) => {
  try {
    console.log('GET /notes called');

    await connectClient();

    // DB名 notes に変更（testじゃない！）
const database = client.db('notes');        // ← ここを 'notes' にする
const notes = database.collection('notes');

// id=1 のデータを取得
const query = { id: 1 };                   // ← ここを { id: 1 } にする
const note = await notes.findOne(query);
console.log('note ->', note);

if (!note) {
  return res.status(404).json({ error: 'Note not found' });
}

res.json(note);

   
  } catch (error) {
    console.error('ERROR in /notes:', error);
    res.status(500).json({
      message: 'Server error',
      errorName: error.name,
      errorMessage: error.message,
    });
  }
});

module.exports = router;