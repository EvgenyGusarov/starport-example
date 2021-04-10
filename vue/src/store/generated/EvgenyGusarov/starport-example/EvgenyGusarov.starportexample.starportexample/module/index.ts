// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePost } from "./types/starportexample/tx";
import { MsgCreatePost } from "./types/starportexample/tx";
import { MsgUpdatePost } from "./types/starportexample/tx";


const types = [
  ["/EvgenyGusarov.starportexample.starportexample.MsgDeletePost", MsgDeletePost],
  ["/EvgenyGusarov.starportexample.starportexample.MsgCreatePost", MsgCreatePost],
  ["/EvgenyGusarov.starportexample.starportexample.MsgUpdatePost", MsgUpdatePost],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/EvgenyGusarov.starportexample.starportexample.MsgDeletePost", value: data }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/EvgenyGusarov.starportexample.starportexample.MsgCreatePost", value: data }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/EvgenyGusarov.starportexample.starportexample.MsgUpdatePost", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
