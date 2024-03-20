import ToDoList from "@/components/Teams";
import CreateTeams from "@/components/Modal"; 
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Teams: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const save = (team: any) => {

    console.log("Saving Team:", team);
  };
  return (
    <div>
      <ToDoList />
      <CreateTeams modal={modal} toggle={toggle} save={save} />
    </div>
  );
};

export default Teams;
