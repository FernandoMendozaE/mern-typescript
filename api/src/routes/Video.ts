import { Schema, model } from 'mongoose'

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    url: {
      type: String,
      required: true,
      trim: true,
      unique: true // ? unique: true es para que no se repita la url
    }
  },
  {
    versionKey: false,
    timestamps: true // ? createdAt, updatedAt
  }
)

export default model('Video', videoSchema)
