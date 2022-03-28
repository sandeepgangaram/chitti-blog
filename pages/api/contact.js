import { MongoClient } from "mongodb";

async function handler(req, res) {
  const { method, body } = req;

  if (method === "POST") {
    const { email, name, message } = body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422), json({ messgae: "Invalid input" });
      return;
    }

    //   Store in DB

    const newMessage = {
      email,
      name,
      message,
    };

    let uri;
    //   WRITE CODE TO SEE WHICH IS DEVELOPMENT OR PROD. ALTERNATIVELY WE CAN USE .env.production.local

    uri = process.env.MONGO_URI_DEV;

    let client;
    try {
      client = await MongoClient.connect(uri);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
