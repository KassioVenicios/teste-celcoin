import { useState } from 'react';
import Icon from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  Card,
  CardContainer,
  CardData,
  CardHover,
  CardHoverTitle,
  CardHoverData,
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

  const [opened, setOpened] = useState(false);

  function openUserMenu() {
    setOpened(true);
  }

  function closeUserMenu() {
    setOpened(false);
  }

  return (
    <Card>
      <CardContainer onMouseEnter={openUserMenu} onMouseLeave={closeUserMenu}>
        <CardHover opened={opened}>
          <CardHoverTitle>{item.hoverinfo.title}</CardHoverTitle>
          <CardHoverData color={item.hoverinfo.dataColor}>
            {item.hoverinfo.data}
          </CardHoverData>
        </CardHover>
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
