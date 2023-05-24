import { useState, useRef, useEffect } from "react";
import Isotope from "isotope-layout";

import CheckBox from "./components/checkbox";
import WorkCard from "./components/work_card";
import ProjectCard from "./components/project_card";

function App() {

  // clickbox states
  const [showWork, flipShowWork] = useState(true);
  const [showProject, flipShowProject] = useState(true);
  const [sortKey, setSortKey] = useState('.date'); // '.date' or '.name'

  function getFilter() {
    var filter = "*";
    if (showWork && !showProject) {filter = ".work"}
    else if (showProject && !showWork) {filter = ".project"}

    return {filter: filter};
  }

  function getSort() {
    // TODO: 


  }

  // setup isotope
  const isotope = useRef(); // persist value in between renders

  useEffect(() => {
    isotope.current = new Isotope('.card-container', {
      itemSelector: '.card',
      layoutMode: 'fitRows'
    });

    // cleanup (mandatory)
    return () => { isotope.current.destroy(); }
  }, []);
  
  // TODO: fix me
  /*
  useEffect(() => {
    isotope.current.arrange(getFilter()); // TESTING: only set filter right now
  }, [getFilter]);
  */

  // create cards
  let data = require('./data/card_data.json');

  // NEW: 
  let work_cards = data.work_cards.map(function(wc, index) {
    return (
      <WorkCard
      date={wc.date}
      title={wc.title}
      company={wc.company}
      description={wc.description}
      key={index}
    />
    )
  });

  let proj_cards = data.project_cards.map(function(pc, index) {
    return (
      <ProjectCard
      date={pc.date}
      name={pc.name}
      description={pc.description}
      links={pc.links}
      details={pc.details}
      key={index}
    />
    )
  });

  return (
    <>
        <div id="filterbar">
          <CheckBox caption="PROJECTS" clicked={showProject} onClick={() => flipShowProject(!showProject)}
            fillColorClass={"whalebluefill"} borderColorClass={"whaleblueborder"}/>
          <CheckBox caption="WORK" clicked={showWork} onClick={() => flipShowWork(!showWork)}
            fillColorClass={"brickredfill"} borderColorClass={"brickredborder"}/>
          <CheckBox caption="BY DATE" clicked={sortKey === '.date'} onClick={() => setSortKey('.date')}
            fillColorClass={"charcoalfill"} borderColorClass={"charcoalborder"}/>
          <CheckBox caption="BY NAME" clicked={sortKey === '.name'} onClick={() => setSortKey('.name')}
            fillColorClass={"charcoalfill"} borderColorClass={"charcoalborder"}/>
        </div>
        <div className="card-container">
          {work_cards}
          {proj_cards}
        </div>
    </>
  )
}

export default App;
