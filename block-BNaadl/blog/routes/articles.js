const express = require("express");
const router = express.Router();
const Article = require("../models/articles");
/* GET users listing. */
//get request on the form to show form where we can post a new article
router.get("/newpost/", (req, res) => {
  res.render("articleForm");
});

// Get all  the articles from the database
router.get("/", (req, res) => {
  Article.find({}, (err, articles) => {
    res.render("articles", { articles: articles });
  });
});
// Get the form to  submit the data in the database
router.get("/new", (req, res) => {
  res.render("articleForm");
});
// submit  the data in the database
router.post("/", (req, res) => {
  Article.create(req.body, (err, article) => {
    console.log(article);
    res.redirect("articles");
  });
});
//Get a single article data
router.get("/:id", (req, res) => {
  let id = req.params.id;
  Article.findById(id, (err, article) => {
    res.render("singlearticle", { article: article });
  });
});

//get a  article form in order to again update data
router.get("/:id/edit", (req, res) => {
  console.log("enetering herer ....");
  let id = req.params.id;
  Article.findById(id, (err, article) => {
    res.render("editArticle", { article: article });
  });
});
//Delete the  article if user clicks on the delete button
router.get("/:id/delete", (req, res) => {
  let id = req.params.id;
  Article.findByIdAndDelete(id, (err, deletedArticle) => {
    if (err) return next(err);
    res.redirect("/articles");
  });
});
// updates a single article
router.post("/:id/", (req, res) => {
  let id = req.params.id;
  Article.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedArticle) => {
      if (err) return next(err);
      res.redirect("/articles");
    }
  );
});
// Updates the user post  likes  : increment the user likes
router.get("/:id/:like/like", (req, res) => {
  let id = req.params.id;
  let like = req.params.like;
  Article.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true },
    (err, updatedArticle) => {
      if (err) return next(err);
      res.redirect(`/articles/${id}`);
    }
  );
});

// Updates the user post  likes  : decrement the user likes   once  the user
//click the decrement button and render the same article page
router.get("/:id/:like/dislike", (req, res) => {
  let id = req.params.id;
  let like = req.params.like;
  Article.findByIdAndUpdate(
    id,
    { $inc: { likes: -1 } },
    { new: true },
    (err, updatedArticle) => {
      if (err) return next(err);
      res.redirect(`/articles/${id}`);
    }
  );
});

module.exports = router;
