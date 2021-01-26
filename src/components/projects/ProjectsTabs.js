import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../../data/data";
const ProjectTabs = (props) => {
  const [tabs, setTabs] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const mapper = data.map((item, index) => {
      return <ProjectCard item={item} id={index} />;
    });
    setCards(mapper);
  }, []);
  const prev = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(cards.length - 1);
    }
  };
  const next = () => {
    if (index + 1 < cards.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <div className="project__tabs__container">
      <div className="project__tabs__inner">
        {cards[index]}
        <div className="carousel__actions">
          <button className="btn__carousel darken" onClick={prev}>
            Previous
          </button>
          <button className="btn__carousel darken" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
