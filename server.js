const express = require('express')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')

let app = express()

let store = {
  posts: [
    {
		name: 'Top 10 ES6 Features every Web Developer must know',
		url: 'https://webapplog.com/es6',
		text: 'ES6, it is a new JavaScript implementation.',
		comments: [
			'A',
			'B',
			'C'
		]
    }
  ]
}

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())
app.use((req, res, next)=>{
    req.store = store;
    next();
});

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000, function() {
	console.log('Server is running on port 3000')
})
