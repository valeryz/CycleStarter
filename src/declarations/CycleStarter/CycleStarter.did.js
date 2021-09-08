export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Donation = IDL.Record({
    'from' : IDL.Principal,
    'project_id' : IDL.Nat,
    'amount' : IDL.Nat,
  });
  const Project = IDL.Record({
    'id' : IDL.Nat,
    'imgUrl' : IDL.Text,
    'link' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'balances' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Text, IDL.Nat))],
        [],
      ),
    'callerPrincipal' : IDL.Func([], [IDL.Principal], []),
    'claimDonatedCycles' : IDL.Func([IDL.Text, IDL.Nat64], [Result], []),
    'currentDonations' : IDL.Func([], [IDL.Vec(Donation)], ['query']),
    'donateCyclesToProject' : IDL.Func([IDL.Nat, IDL.Nat], [Result], []),
    'getICPBalance' : IDL.Func([], [IDL.Int], ['query']),
    'getProjects' : IDL.Func([], [IDL.Vec(Project)], ['query']),
    'pendingDonations' : IDL.Func([], [IDL.Vec(Donation)], ['query']),
    'wallet_balance' : IDL.Func([], [IDL.Nat], []),
    'wallet_receive' : IDL.Func(
        [],
        [IDL.Record({ 'accepted' : IDL.Nat64 })],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
