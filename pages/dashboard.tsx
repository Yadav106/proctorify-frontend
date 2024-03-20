import ToDoList from "@/components/Teams";
import CreateTeams from "@/components/Modal"; 
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '@/components/Layout';

const Teams: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const save = (team: any) => {

    console.log("Saving Team:", team);
  };
  return (
    <Layout>
      <ToDoList />
      <CreateTeams modal={modal} toggle={toggle} save={save} />
    </Layout>
  );
};

export default Teams;
