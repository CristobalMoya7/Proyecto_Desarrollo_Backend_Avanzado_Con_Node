class IndexController {
  getIndex(req, res) {
    res.send('Hello, NodePop!');
  }
}

module.exports = IndexController;