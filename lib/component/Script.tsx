import React, {FunctionComponent, useEffect} from 'react'
import {useScript} from '../hook/use-script'

export const Script: FunctionComponent<Props> = props => {
  const [{loaded, error}] = useScript(props.src, props.async)

  useEffect(() => {
    if (props.onLoad) {
      if (loaded) {
        props.onLoad(true)
        return
      }
      if (error) {
        console.error(error)
        props.onLoad(false)
        return
      }
    }
  }, [loaded, error])

  if (loaded) {
    return <>{props.children}</>
  }
  return null
}


type Props = {
  src: string
  onLoad?(loaded: boolean): void
  async?: boolean
}
