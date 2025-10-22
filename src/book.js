// src/book.js
import { pages } from './data/pages.js'

export function initBook(selector = '#app') {
  const root = document.querySelector(selector)
  root.innerHTML = `
    <div id="book" class="relative w-full h-screen overflow-hidden text-white [perspective:2000px]">
      <div id="pages" class="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"></div>

      <!-- Flèches -->
      <div id="nav-left" class="absolute left-4 top-1/2 -translate-y-1/2 text-5xl cursor-pointer select-none z-30 hidden">&lt;</div>
      <div id="nav-right" class="absolute right-4 top-1/2 -translate-y-1/2 text-5xl cursor-pointer select-none z-30 hidden">&gt;</div>
    </div>
  `

  const pagesOrdered = Array.isArray(pages)
    ? pages.slice().sort((a, b) => (Number(a.id) || 9999) - (Number(b.id) || 9999))
    : []

  let idx = 0
  const pagesContainer = root.querySelector('#pages')
  const btnLeft = root.querySelector('#nav-left')
  const btnRight = root.querySelector('#nav-right')

  // --- Crée toutes les pages d'avance (pour le flip fluide) ---
  pagesContainer.innerHTML = pagesOrdered
    .map(
      (_, i) => `
      <div class="page absolute inset-0 transition-all duration-700 ease-in-out [transform-origin:left] [backface-visibility:hidden]"
           style="transform: rotateY(0deg); z-index:${pagesOrdered.length - i};">
      </div>
    `
    )
    .join('')

  const allPages = pagesContainer.querySelectorAll('.page')

  // --- Fonction de rendu (ton ancienne logique complète) ---
  function renderContent(page) {
    const imgUrl = page.img || '/assets/page_vierge.jpg'
    let html = ''

    switch (page.type) {
      case 'cover':
        html = `
          <div class="h-full w-full bg-cover bg-center flex items-center justify-center"
               style="background-image: url('${imgUrl}')">
            <div class="cover-title">
              <h1>${page.title || "Les trois cheveux d'or du diable"}</h1>
            </div>
          </div>`
        break

      case 'presentation':
        html = `
          <div class="relative h-full w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
               style="background-image: url('${imgUrl}')">
            <div>
              <h1 class="text-5xl md:text-6xl font-seagram mb-6" style="color:black">${page.title || "Les trois cheveux d'or du diable"}</h1>
              <p class="text-2xl mb-2 font-seagram" style="color:black">Les frères Grimm</p>
              <p class="text-lg font-seagram italic mb-16" style="color:black">Traduit par ${page.translator || "un traducteur anonyme"}</p>
            </div>

            <div class="absolute bottom-10 left-1/4 text-lg font-seagram text-black">IUT Béziers</div>
            <div class="absolute bottom-10 right-1/4 text-lg font-seagram text-black">Axel CAETANO</div>
          </div>`
        break

      case 'pleine-haut': {
        const isSpecialTop = page.id === 4 || page.id === 10 || page.id === 16
        const paddingClass = isSpecialTop ? 'pt-1 px-2' : 'p-12'
        const textClass = isSpecialTop
          ? 'text-sm md:text-base leading-relaxed w-[95%] mx-auto text-justify font-seagram'
          : 'text-lg max-w-3xl mx-auto font-seagram'

        html = `
          <div class="relative h-full w-full bg-cover bg-center" style="background-image:url('${imgUrl}')">
            <div class="absolute top-0 left-0 w-full ${paddingClass}">
              <p class="${textClass}" style="color:black;">${page.text || ''}</p>
            </div>
          </div>`
        break
      }

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
          bottomClass = 'bottom-0 px-4 pb-6'
          textClass = 'text-[0.95rem] md:text-[1.05rem] leading-relaxed w-[90%] mx-auto text-justify font-seagram'
        }

        html = `
          <div class="relative h-full w-full bg-cover bg-center" style="background-image:url('${imgUrl}')">
            <div class="absolute left-0 w-full ${bottomClass}">
              <p class="${textClass}" style="color:black;">${page.text || ''}</p>
            </div>
          </div>`
        break
      }

      case 'petite': {
        const isPage9 = page.id === 9
        let textClass = 'text-lg leading-relaxed'
        let containerClass = isPage9 ? 'mt-16' : 'p-6 rounded-xl max-w-lg font-seagram'
        if (page.id === 17) {
          textClass = 'text-[0.61rem] md:text-[0.71rem] leading-relaxed'
          containerClass = 'p-6 rounded-xl w-[90%] mx-auto font-seagram bg-[#d8c195]/30'
        }

        html = `
          <div class="flex h-full">
            <div class="w-1/2 bg-cover bg-center" style="background-image:url('${imgUrl}')"></div>
            <div class="w-1/2 bg-cover bg-center flex items-center justify-center p-8"
                style="background-image:url('./assets/page_vierge.jpg')">
              <div class="${containerClass}">
                <p class="${textClass}" style="color:black;">${page.text || ''}</p>
              </div>
            </div>
          </div>`
        break
      }

      default:
        html = `
          <div class="h-full w-full flex items-center justify-center bg-gray-800">
            <div class="p-6 text-center">
              <p>Type de page inconnu : "${page.type}"</p>
              <p class="text-sm mt-2">id=${page.id}</p>
            </div>
          </div>`
    }
    return html
  }

  // --- Place ton contenu dans les pages pré-créées ---
  allPages.forEach((pageEl, i) => {
    const page = pagesOrdered[i]
    pageEl.innerHTML = renderContent(page)
  })

  // --- Affiche la page avec effet de flip ---
  function showPage(index) {
    allPages.forEach((page, i) => {
      if (i < index) page.style.transform = 'rotateY(-180deg)'
      else page.style.transform = 'rotateY(0deg)'
    })

    btnLeft.style.display = index > 0 ? 'block' : 'none'
    btnRight.style.display = index < allPages.length - 1 ? 'block' : 'none'
  }

  btnLeft.onclick = () => { if (idx > 0) { idx--; showPage(idx) } }
  btnRight.onclick = () => { if (idx < allPages.length - 1) { idx++; showPage(idx) } }
  window.onkeydown = (e) => {
    if (e.key === 'ArrowLeft' && idx > 0) { idx--; showPage(idx) }
    if (e.key === 'ArrowRight' && idx < allPages.length - 1) { idx++; showPage(idx) }
  }

  showPage(0)
}
