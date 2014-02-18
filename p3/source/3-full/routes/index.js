var Post = require('./../models/post');

/*
 * GET home page.
 */

exports.index = function(req, res){
    // find all posts in mongoose
    Post.find(function (err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { title: 'Blog' , posts: posts});
        }
    });
};

exports.new_posts = function (req, res) {
    res.render('new', {title: 'Add new post'});
}

exports.add_post = function (req, res) {
    var post = new Post({
        // get the body params from "name" attribute of the form
        title: req.body.post_title,
        body: req.body.post_body,
        slug: req.body.post_slug
    });

    post.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
}

exports.see_post = function (req, res) {
    Post.findOne({slug: req.params.slug}, function (err, post) {
        res.render('post', {title: post.title, post: post});
    });
}
