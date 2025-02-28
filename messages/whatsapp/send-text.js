require('dotenv').config({path: __dirname + '/../../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH

const TO_NUMBER = process.env.TO_NUMBER
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER
const BASE_URL = process.env.BASE_URL

const Vonage = require('@vonage/server-sdk')
const WhatsAppText = require('@vonage/server-sdk/lib/Messages/WhatsAppText');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
}, {
  apiHost: BASE_URL
})

vonage.messages.send(
  new WhatsAppText(
    "This is a WhatsApp Message text message sent using the Messages API",
    TO_NUMBER,
    WHATSAPP_NUMBER
  ),
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.message_uuid);
    }
  }
);
