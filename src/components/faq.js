import React from 'react'

import toggleFaq from '../utils/toggleFaq'
import iconArrow from '../images/icon-arrow.svg'

const Faq = (props) => {
  return (
    <table id="faq" className="table" cellPadding="0" cellSpacing="0">
      <caption>FAQ</caption>
      <tbody>
      {props.faq.map(({ node }) => (
        <tr key={node.id}>
          <td className="accordion" onClick={(e) => toggleFaq(e)}>
            <div className="link">{node.data.question.text}
              <span className="arrow">
                <img src={iconArrow} width="16" height="26" alt=""/>
              </span>
            </div>
          </td>
          <td className="description" dangerouslySetInnerHTML={{ __html: node.data.answer.html }}/>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Faq