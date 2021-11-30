import React, { useState, useEffect, useReducer } from 'react';
import Faker from 'faker';
import './WidgetList.css';

function widgetReducer(state, action) {
  switch (action.type) {
    case "SAVE_WIDGETS":
      return [...state, action.value];
    default:
      return state;
  }
}

function WidgetList(props) {

  const [widgets, dispatch] = useReducer(widgetReducer, []);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    if (widgets.length) {
      setLoading(false)
    }
  }, [widgets])
 
  function handleSaveWidgets () {
    let title = `Title #${Math.ceil(Math.random()*1000)}`;
    let text = Faker.lorem.sentence();
    dispatch({type: "SAVE_WIDGETS", value: {title, text}})
  }

  return  (
    <div>
      <button className="add-widget" onClick={ handleSaveWidgets }>add widget</button>
      <section id="widget-display">
        { loading && (<div className="loading">the widget list is empty right now. . . </div>) }
        {
          widgets.map((widget, i) =>  {
            return (
              <div key={i}>
                <h1>{ widget.title }</h1>
                <p>{ widget.text }</p>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default WidgetList;