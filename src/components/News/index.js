import {
  NewsContainer,
  NewsData,
  NewsDescription,
  NewsTitle,
  PatientPhoto,
  PatientName,
  StaticInfo,
} from './styles';

function News({ news }) {
  return (
    <NewsContainer>
      <PatientPhoto photo={news.patientPhoto} />
      <NewsData>
        <StaticInfo>Paciente</StaticInfo>
        <PatientName>{news.patientName}</PatientName>
        <NewsTitle isCompleted={news.isCompleted}>
          {news.title}
          <NewsDescription isCompleted={news.isCompleted}>
            {news.titleDescription}
          </NewsDescription>
        </NewsTitle>
        <StaticInfo>Realizado em: {news.date}</StaticInfo>
      </NewsData>
    </NewsContainer>
  );
}

export default News;