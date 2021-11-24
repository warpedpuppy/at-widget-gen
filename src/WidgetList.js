import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Faker from 'faker';
import './WidgetList.css';

function WidgetList(props) {

  const [loading, setLoading] = useState(true);

  useEffect( () => {
    if (props.widgets.length) {
      setLoading(false)
    }
  }, [props.widgets])
 
  function handleSaveWidgets () {
    let title = `Title #${Math.ceil(Math.random()*1000)}`;
    let text = Faker.lorem.sentence();
    props.saveWidgets({title, text})
  }

  return  (
    <div>
      <button className="add-widget" onClick={ handleSaveWidgets }>add widget</button>
      <section id="widget-display">
        { loading && (<div className="loading">the widget list is empty right now. . . </div>) }
        {
          props.widgets.map((widget, i) =>  {
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

const mapStateToProps = state => {
  const { widgets } = state;
  return { widgets }
}
const mapDispatchToProps = dispatch => {
  return {
    saveWidgets: (widgets) => dispatch({type: "SAVE_WIDGETS", value: widgets})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);