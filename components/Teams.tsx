import Update from "./Update"
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { Teams } from "@/interface/Teams";


interface ToDoListProps {} // Empty interface for now

const ToDoList: React.FC<ToDoListProps> = () => {
  const [modal, setModal] = useState(false);
  const [teamList, setTeamsList] = useState<Teams[]>([]); // Typed teamList

  useEffect(() => {
    let arr = localStorage.getItem("teamList");
    if (arr) {
      try {
        let jsonObj = JSON.parse(arr) as Teams[]; // Cast to Teams[] after parsing
        setTeamsList(jsonObj);
      } catch (error) {
        console.error("Error parsing localStorage:", error);
      }
    }
  }, []);

  const deleteTeams = (index: number) => {
    setTeamsList((prevList) => {
      const tempList = [...prevList];
      tempList.splice(index, 1);
      localStorage.setItem("teamList", JSON.stringify(tempList));
      return tempList;
    });
  };

  const updateListArray = (obj: Teams, index: number) => {
    setTeamsList((prevList) => {
      const tempList = [...prevList];
      tempList[index] = obj;
      localStorage.setItem("teamList", JSON.stringify(tempList));
      return tempList;
    });
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTeams = (teamObj: Teams) => {
    setTeamsList((prevList) => {
      const tempList = [...prevList];
      tempList.push(teamObj);
      localStorage.setItem("teamList", JSON.stringify(tempList));
      setModal(false);
      return tempList;
    });
  };

  return (
    <>
      <div className="header text-center">
        <h3 className="pt-3">WELCOME TO YOUR TEAMS</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Teams
        </button>
      </div>
      <Modal toggle={toggle} modal={modal} save={saveTeams} />
      <div className="team-container">
        {teamList &&
          teamList.map((obj, index) => (
            <Update key={index} teamObj={obj} index={index} deleteTeams={deleteTeams} updateListArray={updateListArray} />
          ))}
      </div>
      {/* <div></div> */}
    </>
  );
};

export default ToDoList;
