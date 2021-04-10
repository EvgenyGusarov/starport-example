// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePost } from "./types/starportexample/tx";
import { MsgCreatePost } from "./types/starportexample/tx";
import { MsgUpdatePost } from "./types/starportexample/tx";
const types = [
    ["/EvgenyGusarov.starportexample.starportexample.MsgDeletePost", MsgDeletePost],
    ["/EvgenyGusarov.starportexample.starportexample.MsgCreatePost", MsgCreatePost],
    ["/EvgenyGusarov.starportexample.starportexample.MsgUpdatePost", MsgUpdatePost],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeletePost: (data) => ({ typeUrl: "/EvgenyGusarov.starportexample.starportexample.MsgDeletePost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/EvgenyGusarov.starportexample.starportexample.MsgCreatePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/EvgenyGusarov.starportexample.starportexample.MsgUpdatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
