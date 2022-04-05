import React, { useEffect, useState } from 'react'
import { Video } from './Video' // ! importando el tipo de dato Video
import * as videoService from './VideoServices' // ! importando el servicio api de videos
// * componentes
import VideoItem from './VideoItem'

const VideoList = () => {
  // * State hooks para un array de videos
  const [videos, setVideos] = useState<Video[]>([])

  // * Función para obtener los servicios de la API
  const loadVideos = async () => {
    const res = await videoService.getVideos()

    const formatedVideos = res.data
      .map(video => ({
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(), // ? si existe la fecha la convierte a tipo Date
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
      }))
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()) // ? ordenar los videos por fecha de creación

    setVideos(formatedVideos)
  }

  // ? () => {}, sirve para declarar el bloque de código que se va a ejecutar cuando se renderiza el componente
  // ? [], dependiendo de que variables se cambien, se ejecutará el bloque de código
  useEffect(() => {
    return () => {
      loadVideos()
    }
  }, [])

  return (
    <div className="row">
      {videos.map(video => (
        <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
      ))}
    </div>
  )
}

export default VideoList
