var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = document.getElementById("container");

var MarkdownEditor = function (_React$Component) {
  _inherits(MarkdownEditor, _React$Component);

  function MarkdownEditor(props) {
    _classCallCheck(this, MarkdownEditor);

    var _this = _possibleConstructorReturn(this, (MarkdownEditor.__proto__ || Object.getPrototypeOf(MarkdownEditor)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.state = {
      value: "# Hello\nWelcome to the React Markdown previewer!\n\nHere is why you should use it:\n\n1. It's cool\n2. It's made in react\n3. Other reasons:\n  * **I said so**\n  * **I said so &times; infinity _I win._**" };
    return _this;
  }

  _createClass(MarkdownEditor, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: "getRawMarkup",
    value: function getRawMarkup() {
      return { __html: marked(this.state.value) };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "MarkdownEditor" },
        React.createElement(
          "div",
          { className: "editor" },
          React.createElement(
            "h3",
            null,
            "Input"
          ),
          React.createElement("textarea", { onChange: this.handleChange, defaultValue: this.state.value })
        ),
        React.createElement(
          "div",
          { className: "output" },
          React.createElement(
            "h3",
            null,
            "Output"
          ),
          React.createElement("div", { className: "content", dangerouslySetInnerHTML: this.getRawMarkup() })
        )
      );
    }
  }]);

  return MarkdownEditor;
}(React.Component);

ReactDOM.render(React.createElement(MarkdownEditor, null), node);