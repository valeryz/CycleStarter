export const idlFactory = ({ IDL }) => {
  const Project = IDL.Record({
    'id' : IDL.Nat,
    'imgUrl' : IDL.Text,
    'link' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'getICPBalance' : IDL.Func([], [IDL.Int], ['query']),
    'getProjects' : IDL.Func([], [IDL.Vec(Project)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
