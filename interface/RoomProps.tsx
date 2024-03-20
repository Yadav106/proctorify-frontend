import {Teams} from '@/interface/Teams'
export interface RoomProps {
  teamObj: Teams;
  index: number;
  deleteTeams: (index: number) => void;
  updateListArray: (updatedTeams: Teams, index: number) => void;
}