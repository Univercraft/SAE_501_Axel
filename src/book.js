// src/book.js
import { pages } from './data/pages.js'

export function initBook(selector = '#app') {
  const root = document.querySelector(selector)
  root.innerHTML = `
    <div id="book" class="relative w-full h-screen overflow-hidden text-white">
      <div id="pages" class="absolute inset-0 transition-all duration-700 ease-in-out"></div>

      <!-- Flèches de navigation -->
      <div id="nav-left" class="absolute left-4 top-1/2 -translate-y-1/2 text-5xl cursor-pointer select-none z-30 hidden">&lt;</div>
      <div id="nav-right" class="absolute right-4 top-1/2 -translate-y-1/2 text-5xl cursor-pointer select-none z-30 hidden">&gt;</div>
    </div>
  `

  const pagesOrdered = Array.isArray(pages)
    ? pages.slice().sort((a, b) => (Number(a.id) || 9999) - (Number(b.id) || 9999))
    : []

  let idx = 0
  const pagesEl = root.querySelector('#pages')
  const btnLeft = root.querySelector('#nav-left')
  const btnRight = root.querySelector('#nav-right')

  function render() {
    const page = pagesOrdered[idx]
    if (!page) {
      pagesEl.innerHTML = `<div class="h-full flex items-center justify-center">Aucune page disponible</div>`
      btnLeft.style.display = 'none'
      btnRight.style.display = 'none'
      return
    }

    const imgUrl = page.img || '/assets/page_vierge.jpg'
    let html = ''

    switch (page.type) {
      // --- Page de couverture ---
      case 'cover':
        html = `
          <div class="h-full w-full bg-cover bg-center flex items-center justify-center"
               style="background-image: url('${imgUrl}')">
            <div class="cover-title">
              <h1>${page.title || "Les trois cheveux d'or du diable"}</h1>
            </div>
          </div>
        `
        break

      // --- Nouvelle page de présentation ---
      case 'presentation':
        html = `
          <div class="relative h-full w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
               style="background-image: url('${imgUrl}')">
            <div>
              <h1 class="text-5xl md:text-6xl font-seagram mb-6">${page.title || "Les trois cheveux d'or du diable"}</h1>
              <p class="text-2xl mb-2 font-seagram">Les frères Grimm</p>
              <p class="text-lg font-seagram italic mb-16">Traduit par ${page.translator || "un traducteur anonyme"}</p>
            </div>
            <div class="absolute bottom-8 left-8 text-lg font-seagram">IUT Béziers</div>
            <div class="absolute bottom-8 right-8 text-lg font-seagram">Axel CAETANO</div>
          </div>
        `
        break

      // --- Page pleine (texte en haut) ---
      case 'pleine-haut':
        html = `
          <div class="relative h-full w-full bg-cover bg-center" style="background-image: url('${imgUrl}')">
            <div class="absolute top-0 left-0 w-full bg-black/60 p-8">
              <p class="text-lg max-w-3xl mx-auto font-seagram">${page.text || ''}</p>
            </div>
          </div>
        `
        break

      // --- Page pleine (texte en bas) ---
      case 'pleine-bas':
        html = `
          <div class="relative h-full w-full bg-cover bg-center" style="background-image: url('${imgUrl}')">
            <div class="absolute bottom-0 left-0 w-full bg-black/60 p-8">
              <p class="text-lg max-w-3xl mx-auto font-seagram">${page.text || ''}</p>
            </div>
          </div>
        `
        break

      // --- Page petite (moitié image / moitié texte) ---
      case 'petite':
        html = `
          <div class="flex h-full">
            <div class="w-1/2 bg-cover bg-center" style="background-image: url('${imgUrl}')"></div>
            <div class="w-1/2 bg-cover bg-center flex items-center justify-center p-8"
                 style="background-image: url('/assets/page_vierge.jpg')">
              <div class="bg-black/40 p-6 rounded-xl max-w-lg font-seagram">
                <p class="text-lg leading-relaxed">${page.text || ''}</p>
              </div>
            </div>
          </div>
        `
        break

      // --- Par défaut ---
      default:
        html = `
          <div class="h-full w-full flex items-center justify-center bg-gray-800">
            <div class="p-6 text-center">
              <p>Type de page inconnu : "${page.type}"</p>
              <p class="text-sm mt-2">id=${page.id}</p>
            </div>
          </div>
        `
    }

    pagesEl.innerHTML = html

    // --- Flèches de navigation ---
    if (page.type === 'cover') {
      btnLeft.style.display = 'none'
      btnRight.style.display = idx < pagesOrdered.length - 1 ? 'block' : 'none'
    } else if (idx === pagesOrdered.length - 1) {
      btnLeft.style.display = 'block'
      btnRight.style.display = 'none'
    } else {
      btnLeft.style.display = idx > 0 ? 'block' : 'none'
      btnRight.style.display = idx < pagesOrdered.length - 1 ? 'block' : 'none'
    }

    // --- Vérification image ---
    const imgTest = new Image()
    imgTest.src = imgUrl
    imgTest.onerror = () => {
      if (imgUrl !== '/assets/page_vierge.jpg') {
        console.warn(`Image introuvable: ${imgUrl} — fallback sur /assets/page_vierge.jpg`)
        page.img = '/assets/page_vierge.jpg'
        render()
      }
    }
  }

  // --- Navigation ---
  btnLeft.onclick = () => { if (idx > 0) { idx--; render() } }
  btnRight.onclick = () => { if (idx < pagesOrdered.length - 1) { idx++; render() } }
  window.onkeydown = (e) => {
    if (e.key === 'ArrowLeft' && idx > 0) { idx--; render() }
    if (e.key === 'ArrowRight' && idx < pagesOrdered.length - 1) { idx++; render() }
  }

  render()
}
