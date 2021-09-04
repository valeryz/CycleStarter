import Array "mo:base/Array"
actor {

    type Project = {
        id : Nat;
        name : Text;
        link : Text;
        description : Text;
        imgUrl : Text;
    };

    let projects : [Project] = [
        {
            id = 0;
            name = "NNS Calculator";
            link = "http://networknervoussystem.com/";
            description = "The Network Nervous System Calculator is a calculator that allows anyone to edit variables and estimate voting rewards based on number of proposals voted on, length of stake, accumulated maturity, and more.";
            imgUrl = "https://images.ctfassets.net/ywqk17d3hsnp/6AiSNSjxIhGrSA9lZ2uSkU/28718395b652fad5f9f3fe2924bd31fa/ICP_Neuron_Calculator_1.png?w=147&h=220&q=50&fit=fill";
        }, {
            id = 1;
            name = "Rise of the Magni";
            link = "https://riseofthemagni.com/";
            description = "Rise of the Magni, built by Toniq Labs, winner of the DSCVR hackathon for games on the Internet Computer. Buy, earn, and trade collectibles, compete in tactical battles online to earn in-game tokens, and venture through story mode to experience one of the first games built on the Internet Computer.";
            imgUrl = "//images.ctfassets.net/ywqk17d3hsnp/IvWWDbCQNSgd9T9e6UR1N/d76572125a2ae636d25b9527bfb843e3/Logo_V.3__1_.png?w=281&h=220&q=50&fit=fill";
        }, {
            id = 2;
            name = "Departure Labs";
            link = "https://github.com/DepartureLabsIC/non-fungible-token";
            description = "Departure Labs is exploring on-chain media, web native NFTs, and developing productized open internet services for developers and consumers. Departure Labs is currently developing a non-fungible token standard that leverages the unique properties of the Internet Computer and enables builders to create entire experiences from a single contract.";
            imgUrl = "//images.ctfassets.net/ywqk17d3hsnp/6XMNjEZyIypaq3zDtextjK/90cc77de64b64f9d595bf47c17f14417/DepartureOne.png?w=220&h=220&q=50&fit=fill";
        }, {
            id = 3;
            name = "Axon";
            link = "https://axon.ooo/";
            description = "A community-built neuron management solution for the Internet Computer. Multiple users can own an Axon that manages multiple neurons within the Network Nervous System, as well as delegate votes to other neurons to vote on proposals. Axon is a multi-user, multi-neuron management Canister smart contract.";
            imgUrl = "//images.ctfassets.net/ywqk17d3hsnp/1kgzyHz995RtXRbrHgUqo0/2c6fb7f1a5c20f8f2649fc3645e33c27/axon-full-logo-bg.svg";
        }, {
            id = 4;
            name = "Nuance";
            link = "https://fxnaj-yaaaa-aaaaf-qad3q-cai.ic0.app/#?canisterId=null&ViewPost=1";
            description = "Nuance is a Web3.0 blogging platform that is hosted on-chain end-to-end on the Internet Computer. Developed by Aikin Dapps, the alpha of the world’s first blogging platform to be hosted entirely on a blockchain has now launched. Nuance aims to bring NFTs into the world of editorial content ownership.";
            imgUrl = "//images.ctfassets.net/ywqk17d3hsnp/16Sevl8ZPGDzkVJGt1Ps2l/bad690f013454629b03b41d140c292ad/nu_logo-full_trans_1500.png?w=254&h=220&q=50&fit=fill";
        }, {
            id = 5;
            name = "Canlista";
            link = "https://k7gat-daaaa-aaaae-qaahq-cai.ic0.app/";
            description = "The Internet Computer community Canister registry. Find, publish and extend applications and services built on the Internet Computer. Log in with Internet Identity.";
            imgUrl = "//images.ctfassets.net/ywqk17d3hsnp/6EhWKc8ZsdqcsUCvDIAy72/85f132d319abbc0f93da70ab7ba7091a/Screen_Shot_2021-06-28_at_2.05_1.png?w=292&h=220&q=50&fit=fill";
        },
    ];

    public shared query func getProjects() : async [Project] {
        projects;
    };

     public shared query func getICPBalance() : async Int {
        // return ICP number based on principal id in msg.caller
        10;
    };
};
