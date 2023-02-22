# WhatsApp Bot

## Installation
1. Clone this repository
2. Install the required packages by running `npm install`
3. Run the bot using `node bot.js`
4. Scan the QR code with WhatsApp (link a device)

Now you're ready to go! People can send you messages, and the bot will respond to them

## Note
By default, whatsapp-web.js does not save session information. This means that you would have to scan the QR code to reauthenticate every time you restart the client. If you'd like to persist the session, you can pass an authStrategy as a client option.
By default, the relevant session files are stored under a .wwebjs_auth directory, but you can change this by specifying the dataPath option when instantiating LocalAuth.

Once your whatsapp account is connected, if you want to disconnect it, just delete the `.wwebjs_auth` folder

## Disclaimer
This bot uses Puppeteer to run a real instance of Whatsapp Web to avoid getting blocked.

NOTE: We can't guarantee that you won't be blocked using this method, although it does work.

WhatsApp does not allow bots or unofficial clients on its platform, so this should not be considered completely safe.
