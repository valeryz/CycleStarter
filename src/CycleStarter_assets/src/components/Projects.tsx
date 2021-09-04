type Project = {
  id: number;
  name: string;
  link: string;
  imgUrl: string;
  description: string;
};

function Project(props: {
  project: Project;
  loggedIn: boolean;
  setDonation: Function;
}) {
  return (
    <div className="flex flex-col border-gray-300 border border-solid rounded-xl p-6 pt-8	">
      <a href={props.project.link} className="block text-center mb-5">
        <img
          className="h-32 mx-auto"
          src={props.project.imgUrl}
          alt={props.project.name}
        />
      </a>
      <h3 className="text-2xl leading-5 pb-5"> {props.project.name}</h3>
      <span className="text-gray-500 mb-7">
        <p>{props.project.description}</p>
      </span>
      <div className="mt-auto flex justify-end">
        <button
          type="button"
          onClick={() => {
            if (props.loggedIn) {
              props.setDonation({
                open: true,
                id: props.project.id,
                name: props.project.name,
              });
            }
          }}
          className={
            "items-center ml-auto w-24 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600" +
            (props.loggedIn
              ? " hover:bg-blue-700 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
              : " opacity-50 cursor-not-allowed ")
          }
          title={
            props.loggedIn
              ? "Donate to this project"
              : "Login to donate to this project"
          }
        >
          Donate
        </button>
      </div>
    </div>
  );
}

export default function Projects(props: {
  projects: Array<Project>;
  loggedIn: boolean;
  setDonation: Function;
}) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {props.projects.map((project) => (
        <Project
          project={project}
          loggedIn={props.loggedIn}
          setDonation={props.setDonation}
        />
      ))}
    </div>
  );
}
