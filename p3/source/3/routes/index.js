var Post = require('./../models/post');

/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log('in index');
    Post.find(function(err, posts) {
        console.log('ran query');
        if (err) console.log(err);
        console.log('no error');
        res.render('index', { title: 'Blog', posts: posts });
    });
};

exports.serve_new = function(req, res) {
    res.render('new', {title: 'Add new post'});
}

exports.new_post = function(req, res) {
    var post = new Post({
        title: req.body.post_title,
        body: req.body.post_body,
        slug: req.body.post_slug
    });

    post.save(function(err) {
        if (err) console.log(err);
        else res.redirect('/');
    });
}

exports.show_post = function(req, res) {
    Post.findOne({ slug: req.params.slug }, function (err, post) {
        console.log(post);
        if (err) console.log(err);
        else res.render('post', {title: post.title, post: post});
    });
}
