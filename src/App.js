import Isotope from "isotope-layout";

import CheckBox from "./components/checkbox";
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
      links={pc.links}
      details={pc.details}
    />
  );

  return (
    <>
      <div>
        <div id="filterbar" className="">
          <CheckBox caption="PROJECTS" fillColorClass={"whalebluefill"} borderColorClass={"whaleblueborder"} defaultClick={true}/>
          <CheckBox caption="WORK" fillColorClass={"brickredfill"} borderColorClass={"brickredborder"} defaultClick={true}/>
          <CheckBox caption="BY DATE" fillColorClass={"charcoalfill"} borderColorClass={"charcoalborder"} defaultClick={true}/>
          <CheckBox caption="BY NAME" fillColorClass={"charcoalfill"} borderColorClass={"charcoalborder"} defaultClick={false}/>
        </div>
        {work_cards}
        {proj_cards}
      </div>
    </>
  )
}

export default App;
