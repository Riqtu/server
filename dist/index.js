"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _PostController = _interopRequireDefault(require("./controllers/PostController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Post = new _PostController["default"]();
var app = (0, _express["default"])();

var cors = require('cors'); // mongoose.connect(
//   'mongodb+srv://Zet:20011998z@fors-rmfbi.azure.mongodb.net/test?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true }
// )


_mongoose["default"].connect('mongodb://localhost/forsmart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(cors());
app.post('/posts', Post.create);
app.get('/posts', Post.index);
app["delete"]('/posts/:id', Post["delete"]);
app["delete"]('/posts/:title', Post.deleteTitleAll);
app.put('/posts/:id', Post.update);
app.get('/posts/:id', Post.read);
app.listen('3333', function () {
  console.log('Server started!!!');
});