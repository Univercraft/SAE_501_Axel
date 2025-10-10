// src/book.js
import { pages } from './data/pages.js'

export function initBook(selector = '#app') {
  const root = document.querySelector(selector)
  root.innerHTML = `
    <div id="book" class="relative w-full h-screen overflow-hidden text-white">
      <div id="pages" class="absolute inset-0 transition-all duration-700 ease-in-out"></div>
      <div id="ui" class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-30"></div>
    </div>
  `

  let index = 0
  const pagesEl = root.querySelector('#pages')
  const uiEl = root.querySelector('#ui')

  function render() {
    const page = pages[index]
    let html = ""

    // 🧱 Choix du modèle selon type
    switch (page.type) {
      case "cover":
        html = `
          <div class="h-full w-full bg-cover bg-center flex flex-col items-center justify-center"
               style="background-image: url('${page.img}')">
            <div class="bg-black/50 p-8 rounded-xl">
              <h1 class="text-5xl font-bold">${page.title}</h1>
            </div>
          </div>
        `
        break

      case "pleine-haut":
        html = `
          <div class="relative h-full w-full bg-cover bg-center"
               style="background-image: url('${page.img}')">
            <div class="absolute top-0 left-0 w-full bg-black/60 p-8">
              <p class="text-lg max-w-3xl mx-auto">${page.text}</p>
            </div>
          </div>
        `
        break

      case "pleine-bas":
        html = `
          <div class="relative h-full w-full bg-cover bg-center"
               style="background-image: url('${page.img}')">
            <div class="absolute bottom-0 left-0 w-full bg-black/60 p-8">
              <p class="text-lg max-w-3xl mx-auto">${page.text}</p>
            </div>
          </div>
        `
        break

      case "petite":
        html = `
          <div class="flex h-full">
            <div class="w-1/2 bg-cover bg-center" style="background-image: url('${page.img}')"></div>
            <div class="w-1/2 bg-cover bg-center flex items-center justify-center p-8"
                 style="background-image: url('/assets/page_vierge.png')">
              <div class="bg-black/40 p-6 rounded-xl">
                <p class="text-lg leading-relaxed">${page.text}</p>
              </div>
            </div>
          </div>
        `
        break
    }

    // 🖼️ Affichage
    pagesEl.innerHTML = html

    // Navigation
    uiEl.innerHTML = `
      <button id="prev" class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded">◀ Précédent</button>
      <span class="px-4 py-2">${index + 1} / ${pages.length}</span>
      <button id="next" class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded">Suivant ▶</button>
    `
    root.querySelector('#prev').disabled = index === 0
    root.querySelector('#next').disabled = index === pages.length - 1

    addHandlers()
  }

  function addHandlers() {
    root.querySelector('#prev').onclick = () => {
      if (index > 0) { index--; render() }
    }
    root.querySelector('#next').onclick = () => {
      if (index < pages.length - 1) { index++; render() }
    }
    window.onkeydown = (e) => {
      if (e.key === 'ArrowRight' && index < pages.length - 1) { index++; render() }
      if (e.key === 'ArrowLeft' && index > 0) { index--; render() }
    }
  }

  render()
}
