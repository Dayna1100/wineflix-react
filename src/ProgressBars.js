import './App.css';

// const ProgressBar = ({value, max}) => {
//   const percentage = Math.round((value / max) * 100);

//   return (
//     <div className="progress-bar-container">
//       <div className="progress-bar-fill" style={{width: `${percentage}%`}}>
//         <span className="progress-bar-label">{percentage}%</span>
//       </div>
//     </div>
//   );
// }

// export default ProgressBar;



const ProgressBar = ({imageUrl, progress, label}) => {
  return (
    <div>
      <img src={imageUrl} alt={label} />
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
};

const ProgressBars = ({data}) => {
  return (
    <div>
      {data.map((item) => (
        <ProgressBar key={item.id} imageUrl={item.imageUrl} progress={item.progress} label={item.label} />
      ))}
    </div>
  );
};

export default ProgressBars;