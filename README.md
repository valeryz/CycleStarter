# CycleStarter

## Donations to IC projects

CycleStarter is a canister that accepts donations to worthy IC
projects. In a way, it is intended to be an on-chain version of https://dfinity.org/showcase with an option to donate cycles (in the future, ICP).

## No UI Frontend

At the moment, we have only 20%-30% of what could be done in a Hackathon, because we are missing team members and ran into blockers with tools :) In particular, we couldn't finish the frontend. For now, all interaction with `CycleStarter` must be via the SDK.

## How to use Cycle Starter

`CycleStarter` is deployed at canister ID `x5dnh-yaaaa-aaaaj-aaaqa-cai`.

1. Get the list of all projects:

```console
$ dfx canister --network ic call x5dnh-yaaaa-aaaaj-aaaqa-cai getProjects
```

This returns a list of projects.  Choose the one you are willing to support. Suppose we choose number two here.


2. Declare that you are willing to support a project and send it some cycles:
```console
$ dfx canister --network ic call x5dnh-yaaaa-aaaaj-aaaqa-cai donateCycles '(2, 1000000, "Best of luck with your project")'
(variant { ok = record { amount = 1_006_355 : nat } })
```
You can check that there is a pending donation in the canister now:
```console
$ dfx canister --network ic call x5dnh-yaaaa-aaaaj-aaaqa-cai pendingDonations
(
  vec {
    record {
      from = principal "arax4-whwdp-vhmtv-4eawt-pzdg5-jkxp3-x434e-ygygi-2gvtt-zphaa-aqe";
      message = "best of luck with your project";
      project_id = 2 : nat;
      amount = 1006_355 : nat;
   };
  },
)
```

3. Note the exact number of cycles that CycleStarter wants you to send to it. By that extra amount of (6355) CycleStarter will determine to which projects funds are sent.  Send this number of cycles to the CycleStarter canister.
```console
$ dfx wallet --network ic send x5dnh-yaaaa-aaaaj-aaaqa-cai 1006355
```

4. Check that your donation is now confirmed.
```console
$ dfx canister --network ic call x5dnh-yaaaa-aaaaj-aaaqa-cai currentDonations
```

You can also check the total balance of donated cycles:
```console
$ dfx canister --network ic call x5dnh-yaaaa-aaaaj-aaaqa-cai wallet_balance
```

## TODO

1. A Mechanims for projects to claim their funds.
2. UI :)
3. Making the list of projects not static, but rather collaboratively curated by the community.


## Development details

### Running the project locally

- make sure you have node and dfx installed
- run "npm install"
- start the dfx environment
- install the Internet Identity Canister locally through the instructions in this repo: https://github.com/dfinity/internet-identity
- in index.tsx replace the canister ID in "http://localhost:8000?canisterId=rwlgt-iiaaa-aaaaa-aaaaa-cai" on line 42 with the canister ID of the Internet Idenitity on your own environment
- run dfx deploy

##

technologies used for the frontend:

React: https://reactjs.org/
TailWindcss: https://tailwindcss.com/
