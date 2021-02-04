const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', function () {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  console.log(currentActive)
  update()
})

prev.addEventListener('click', function () {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  console.log(currentActive)
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  let progressAmount = actives.length - 1
  let numDivisions = circles.length - 1
  let progressPercent = (progressAmount / numDivisions) * 100

  console.log(progressAmount + ', ' + numDivisions + ', ' + progressPercent)
  progress.style.width = progressPercent + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else {
    prev.disabled = false
  }

  if (currentActive === circles.length) {
    next.disabled = true
  } else {
    next.disabled = false
  }
}
