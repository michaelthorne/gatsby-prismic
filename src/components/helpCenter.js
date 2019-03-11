import React from 'react';
import iconHelp from '../images/icon-help.svg'

const HelpCenter = () => {
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
        </tbody>
      </table>
    </div>
  )
}

export default HelpCenter;