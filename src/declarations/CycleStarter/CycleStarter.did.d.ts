import type { Principal } from '@dfinity/principal';
export interface Project {
  'id' : bigint,
  'imgUrl' : string,
  'link' : string,
  'name' : string,
  'description' : string,
}
export interface _SERVICE {
  'getICPBalance' : () => Promise<bigint>,
  'getProjects' : () => Promise<Array<Project>>,
}
