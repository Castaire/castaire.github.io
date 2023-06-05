import { useState, useRef, useEffect } from "react";
import Isotope from "isotope-layout";

import Bookmark from "./components/bookmark";
import CheckBox from "./components/checkbox";
import WorkCard from "./components/work_card";
import ProjectCard from "./components/project_card";

function App() {

  // clickbox states
  const [showWork, flipShowWork] = useState(true);
  const [showProject, flipShowProject] = useState(true);
  const [sortByDate, setSortByDate] = useState(true);
  const [sortByName, setSortByName] = useState(false);

  // set up isotope
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

  // sort and filter cards
  useEffect(() => {
    var options = {
      filter: '*'
    };

    if (!showWork && !showProject) {
      options.filter = ':not(.card)';
    } else if (showWork && !showProject) {
      options.filter = '.work';
    } else if (showProject && !showWork) {
      options.filter = '.project';
    }

    if (sortByDate) {
      options.sortBy = 'date';
      options.sortAscending = false;
    } else if (sortByName) {
      options.sortBy = 'name';
      options.sortAscending = true;
    }

    isotope.current.arrange(options);

  }, [isotope, showWork, showProject, sortByDate, sortByName]);

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

  return (
    <>
      <Bookmark />
      <div id="board">
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
          <CheckBox
            caption="DATE"
            clicked={sortByDate}
            onClick={() => {
              setSortByDate(!sortByDate);
              setSortByName(!sortByName);
            }}
            fillColorClass={"charcoalfill"}
            borderColorClass={"charcoalborder"}
          />
          <CheckBox
            caption="NAME"
            clicked={sortByName}
            onClick={() => {
              setSortByName(!sortByName);
              setSortByDate(!sortByDate);
            }}
            fillColorClass={"charcoalfill"}
            borderColorClass={"charcoalborder"}
          />
        </div>
        <div className="card-container">
          {work_cards}
          {proj_cards}
        </div>
      </div>
    </>
  );
}

export default App;
