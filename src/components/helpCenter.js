import React from 'react'

import iconEmail from '../images/icon-email.svg'
import iconHelp from '../images/icon-help.svg'

const HelpCenter = (props) => {
  return (
    <div className="section">
      <table className="table" cellPadding="0" cellSpacing="0">
        <caption>Have more questions?</caption>
        <tbody>
        <tr id="help-center">
          <td>
            <a className="link has-icon" href="https://intercom.help/over">
              <span className="icon">
                <img src={iconHelp} width="28" height="28" alt=""/>
              </span>Help Center</a>
          </td>
        </tr>
        {props.email ?
          <tr id="email">
            <td>
              <a className="link has-icon" href={`mailto:${props.email}`}>
              <span className="icon">
                <img src={iconEmail} width="28" height="28" alt=""/>
              </span>{props.email}</a>
            </td>
          </tr> : null}
        </tbody>
      </table>
    </div>
  )
}

export default HelpCenter