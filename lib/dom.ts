export const isAttached = (src) => {
  for (const node of document.querySelectorAll<HTMLScriptElement>('SCRIPT')) {
      if (node.src === src) {
        return true
      }
  }
  return false
}
