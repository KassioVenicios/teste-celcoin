import { useSelector } from 'react-redux';
import Attendance from '../Attendance';
import {
  AttendanceHistoricListContainer
} from './styles';

function AttendanceHistoricList({ isHistoric }) {

  const Attendances = useSelector(state => state.attendanceHistoric);
  const AttendancesFiltered = ! isHistoric ? Attendances : Attendances.slice(0, 4);

  return (
    <AttendanceHistoricListContainer>
      {
        AttendancesFiltered.map(item => (
          <Attendance key={item.id} attendance={item} isHistoric={isHistoric} />
        ))
      }
    </AttendanceHistoricListContainer>
  );
}

export default AttendanceHistoricList;
