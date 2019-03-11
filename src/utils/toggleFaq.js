export default function toggleFaq (e) {
  const el = e.target
  const question = el.parentElement
  const answer = question.nextSibling

  question.classList.toggle('is-open')

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null
  } else {
    answer.style.maxHeight = answer.scrollHeight + 'px'
  }
}
