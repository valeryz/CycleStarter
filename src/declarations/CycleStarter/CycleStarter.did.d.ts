import type { Principal } from '@dfinity/principal';
export interface Donation {
  'from' : Principal,
  'project_id' : bigint,
  'amount' : bigint,
}
export interface Project {
  'id' : bigint,
  'imgUrl' : string,
  'link' : string,
  'name' : string,
  'description' : string,
}
export type Result = { 'ok' : null } |
  { 'err' : string };
export interface _SERVICE {
  'balances' : () => Promise<Array<[bigint, string, bigint]>>,
  'callerPrincipal' : () => Promise<Principal>,
  'claimDonatedCycles' : (arg_0: string, arg_1: bigint) => Promise<Result>,
  'currentDonations' : () => Promise<Array<Donation>>,
  'donateCyclesToProject' : (arg_0: bigint, arg_1: bigint) => Promise<Result>,
  'getICPBalance' : () => Promise<bigint>,
  'getProjects' : () => Promise<Array<Project>>,
  'pendingDonations' : () => Promise<Array<Donation>>,
  'wallet_balance' : () => Promise<bigint>,
  'wallet_receive' : () => Promise<{ 'accepted' : bigint }>,
}
