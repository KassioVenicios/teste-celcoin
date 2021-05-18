import Icon from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  Card,
  CardContainer,
  CardData,
  CardTitle,
  CardVariance,
  CustomIcon,
  IconContainer,
} from './styles';

function InfoCard({ item }) {

  const formatVariance = data => data >= 0 ?
    '+'.concat(parseInt(data*100)).concat('%') :
    ''.concat(parseInt(data*100)).concat('%');

  const isCustomIcon = icon => icon.includes('-ok') || icon.includes('-x');

  return (
    <Card>
      <CardContainer>
        <CardVariance data={item.variance}>
          {formatVariance(item.variance)}
          </CardVariance>
        <IconContainer>
          {
            isCustomIcon(item.icon) ?
              <CustomIcon icon={(item.icon)} color={item.color} /> :
              <Icon icon={getIcon(item.icon)} color={item.color} />
          }
        </IconContainer>
        <CardData>{item.data}</CardData>
        <CardTitle>{item.name}</CardTitle>
      </CardContainer>
    </Card>
  );
}

export default InfoCard;
