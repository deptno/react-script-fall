# react-script-fall

**react-script-fall** is a `<script>` tag loader

- Declarative loading order control
- SSR safe

> react@^16.8 is required

```bash
npm install react-script-fall
```

## Why
As far as I known, `script` tag's `async` attribute can not be set '`false`,
so we need something to control this.

## Usage
#### simple
```typescript jsx
<Script src="https://cdn-dependency" onLoad={(loaded) => console.log({loaded})}>
  <Script src="https://cdn"/>
</Script>
```
#### real world
```typescript jsx
const InitSomething: FunctionComponent<{initializeSomething(): void}> = props => {
  const [loaded, setLoaded] = useState(0)
  const handleLoad = (loaded) => loaded && setLoaded(loaded + 1)
  useEffect(() => {
    if (loaded === 2) {
      // todo initialize something
      props.initializeSomething()
    }
  }, [loaded])
  return (
    <Script src="https://cdn-dependency" onLoad={handleLoad}>
      <Script src="https://cdn" onLoad={handleLoad}/>
    </Script>
  )
}
```

## License
MIT
