//initializing the array
const elements = document.querySelectorAll('.cell')
Array.from(elements)
let counter = 0
let player
//resetting the game
const reset = () => {
  $('.cell').text('')
  counter = 0
  $('#header').text(`Please start playing`)
}

//
$('.cell').click(function () {
  if (this.innerHTML === '') {
    player = counter % 2 === 0 ? '❌' : '⚪️'
    $(this).text(player)
    counter++
    $('#header').text(`PLAYER ${counter % 2 === 0 ? '❌' : '⚪️'} TURN`)
    if (win(player)) {
      window.setTimeout(() => {
        alert(`${player} WINS!`)
        reset()
      }, 500)
    }
    if (counter === 8) {
      alert('Game over!')
      reset()
    }
  }
})

const win = (p) => {
  console.log('player at win ' + p + '\n' + '-------------------')
  const r1 =
    [
      $(elements[0]).text(),
      $(elements[1]).text(),
      $(elements[2]).text(),
    ].join() === `${p},${p},${p}`
  const r2 =
    [
      $(elements[3]).text(),
      $(elements[4]).text(),
      $(elements[5]).text(),
    ].join() === `${p},${p},${p}`
  const r3 =
    [
      $(elements[6]).text(),
      $(elements[7]).text(),
      $(elements[8]).text(),
    ].join() === `${p},${p},${p}`
  $
  const c1 =
    [
      $(elements[0]).text(),
      $(elements[3]).text(),
      $(elements[6]).text(),
    ].join() === `${p},${p},${p}`
  const c2 =
    [
      $(elements[1]).text(),
      $(elements[4]).text(),
      $(elements[7]).text(),
    ].join() === `${p},${p},${p}`
  const c3 =
    [
      $(elements[2]).text(),
      $(elements[5]).text(),
      $(elements[8]).text(),
    ].join() === `${p},${p},${p}`
  $
  const d1 =
    [
      $(elements[0]).text(),
      $(elements[4]).text(),
      $(elements[8]).text(),
    ].join() === `${p},${p},${p}`
  const d2 =
    [
      $(elements[2]).text(),
      $(elements[4]).text(),
      $(elements[6]).text(),
    ].join() === `${p},${p},${p}`

  //   console.log(`row 1: ${r1}
  //   row 2: ${r2}
  //   row 3: ${r3}
  //   col 1: ${c1}
  //   col 2: ${c2}
  //   col 3: ${c3}
  //   d1: ${d1}
  //   d2: ${d2}`)
  return r1 || r2 || r3 || c1 || c2 || c3 || d1 || d2
}
