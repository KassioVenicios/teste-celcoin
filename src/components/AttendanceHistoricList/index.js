import { useSelector } from 'react-redux';
import Attendance from '../Attendance';
import PerfectScrollBar from 'react-perfect-scrollbar';
import {
  AttendanceHistoricListContainer
} from './styles';

function AttendanceHistoricList({ isHistoric }) {

  const Attendances = useSelector(state => state.attendanceHistoric);
  const AttendancesFiltered = ! isHistoric ? Attendances : Attendances.slice(0, 4);

  return (
    <PerfectScrollBar>
      <AttendanceHistoricListContainer>
        {
          AttendancesFiltered.map(item => (
            <Attendance key={item.id} attendance={item} isHistoric={isHistoric} />
            ))
          }
      </AttendanceHistoricListContainer>
    </PerfectScrollBar>
  );
}

export default AttendanceHistoricList;
