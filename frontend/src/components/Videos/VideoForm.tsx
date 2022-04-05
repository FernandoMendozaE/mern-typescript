import { ChangeEvent, useState, useEffect, useCallback } from 'react'
import { Video } from './Video'
import * as videoService from './VideoServices'
import { toast } from 'react-toastify' // ! importando el toast
import { useNavigate, useParams } from 'react-router-dom'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const VideoForm = () => {
  // * State

  const initialState = useCallback(
    () => ({
      title: '',
      description: '',
      url: ''
    }),
    []
  )

  const [video, setVideo] = useState<Video>(initialState)

  // * router dom usando los hooks naviagte y params
  const navigate = useNavigate() // ? para redireccionar
  const params = useParams<{ id: string }>() // ? para obtener el id del video

  // * Evento Handlers, para manejar los cambios en los inputs
  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  // * Función para enviar el formulario
  const handlenSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!params.id) {
      await videoService.createVideo(video)
      toast.success('New video added')
      setVideo(initialState)
    } else {
      await videoService.updateVideo(params.id, video)
    }

    navigate('/')
  }

  // * Función para obtener el video a editar
  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id)
    const { title, description, url } = res.data
    setVideo({ title, description, url })
  }

  // * useEffect para obtener el video a editar o crear uno nuevo
  useEffect(() => {
    if (params.id) {
      getVideo(params.id)
    } else {
      setVideo(initialState)
    }
  }, [params.id, initialState])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>

            <form onSubmit={handlenSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>

              {params.id ? (
                <button className="btn btn-info">Update Video</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoForm
