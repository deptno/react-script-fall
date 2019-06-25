import {useEffect, useState} from 'react'

export const useScript = url => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<ErrorEvent|null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')

      script.addEventListener('load', () => setLoaded(true), {once: true})
      script.addEventListener('error', setError, {once: true})
      script.src = url

      document.body.appendChild(script)
    }
  }, [this])

  return [
    {
      loaded,
      error
    }
  ]
}
