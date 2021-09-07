export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Project = IDL.Record({
    'id' : IDL.Nat,
    'imgUrl' : IDL.Text,
    'link' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'claimDonatedCycles' : IDL.Func([IDL.Text, IDL.Nat], [Result], []),
    'donateCyclesToProject' : IDL.Func([IDL.Text, IDL.Nat], [Result], []),
    'getICPBalance' : IDL.Func([], [IDL.Int], ['query']),
    'getProjects' : IDL.Func([], [IDL.Vec(Project)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
