(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    // CommonJS/Node (for bundlers like Webpack)
    module.exports = factory();
  } else {
    // Global browser window (or ES6 module if using a bundler)
    global.Button = factory();
  }
})(typeof window !== "undefined" ? window : this, function () {
  class Button {
    constructor({ text, className, onClick, style = {} }) {
      this.text = text;
      this.className = className;
      this.onClick = onClick;
      this.style = style;
    }

    render() {
      const button = document.createElement("button");
      button.textContent = this.text;
      button.className = this.className ? `btn ${this.className}` : "btn";
      button.style.cssText = this.convertStyleToString(this.style);
      button.addEventListener("click", this.onClick);
      return button;
    }

    convertStyleToString(style) {
      return Object.entries(style)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ");
    }
  }

  return Button;
});
