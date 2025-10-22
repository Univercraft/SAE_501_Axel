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

      // --- Page de présentation ---
      case 'presentation':
        html = `
          <div class="relative h-full w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
               style="background-image: url('${imgUrl}')">
            <div>
              <h1 class="text-5xl md:text-6xl font-seagram mb-6" style="color:black">${page.title || "Les trois cheveux d'or du diable"}</h1>
              <p class="text-2xl mb-2 font-seagram" style="color:black">Les frères Grimm</p>
              <p class="text-lg font-seagram italic mb-16" style="color:black">Traduit par ${page.translator || "un traducteur anonyme"}</p>
            </div>

            <div class="absolute bottom-10 left-1/4 text-lg font-seagram text-black">
              IUT Béziers
            </div>
            <div class="absolute bottom-10 right-1/4 text-lg font-seagram text-black">
              Axel CAETANO
            </div>
          </div>
        `
        break

      // --- Page pleine (texte en haut) ---
      case 'pleine-haut': {
        const isSpecialTop = page.id === 4 || page.id === 10 || page.id === 16
        const paddingClass = isSpecialTop ? 'pt-1 px-2' : 'p-12'
        const textClass = isSpecialTop
          ? 'text-sm md:text-base leading-relaxed w-[95%] mx-auto text-justify font-seagram'
          : 'text-lg max-w-3xl mx-auto font-seagram'

        html = `
          <div class="relative h-full w-full bg-cover bg-center" style="background-image: url('${imgUrl}')">
            <div class="absolute top-0 left-0 w-full ${paddingClass}">
              <p class="${textClass}" style="color:black;">
                ${page.text || ''}
              </p>
            </div>
          </div>
        `
        break
      }

      // --- Page pleine (texte en bas) ---
      case 'pleine-bas': {
        let bottomClass = 'bottom-0 p-8'
        let textClass = 'text-lg max-w-3xl mx-auto font-seagram'

        if (page.id === 5) {
          bottomClass = 'bottom-2 px-6 pb-4'
          textClass = 'text-sm md:text-xl leading-relaxed w-[92%] mx-auto text-justify font-seagram'
        } else if (page.id === 12) {
          bottomClass = 'bottom-0 px-2 pb-0'
          textClass = 'text-[0.9rem] md:text-[1.15rem] leading-relaxed w-[92%] mx-auto text-justify font-seagram'
        } else if (page.id === 6) {
          bottomClass = 'bottom-10 px-10'
          textClass = 'text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto text-justify font-seagram'
        } else if (page.id === 7) {
          bottomClass = 'bottom-0 px-10'
          textClass = 'text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-justify font-seagram'
        } else if (page.id === 21) {
          bottomClass = 'bottom-0 px-4 pb-6' // marges réduites
          textClass = 'text-[0.95rem] md:text-[1.05rem] leading-relaxed w-[90%] mx-auto text-justify font-seagram' // texte légèrement réduit et plus large
        }

        html = `
          <div class="relative h-full w-full bg-cover bg-center" style="background-image: url('${imgUrl}')">
            <div class="absolute left-0 w-full ${bottomClass}">
              <p class="${textClass}" style="color:black;">
                ${page.text || ''}
              </p>
            </div>
          </div>
        `
        break
      }

      // --- Page moitié image / moitié texte ---
      case 'petite': {
        const isPage9 = page.id === 9
        let textClass = 'text-lg leading-relaxed'
        let containerClass = isPage9 ? 'mt-16' : 'p-6 rounded-xl max-w-lg font-seagram'

        // Page 17 spécifique
        if (page.id === 17) {
          textClass = 'text-[0.61rem] md:text-[0.71rem] leading-relaxed'
          containerClass = 'p-6 rounded-xl w-[90%] mx-auto font-seagram bg-[#d8c195]/30' // arrière-plan léger
        }

        html = `
          <div class="flex h-full">
            <div class="w-1/2 bg-cover bg-center" style="background-image: url('${imgUrl}')"></div>
            <div class="w-1/2 bg-cover bg-center flex items-center justify-center p-8"
                style="background-image: url('/assets/page_vierge.jpg')">
              <div class="${containerClass}">
                <p class="${textClass}" style="color:black;">${page.text || ''}</p>
              </div>
            </div>
          </div>
        `
        break
      }

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

    // --- Flèches ---
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

    // --- Vérifie que l'image existe ---
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
