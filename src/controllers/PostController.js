import PostModel from '../models/Post'
class PostController {
  index(req, res) {
    PostModel.find().then((err, posts) => {
      if (err) {
        return res.send(err)
      }
      return res.json(posts)
    })
  }

  create(req, res) {
    const data = req.body

    const post = new PostModel({
      title: data.title,
      text: data.text
    })

    post.save().then(() => res.send({ status: 'ok' }))
  }

  read(req, res) {
    PostModel.findOne({ __id: req.params.id }).then(post => {
      if (!post) {
        return res.send({ error: 'not found' })
      } else {
        return res.json({ post })
      }
    })
  }

  update(req, res) {
    PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
      if (err) {
        return res.send(err)
      }

      return res.json({ status: 'updated' })
    })
  }

  delete(req, res) {
    PostModel.remove({
      _id: req.params.id
    }).then(post => {
      if (post) {
        return res.json({ status: 'deleted' })
      } else {
        return res.json({ status: 'error' })
      }
    })
  }
  deleteTitleAll(req, res) {
    PostModel.remove({
      _title: req.params.title
    }).then(post => {
      if (post) {
        return res.json({ status: 'deleted' })
      } else {
        return res.json({ status: 'error' })
      }
    })
  }
}

export default PostController
