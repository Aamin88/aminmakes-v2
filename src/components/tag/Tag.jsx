import "./tag.css";

function Tags({ text }) {
  return (
    <div className="site__tag gradient__text glowing">
      <span>{text}</span>
    </div>
  );
}

export default Tags;
