import { useSelector } from 'react-redux';
import Attendance from '../Attendance';
import {
  AttendanceHistoricListContainer
} from './styles';

function AttendanceHistoricList() {

  const Attendances = useSelector(state => state.attendanceHistoric);

  return (
    <AttendanceHistoricListContainer>
      {
        Attendances.map(item => <Attendance key={item.id} attendance={item} />)
      }
    </AttendanceHistoricListContainer>
  );
}

export default AttendanceHistoricList;
