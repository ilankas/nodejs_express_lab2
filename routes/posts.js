// EXPORTS
module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts);
  },
  
  addPost(req, res) {
    let newPost = req.body;
	let postId = req.store.posts.length;
	req.store.posts.push(newPost);
	req.store.posts[postId].comments = [];
	res.status(201).send(
		{
			msg: "addPost",
			postId: postId
		}
	)
  },
  
  updatePost(req, res) {
	let postId = req.params.postId
	req.store.posts[postId] = req.body
    res.status(200).send(
		{
			msg: "updatePost",
			post: req.store.posts[postId]
		}
	)	
    
  },
  
  removePost(req, res) {
 	let postId = req.params.postId;
    req.store.posts.splice(postId, 1);
	res.status(200).send(`Post deleted ${postId}`)
	
  }  
}