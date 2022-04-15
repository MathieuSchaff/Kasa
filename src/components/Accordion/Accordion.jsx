import React from 'react'
import './accordion.scss'
import {ReactComponent as LeftChevron} from '../../assets/house/left-chevron.svg'
const Accordion = ({title, content}) => {
  const [toggle, setToggle] = React.useState(false)
  const toggleAccordion = () => {
    setToggle(!toggle)
  }
  return (
    <div className={toggle ? 'accordion backgroundgrey' : 'accordion'}>
      <button className="accordion-visible" onClick={toggleAccordion}>
        <span> {title}</span>
        <LeftChevron
          className={
            toggle ? ' chevron chevron-toggle' : 'chevron chevron-notToggle'
          }
        />
      </button>
      {toggle && (
        <div
          className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
        >
          <div className="pcontainer">
            {Array.isArray(content) ? (
              content.map(equipement => <p> {equipement}</p>)
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion
