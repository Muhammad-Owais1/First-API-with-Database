import mongoose from 'mongoose'

const url = `mongodb+srv://muhowasod:muhowasod@cluster0.laktd5w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)

export default mongoose