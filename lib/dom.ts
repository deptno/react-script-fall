export const isAttached = (src) => {
  for (const node of document.body.children) {
    if (node.nodeName === 'SCRIPT') {
      return (node as HTMLScriptElement).src === src
    }
  }
  return false
}
