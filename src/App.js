import { useState, useRef, useEffect } from "react";
import Isotope from "isotope-layout";

import CheckBox from "./components/checkbox";
import WorkCard from "./components/work_card";
import ProjectCard from "./components/project_card";

function App() {
  // clickbox states
  const [showWork, flipShowWork] = useState(true);
  const [showProject, flipShowProject] = useState(true);
  const [sortKey, setSortKey] = useState('date'); // 'date' or 'name'

  // setup isotope
  const isotope = useRef(); // persist isotope in between renders

  useEffect(() => {
    isotope.current = new Isotope(".card-container", {
      itemSelector: ".card",
      layoutMode: "fitRows",
      getSortData: {
        date: function (cardElem) {
          return Date.parse(cardElem.getAttribute('date'));
        },
        name: function (cardElem) {
          return cardElem.getAttribute('name').toUpperCase();
        }
      }
    });

    return () => {
      isotope.current.destroy();
    };
  }, []);

  useEffect(() => {
    var options = {
      filter: '*',
      sortBy: sortKey
    };

    if (!showWork && !showProject) {
      options.filter = ':not(.card)';
    } else if (showWork && !showProject) {
      options.filter = '.work';
    } else if (showProject && !showWork) {
      options.filter = '.project';
    }

    if (sortKey == 'date') {
      options.sortAscending = false;
    } else if (sortKey == 'name') {
      options.sortAscending = true;
    }

    isotope.current.arrange(options);

  }, [isotope, showWork, showProject, sortKey]);

  // create cards
  let data = require("./data/card_data.json");

  let work_cards = data.work_cards.map(function (wc, index) {
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

  let proj_cards = data.project_cards.map(function (pc, index) {
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

  let by_date_checkbox = <CheckBox
    caption="DATE"
    clicked={sortKey === 'date'}
    onClick={() => {
      setSortKey('date');
    }}
    fillColorClass={"charcoalfill"}
    borderColorClass={"charcoalborder"}
  />

  let by_name_checkbox = <CheckBox
    caption="NAME"
    clicked={sortKey === 'name'}
    onClick={() => {
      setSortKey('name');
    }}
    fillColorClass={"charcoalfill"}
    borderColorClass={"charcoalborder"}
  />

  return (
    <>
      <div id="filterbar">
        <CheckBox
          caption="PROJECTS"
          clicked={showProject}
          onClick={() => flipShowProject(!showProject)}
          fillColorClass={"whalebluefill"}
          borderColorClass={"whaleblueborder"}
        />
        <CheckBox
          caption="WORK"
          clicked={showWork}
          onClick={() => flipShowWork(!showWork)}
          fillColorClass={"brickredfill"}
          borderColorClass={"brickredborder"}
        />
        {by_date_checkbox}
        {by_name_checkbox}
      </div>
      <div className="card-container">
        {work_cards}
        {proj_cards}
      </div>
    </>
  );
}

export default App;
