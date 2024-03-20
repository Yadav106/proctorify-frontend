import { Teams } from '@/interface/Teams'
export interface CreateTeamsProps {
  modal: boolean;
  toggle: () => void;
  save: (team: Teams) => void;
}