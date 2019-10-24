"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PostController =
/*#__PURE__*/
function () {
  function PostController() {
    _classCallCheck(this, PostController);
  }

  _createClass(PostController, [{
    key: "index",
    value: function index(req, res) {
      _Post["default"].find().then(function (err, posts) {
        if (err) {
          return res.send(err);
        }

        return res.json(posts);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var data = req.body;
      var post = new _Post["default"]({
        title: data.title,
        text: data.text
      });
      post.save().then(function () {
        return res.send({
          status: 'ok'
        });
      });
    }
  }, {
    key: "read",
    value: function read(req, res) {
      _Post["default"].findOne({
        __id: req.params.id
      }).then(function (post) {
        if (!post) {
          return res.send({
            error: 'not found'
          });
        } else {
          return res.json({
            post: post
          });
        }
      });
    }
  }, {
    key: "update",
    value: function update(req, res) {
      _Post["default"].findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, function (err) {
        if (err) {
          return res.send(err);
        }

        return res.json({
          status: 'updated'
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      _Post["default"].remove({
        _id: req.params.id
      }).then(function (post) {
        if (post) {
          return res.json({
            status: 'deleted'
          });
        } else {
          return res.json({
            status: 'error'
          });
        }
      });
    }
  }, {
    key: "deleteTitleAll",
    value: function deleteTitleAll(req, res) {
      _Post["default"].remove({
        _title: req.params.title
      }).then(function (post) {
        if (post) {
          return res.json({
            status: 'deleted'
          });
        } else {
          return res.json({
            status: 'error'
          });
        }
      });
    }
  }]);

  return PostController;
}();

var _default = PostController;
exports["default"] = _default;