const sounds = ['bobcat', 'cheetah', 'cougar', 'jaguar', 'leopard', 'lion', 'panther', 'tiger']

const stopSounds = () => {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0
  })
}

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSounds()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

