import axios from 'axios' // ! importando módulo axios para hacer peticiones a la API
import { Video } from './Video' // ! importando la interface video

const API = 'http://localhost:3000'

export const getVideos = async () => await axios.get<Video[]>(`${API}/videos`)

export const createVideo = async (video: Video) => await axios.post(`${API}/videos`, video)

export const getVideo = async (id: string) => await axios.get<Video>(`${API}/videos/${id}`)

export const updateVideo = async (id: string, video: Video) =>
  await axios.put<Video>(`${API}/videos/${id}`, video)

export const deleteVideo = async (id: string) => await axios.delete(`${API}/videos/${id}`)
