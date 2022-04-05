import { Video } from './Video'
import ReactPlayer from 'react-player' // ! importando react-player
import './VideoItem.css' // ! importando el css
import { useNavigate } from 'react-router-dom'
import * as videoService from './VideoServices'

// * Declarando la interface Props para el componente VideoItem
interface Props {
  video: Video // ? Video es un tipo de dato de Video que se importa desde Video.tsx
  loadVideos: () => void // ? loadVideos es una función que se importa desde VideoList.tsx
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate() // ! importando el hook useNavigate

  // * Función para eliminar un video
  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id)
    loadVideos()
  }
  return (
    <div className="col-md-4">
      <div className="card card-body video-card" style={{ cursor: 'pointer' }}>
        <div className="d-flex justify-content-between">
          <h1 onClick={() => navigate(`/update/${video._id}`)}>{video.title}</h1>
          <span className="text-danger" onClick={() => video._id && handleDelete(video._id)}>
            x
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  )
}

export default VideoItem
