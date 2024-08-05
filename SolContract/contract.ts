import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const suppliedaddress = process.argv[3];
if (!suppliedaddress) {
    console.log("Please provide an address");
    process.exit(1);
}
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const address = new PublicKey(suppliedaddress);
const balance = await connection.getBalance(address) / LAMPORTS_PER_SOL;

console.log(`👌 Account has ${address} and balance is ${balance} SOL!`);