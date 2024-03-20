import Update from "./Update"
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { Teams } from "@/interface/Teams";


interface ToDoListProps {} // Empty interface for now

const ToDoList: React.FC<ToDoListProps> = () => {
  const [modal, setModal] = useState(false);
  const [teamList, setTeamsList] = useState<Teams[]>([]); // Typed teamList

  useEffect(() => {
    async function getAllTeams() {
      const url = "http://localhost:8000/proctorify/v1.0/team/get_all_teams";
      const access_token = sessionStorage.getItem('access_token')
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }

      const response = await fetch(url, options);
      const response_body = await response.json();

      console.log(response_body);

      if (response_body['data']['msg'] && response_body['data']['msg'] == 'success') {
        setTeamsList(response_body['data']['data'])
      }
    }
    getAllTeams()
  }, [])


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
