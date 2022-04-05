import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import reportWebVitals from './reportWebVitals'

// * styles
import 'bootswatch/dist/pulse/bootstrap.min.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify' // ! importando el toast

import { BrowserRouter, Routes, Route } from 'react-router-dom' // ! importando módulo para crear rutas

// * Componentes
import VideoList from './components/Videos/VideoList'
import VideoForm from './components/Videos/VideoForm'
import Navbar from './components/Navbar/Navbar'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
const app = (
  <StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4">
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/new-video" element={<VideoForm />} />
          <Route path="/update/:id" element={<VideoForm />} />
        </Routes>

        <ToastContainer />
      </div>
    </BrowserRouter>
  </StrictMode>
)

root.render(app)

reportWebVitals()
