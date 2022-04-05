import { RequestHandler, Response } from 'express' // ! importando RequestHandler de expres
import Video from './Video' // ! importando Video de videos.model.ts

// * Función para crear un video
export const createVideo: RequestHandler = async (req, res) => {
  // ? RequestHandler es una interface que nos permite definir una función que recibe una petición y una respuesta
  const videoFound = await Video.findOne({ url: req.body.url })
  if (videoFound) return res.status(303).json({ message: 'The URL already exists' })

  const newVideo = new Video(req.body)
  const savedVideo = await newVideo.save()
  res.json(savedVideo)
}

// * Función para obtener todos los videos
export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find()
    return res.json(videos)
  } catch (error) {
    res.json(error)
  }
}

// * Función para obtener un video
export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id)

  // ? status 204 significa que no se ha encontrado nada, pero no hay nada que devolver
  if (!videoFound) return res.status(204).json()

  return res.json(videoFound)
}

// * Función para eliminar un video
export const deleteVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id)

  if (!videoFound) return res.status(204).json()

  return res.status(204).json()
}

// * Función para actualizar un video
export const updateVideo: RequestHandler = async (req, res): Promise<Response> => {
  // ? Promise<Response> es una interface que nos permite definir una función que recibe una petición y una respuesta
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  if (!videoUpdated) return res.status(204).json()
  return res.json(videoUpdated)
}
