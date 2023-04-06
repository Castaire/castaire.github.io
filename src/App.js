import "./App.css";
import WorkCard from "./components/work_card";
import ProjectCard from "./components/project_card";

function App() {
  
  // create cards
  let data = require('./data/card_data.json');

  let work_cards = data.work_cards.map( wc =>
    <WorkCard
      date={wc.date}
      title={wc.title}
      company={wc.company}
      description={wc.description}
    />
  );

  let proj_cards = data.project_cards.map( pc =>
    <ProjectCard
      date={pc.date}
      name={pc.name}
      description={pc.description}
    />
  );

  return (
    <div>
      {work_cards}
      {proj_cards}
    </div>
  )
}

export default App;
