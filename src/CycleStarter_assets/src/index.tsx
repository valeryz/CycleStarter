import { render } from "react-dom";
import { Popover, Transition } from "@headlessui/react";
import { AuthClient } from "@dfinity/auth-client";
import { Fragment, useEffect, useState } from "react";
import Projects from "./components/Projects";
import "../assets/main.css";
import DonateModal from "./components/DonateModal";
import type { Donation } from "./components/DonateModal";
import type { _SERVICE } from "../../declarations/CycleStarter/CycleStarter.did";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../declarations/CycleStarter/index";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [donation, setDonation]: [Donation, Function] = useState({
    open: false,
    id: 0,
    name: "",
  });
  const [projects, setProjects] = useState([]);
  const [balance, setBalance] = useState(0);

  const init = async () => {
    const authClient = await AuthClient.create();
    setLoggedIn(await authClient.isAuthenticated());
  };

  const logout = async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    setLoggedIn(false);
  };

  const login = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      onSuccess: async () => {
        setLoggedIn(true);
      },
      identityProvider:
        "http://localhost:8000?canisterId=rwlgt-iiaaa-aaaaa-aaaaa-cai",
    });
  };

  const agent = new HttpAgent();
  const cycleStarterActor = Actor.createActor<_SERVICE>(idlFactory, {
    agent,
    canisterId: "r7inp-6aaaa-aaaaa-aaabq-cai",
  });

  const getProjects = () => {
    cycleStarterActor.getProjects().then((projects) => {
      setProjects(projects);
    });
  };

  const getICPBalance = () => {
    if (loggedIn) {
      cycleStarterActor
        .getICPBalance()
        .then((balance) => setBalance(Number(balance)));
    }
  };

  init();
  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getICPBalance();
    }
  }, [loggedIn]);

  return (
    <>
      <Popover className="relative bg-white mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <h3 className="font-mono text-3xl font-semibold">CycleStarter</h3>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-2xl font-mono ">
                          CycleStarter
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      {loggedIn ? (
                        <div className="flex p-4 my-4 border-black border">
                          ICP balance: {balance}
                        </div>
                      ) : null}
                      <button
                        onClick={() => (loggedIn ? logout() : login())}
                        className="w-full flex items-center justify-center py-2 mt-8 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {loggedIn ? "Log out" : "Log In"}
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {loggedIn ? (
                <div className="p-4 border-black border">
                  ICP balance: {balance}
                </div>
              ) : null}
              <button
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => (loggedIn ? logout() : login())}
              >
                {loggedIn ? "Log out" : "Log in"}
              </button>
            </div>
          </div>
        </div>
      </Popover>
      <Projects
        projects={projects}
        loggedIn={loggedIn}
        setDonation={setDonation}
      ></Projects>
      <footer className="h-16"></footer>
      <DonateModal donation={donation} setDonation={setDonation} />
    </>
  );
}

document.title = "CycleStarter";

render(<Home />, document.getElementById("home"));
