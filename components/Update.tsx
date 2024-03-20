import React, { useState } from 'react';
import { Teams } from '@/interface/Teams';
import { useRouter } from 'next/router';


interface RoomProps {
  teamObj: Teams;
  index: number;
  deleteTeams: (index: number) => void;
  updateListArray: (updatedTeams: Teams, index: number) => void;
}

const Room: React.FC<RoomProps> = ({
  teamObj,
  index,
  deleteTeams,
  updateListArray,
}) => {
  const [modal, setModal] = useState(false);

  const colors = [
    { primaryColor: '#5D93E1', secondaryColor: '#ECF3FC' },
    { primaryColor: '#F9D288', secondaryColor: '#FEFAF1' },
    { primaryColor: '#5DC250', secondaryColor: '#F2FAF1' },
    { primaryColor: '#F48687', secondaryColor: '#FDF1F1' },
    { primaryColor: '#B964F7', secondaryColor: '#F3F0FD' },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTeams = (obj: Teams) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTeams(index);
  };
 
  const router = useRouter();

  const handleClickRoute = () => {
    router.push('./contact'); 
  };


  return (
    <div className="card-wrapper mr-5" onClick={handleClickRoute}>
      <div className="card" style={{ backgroundColor: colors[index % 5].primaryColor }} ></div>
      <div className="team-holder" >
        <span
          className="card-header"
          style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: '10px' }}
        >
          {teamObj.name}
        </span>
        <p className = "mt-3">{teamObj.leader}</p>
        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <i
            className="far fa-edit mr-3 pr-3"
            style={{ color: colors[index % 5].primaryColor, cursor: 'pointer' }}
            onClick={() => setModal(true)}
          />
          <i
            className="fas fa-trash-alt ml-3"
            style={{ color: colors[index % 5].primaryColor, cursor: 'pointer' }}
            onClick={handleDelete}
          />
        </div>
      </div>
      {/* <EditTeams modal={modal} toggle={toggle} updateTeams={updateTeams} teamObj={teamObj} /> */}
    </div>
  );
};

export default Room;
