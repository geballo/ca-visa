import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const China = () => {

  const { chinaColor } = useContext(ColorContext)

return (
<g className={'china'}>
  <style jsx>{`
  .china {
  fill: ${chinaColor};
  stroke-width: 1;
  }
  `}</style>
<path d="M 1602.2 381.9 1597.9 385 1593 383 1592 377.5 1594.2 374.6 1600 372.8 1603.3 372.9 1604.9 375.4 1602.9 378.2 1602.2 381.9 Z" stroke="black"/>
<path d="M 1625.6 185.5 1634.6 190 1640.6 195.8 1648.2 195.8 1650.8 193.4 1657.7 191.5 1659 197.2 1658.7 199.5 1661.5 206.3 1662.1 212.5 1655.2 211.4 1652.3 213.6 1657 219 1660.9 226.5 1658.4 226.6 1660.3 229.9 1654.8 226.1 1654.8 229.7 1648.4 232.4 1651.2 235.8 1646.6 235.5 1643 233.5 1641.9 238.1 1638 241.5 1635.9 245.6 1629.6 247.4 1627.2 250.4 1622.4 252.2 1623.7 249.2 1621.4 246.7 1623.4 242.4 1618.9 239.1 1615.5 241.3 1611.9 245.8 1610.6 249.9 1605.6 250.2 1604.3 253.2 1609.1 257.5 1613.9 258.6 1615.3 261.4 1620.4 263.3 1624.2 258.7 1630.1 261.2 1633.6 261.4 1635.9 264.7 1629.2 266.5 1628.2 270 1624.4 273.2 1623.5 277.7 1630.6 281.2 1635.2 287.5 1640.7 293.4 1646.2 298.3 1647.8 303.1 1645 304.9 1647.4 308.3 1651.3 310.3 1652.1 315.5 1652.2 320.6 1649.4 321.2 1647.3 328.1 1645 336.6 1641.6 344.2 1635.2 350.1 1628.6 355.6 1622.5 356.3 1619.6 359.1 1617.3 357.1 1614.8 360.2 1607.6 363.5 1601.8 364.4 1601.1 371.2 1598 371.6 1595.8 366.9 1596.7 364.5 1588.9 362.4 1586.5 363.5 1580.6 361.8 1577.5 359.2 1577.8 355.5 1572.5 354.3 1569.4 351.9 1565.3 355.3 1560 356.1 1555.6 356 1552.9 357.6 1550.2 358.5 1552.2 365.9 1549.2 365.7 1548.4 364.2 1547.9 361.5 1544.1 363.4 1541.5 362.2 1537 359.8 1537.8 354.5 1534.1 353.2 1531.7 347.3 1526.1 348.4 1525.4 340.8 1529.6 335.4 1528.7 330.1 1527.4 325.2 1524.7 323.7 1522 319.9 1518.9 320.4 1512.8 319.4 1514 316.7 1510.4 312.7 1507.2 315.4 1502.3 313.9 1496.9 317.9 1493 322.7 1488.8 323.5 1486 321.8 1483.1 321.6 1478.8 320.2 1476.2 321.8 1473.6 326.6 1472.1 321.5 1469 322.9 1462.5 322.2 1456 320.8 1451 317.9 1446.5 316.7 1444 313.6 1440.7 312.7 1434.3 308.5 1429.5 306.5 1427.6 308 1419 303.5 1412.8 299.5 1409.6 292.4 1413.7 293.3 1413.1 290 1410.1 286.7 1409.3 281.5 1401.6 273.9 1392.1 271.4 1389.2 266.4 1384.5 263.4 1383 261.6 1381.2 258 1380.7 255.5 1377 254 1375.5 254.7 1372.4 248.7 1373.5 247.3 1372.3 245.8 1376.4 242.8 1379.6 241.5 1385.4 242.4 1386 238.3 1392.4 237.6 1393.4 235 1400.3 231.6 1400.5 230.2 1398.8 226.5 1401.7 224.9 1392.9 213.9 1402 211.4 1404 210 1403 198.7 1413.8 200.8 1415.4 197.9 1412.9 191.7 1416.7 191.1 1418.6 186.9 1420.3 186.4 1423.6 190.8 1429.3 194.1 1437.5 196.4 1443.3 201.5 1444.7 208.8 1447.7 211.6 1454.2 212.7 1461.4 213.5 1469.4 217.5 1472.8 218.2 1477.8 224 1482.5 227.8 1488.1 227.6 1499.4 229.1 1505.8 228.2 1511.4 229.1 1520.8 233 1527 233 1530.3 234.9 1534.7 231.5 1541.9 229.3 1549.5 229.1 1554.4 226.9 1556.4 223.5 1558.8 221.3 1556.9 219.2 1554 216.8 1554.5 212.7 1557.7 213.3 1563.6 214.6 1566.8 211.2 1573.2 208.8 1574.5 204.6 1577 202.8 1583.8 202 1588.2 202.7 1587.4 200.5 1580.2 196.1 1575 194.1 1572.5 196.4 1567 195.4 1564.7 196.2 1561.9 193.7 1561.6 187.4 1561 182.7 1568.4 185.1 1572.8 181.2 1570.9 178.4 1570.7 171.9 1572 169.9 1569.5 166.5 1565.8 165.1 1567.5 162 1572.6 160.9 1578.8 160.7 1587.4 162.6 1593.4 164.8 1601.1 171 1604.9 173.7 1609.4 177.5 1615.6 183.5 1625.6 185.5 Z" stroke="black"/>
</g>
)
}

export default China