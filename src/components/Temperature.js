const Temperature = ({ temp, unit }) => {
  const convertedTemp = unit === 'imperial' ? (temp * 9) / 5 + 32 : temp;
  const unitLabel = unit === 'imperial' ? '°F' : '°C';

  return (
    <div>
      <h2>{convertedTemp.toFixed(1)} {unitLabel}</h2>
    </div>
  );
};
  
export default Temperature;
