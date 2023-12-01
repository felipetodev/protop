export const opacity = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
}

export const showUp = {
  closed: { opacity: 0, y: 50 },
  open: { opacity: 1, y: 0 }
}

export const show = {
  closed: { opacity: 0, y: 50, transition: { bounce: 0 } },
  open: { opacity: 1, y: 0, transition: { bounce: 0, delay: 0.5 } }
}
