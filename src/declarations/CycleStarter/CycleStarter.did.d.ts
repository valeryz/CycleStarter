import type { Principal } from '@dfinity/principal';
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
  'claimDonatedCycles' : (arg_0: string, arg_1: bigint) => Promise<Result>,
  'donateCyclesToProject' : (arg_0: string, arg_1: bigint) => Promise<Result>,
  'getICPBalance' : () => Promise<bigint>,
  'getProjects' : () => Promise<Array<Project>>,
}
