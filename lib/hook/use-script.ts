import {useEffect, useState} from 'react'
import {isAttached} from '../dom'

export const useScript = (url: string, async?: boolean) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<ErrorEvent | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!isAttached(url)) {
        const script = document.createElement('script')

        script.addEventListener('load', () => setLoaded(true), {once: true})
        script.addEventListener('error', setError, {once: true})
        script.src = url
        if (async) {
          script.async = true
        }

        document.body.appendChild(script)
      } else {
        setLoaded(true)
      }
    }
  }, [url])

  return [
    {
      loaded,
      error,
    },
  ]
}
