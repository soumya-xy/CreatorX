# Xero - A Patreon-like Platform Powered by Aptos Blockchain

Xero is a decentralized platform designed to revolutionize the way content creators connect with their fans. Built on the Aptos blockchain, our platform ensures seamless payments, reduced fees, and complete transparency, empowering creators to focus on their content without worrying about high platform commissions.

---
![alt text](https://github.com/stark0908/Xero/blob/main/Features.png?raw=true)
---
## Features

1. **Connect Wallet:** Effortlessly connect your Aptos-compatible wallet (e.g., Petra) to interact with the platform.
2. **Decentralized Payments:** Secure and transparent payments using the Aptos blockchain.
3. **Low Fees:** Minimized transaction costs compared to traditional platforms.
4. **Faucet Integration:** Fund accounts for testing on the Aptos testnet.
5. **Support for NFTs:** Creators can mint NFTs representing exclusive content or perks, providing unique value to supporters.
6. **Content Ownership:** Creators can upload their content to decentralized storage systems (e.g., IPFS or Arweave) to ensure censorship resistance and full ownership.
7. **Future Expansion:** Support for content subscription models and more.

---
![alt text](https://github.com/stark0908/Xero/blob/main/Flow.png?raw=true)
---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js (using Vite for development)
- **Blockchain:** Aptos blockchain
- **SDK:** [@aptos-labs/ts-sdk](https://www.npmjs.com/package/@aptos-labs/ts-sdk)
- **Testing Network:** Aptos Testnet

---

## Project Structure

```
|-- public/             # Static assets (e.g., images, fonts)
|-- src/                # Source code
    |-- components/     # React components
    |-- pages/          # React pages
    |-- index.js        # Entry point for React
    |-- App.js          # Main React component
    |-- styles/         # CSS or Tailwind styles
    |-- utils/          # Utility functions (e.g., wallet integration, API calls)
|-- package.json        # Project dependencies and scripts
|-- package-lock.json   # Dependency lock file
|-- README.md           # Project documentation
```

---

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

- **Node.js**: Ensure Node.js (v16 or later) is installed on your system.
- **npm**: Comes bundled with Node.js.

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/stark0908/Xero.git
   cd Xero
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open in your browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## Usage

### Connecting Your Wallet

1. Open the application in your browser.
2. Click the **"Connect Wallet"** button.
3. Use your Aptos-compatible wallet (e.g., Petra) to connect.

### Uploading Content (User Perspective)

1. As a creator, go to the **"Upload Content"** section in the application.
2. Select your content file (e.g., an image, video, or document).
3. Once uploaded, the content is stored securely on decentralized platforms like IPFS or Arweave.
4. Optionally, choose to mint an NFT that represents ownership or grants exclusive access to the uploaded content.
5. Share the NFT or content link with your audience for access.

### Sending Payments

1. Enter the recipient's wallet address and the amount.
2. Click **"Send Payment"**.
3. The transaction will be processed on the Aptos blockchain.

---

## Important Notes

- **Private Key:** For development purposes, you may use a test private key. Do **NOT** use your actual private key in development mode.
- **Aptos Faucet:** Use the [Aptos Faucet](https://faucet.devnet.aptoslabs.com/) to fund your test wallet.

---

## Troubleshooting

1. **Error: "Account address is undefined."**

   - Ensure the private key provided is valid and correctly formatted.
   - Double-check the `Buffer.from(privateKeyHex, 'hex')` implementation.

2. **Uncaught SyntaxError: Cannot use import statement outside a module**

   - Ensure you're running the project using Vite or a compatible development environment.

3. **Error: Failed to connect to wallet.**

   - Ensure your Aptos wallet (e.g., Petra) is installed and properly configured.

---

## Contributing

We welcome contributions to improve the project. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements

- [Aptos Labs](https://aptoslabs.com/) for their blockchain and SDK.
- The open-source community for tools and libraries.

---

🚀

