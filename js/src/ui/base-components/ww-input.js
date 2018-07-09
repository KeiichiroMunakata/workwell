import BaseComponent from "./ww-base-component";

export default class Input extends BaseComponent {

    constructor(type = "text") {
        super("input");

        this.addClass("ww-input");
        this.setType(type);

        this.el.onAttachedToDom = () => {

        };
    }

    disable() {
        this.el.setAttribute("disabled", "");
        return this;
    }

    enable() {
        this.el.removeAttribute("disabled");
        return this;
    }

    onClick(fn) {
        this.el.addEventListener("click", fn);
        return this;
    }

    setType(type) {
        this.el.type = type;
        return this;
    }

    setAssistiveText(text) {
        this.assistiveText = text;
        return this;
    }

    getPlaceholder() {
        return this.el.placeholder;
    }

    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
        this.el.placeholder = placeholder;
        return this;
    }

    onInput(fn) {
        this.el.addEventListener("input", fn);
        return this;
    }

    setValue(value) {
        this.el.value = value;
        if (value === "") {
            // To fix safari-mobile issue
            this.el.focus();
            this.el.blur();
        }
        return this;
    }

    getValue() {
        return this.el.value;
    }
}