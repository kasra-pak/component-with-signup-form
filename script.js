const submitBtn = document.querySelector('.submit-btn')
const inputFields = document.querySelectorAll('.field')


inputFields.forEach(field => {
  field.addEventListener('input', () => {
    field.classList.remove('empty')
    if (field.placeholder == "email@example/com") {
      field.placeholder = 'Email Address'
    }
  })
})

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  inputFields.forEach(field => {
    if (isEmpty(field)) {
      field.classList.add('empty')
      if (field.placeholder == "Email Address") {
        field.placeholder = 'email@example/com'
      }
    } else {
      field.classList.remove('empty')
    }
  });
})

function isEmpty(field) {
  if (field.value == +"") {
    return true;
  } else {
    return false
  }
}