// EXPORTS
module.exports = {
  getComments(req, res) {
	let postId = req.params.postId;
	let comments = req.store.posts[postId].comments || [];
	req.store.posts[postId].comments = comments;
	res.status(200).send(comments)
  },
  
  addComment(req, res) {
	let newComment = req.body.comments;
    let postId = req.params.postId;
	let comments = req.store.posts[postId].comments || [];
	let commentId = req.store.posts[postId].comments.length;
	req.store.posts[postId].comments.push(newComment)
	res.status(201).send( 
		{
			msg: "addComment",
			postId: postId, 
			commentId: commentId
		}
	);
	
  },
  
  updateComment(req, res) {
    let postId = req.params.postId;
    let commentId = req.params.commentId;
    req.store.posts[postId].comments[commentId]= req.body.comments
    res.status(200).send(
		{
			msg: "updateComment",
			postId: postId, 
			commentId: commentId
		}
	);
	
  },
  
  removeComment(req, res) {
    let postId = req.params.postId;
    let commentId = req.params.commentId;
    req.store.posts[postId].comments.splice(commentId, 1)
	res.status(200).send(`Comment ${commentId} deleted (post: ${postId})`)
  }  
}
