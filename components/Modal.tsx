/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { CreateTeamsProps } from "@/interface/CreateTeamProps";
import { Teams } from "@/interface/Teams";
import DatePicker from '@/components/DatePicker'
import App from "./LocalisationProvider";
const CreateTeams: React.FC<CreateTeamsProps> = ({ modal, toggle, save }) => {
  const [teamName, setTeamName] = useState("");
  let [description, setDescription] = useState("");

  const handler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
      if (name === "teamName") {
          setTeamName(value);
      }
    else {
      setDescription(value);
    }
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const teamObj: Teams = {
      Name: teamName,
      Description: description,
    };
    save(teamObj);
    // setModal(!setModal); // Optional, depends on your implementation
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Teams</ModalHeader>
        <ModalBody>
          <form action="">
            <div className="form-group">
              <label>Teams Title</label>
              <input
                type="text"
                name="teamName"
                className="form-control"
                value={teamName}
                onChange={handler}
              />
            </div>
            {/* <div className="pt-2">
              <label>Set Meeting Date</label><br />
              <textarea name="" id="" cols="30" rows="10"><App/></textarea>
            </div> */}
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                id=""
                rows= "5"
                className="form-control"
                value={description}
                onChange={handler}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTeams;
