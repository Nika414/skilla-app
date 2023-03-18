/* eslint-disable no-unused-vars */
function Infographics({ text, color, accentText }) {
  return (
    <div className="infographics">
      <span className="infographics__span" style={{ color: '#122945' }}>
        {text}
        <span className="infographics__span" style={{ '--my-color-var': color }}>{accentText}</span>
      </span>
      <div className="infographics__bar" style={{ '--my-color-var': color }} />
    </div>
  );
}

export default Infographics;
