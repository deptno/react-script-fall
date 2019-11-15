export const isAttached = (src) => {
  for (const node of document.body.children) {
    if (node.nodeName === 'SCRIPT') {
      if ((node as HTMLScriptElement).src === src) {
        return true
      }
    }
  }
  return false
}
