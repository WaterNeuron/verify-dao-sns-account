import { encodeIcrcAccount } from "@dfinity/ledger-icrc";
import { SubAccount } from "@dfinity/ledger-icp";
import { Principal } from "@dfinity/principal";

// Change this to your DAO governance canister
const gov_canister_id = "zqfso-syaaa-aaaaq-aaafq-cai";

const to_subaccount = SubAccount.fromPrincipal(
  Principal.fromText(gov_canister_id)
).toUint8Array();

const account = {
  owner: Principal.fromText("ipcky-iqaaa-aaaaq-aadma-cai"), // WTN Swap canister
  // https://dashboard.internetcomputer.org/canister/ipcky-iqaaa-aaaaq-aadma-cai

  subaccount: to_subaccount,
};

console.log("Text account: ", encodeIcrcAccount(account));
