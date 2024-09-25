import cooluiLogo from './assets/coolui.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <div className="flex items-center justify-center gap-6">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo size-24 transition-filter duration-300 will-change-filter" alt="Vite logo" />
        </a>
        <a href="https://coolui.litingyes.top/" target="_blank">
          <img src={cooluiLogo} className="logo size-24 transition-filter duration-300 will-change-filter" alt="Coolui logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo size-24 transition-filter duration-300 will-change-filter react" alt="React logo" />
        </a>
      </div>
      <h1 className="from-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">Vite + Cool UI + React</h1>
      <p>
        Learn more about Cool UI in the
        <a
          href="https://coolui.litingyes.top/guide/introduction.html"
          target="_blank"
        >
          Documentation
        </a>
        .
      </p>
      <p className="text-cool-500">Click on logos to learn more</p>
      <div className="flex items-center justify-center my-6 gap-2">
        <label className="font-500">Badges:</label>
        <div className="badge-md badge-solid badge">solid</div>
        <div className="badge-md badge badge-outline">outline</div>
        <div className="badge-md badge badge-soft">soft</div>
      </div>
      <div className="my-6 flex items-center justify-center gap-2">
        <label className="font-500">Icon buttons:</label>
        <button className="btn-icon-md btn">
          <i className="i-carbon:color-palette h-1em w-1em" />
        </button>
        <button className="btn-icon-md btn btn-solid">
          <i className="h-1em w-1em i-ph:open-ai-logo" />
        </button>
        <button className="btn-icon-md btn btn-outline">
          <i className="h-1em w-1em i-vscode-icons:file-type-unocss" />
        </button>
        <button className="btn-icon-md btn btn-soft"><i className="h-1em w-1em i-fxemoji:artistpalette" /></button>
        <button className="btn-icon-md btn btn-ghost"><i className="h-1em w-1em i-logos:figma" /></button>
      </div>
    </>
  )
}

export default App
