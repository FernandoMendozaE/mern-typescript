import axios from 'axios' // ! importando módulo axios para hacer peticiones a la API
import { Video } from './Video' // ! importando la interface video

const API = 'http://localhost:3000'

export const getVideos = async () => axios.get<Video[]>(`${API}/videos`)

export const createVideo = async (video: Video) => axios.post(`${API}/videos`, video)

export const getVideo = async (id: string) => axios.get<Video>(`${API}/videos/${id}`)

export const updateVideo = async (id: string, video: Video) =>
  axios.put<Video>(`${API}/videos/${id}`, video)

export const deleteVideo = async (id: string) => axios.delete(`${API}/videos/${id}`)
