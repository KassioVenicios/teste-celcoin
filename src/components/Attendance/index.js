import {
  AttendanceContainer,
  AttendanceIcon,
  CardData,
  CardHeader,
  CardKey,
  CardTitle,
  CardValue,
} from './styles';

function Attendance({ attendance }) {
  return (
    <AttendanceContainer>
      <CardHeader>
        <AttendanceIcon icon={attendance.icon} />
      </CardHeader>
      <CardData>
        <CardTitle>{attendance.patientName}</CardTitle>
        <CardKey>Teste realizado</CardKey>
        <CardValue>{attendance.testName}</CardValue>
        <CardKey>Realizado em:</CardKey>
        <CardValue>{attendance.date}</CardValue>
      </CardData>
    </AttendanceContainer>
  );
}

export default Attendance;