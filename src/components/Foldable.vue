<template>
  <div class="folder">
    <slot name="closebtn">
      <div class="sticky-button"
           @click="toggle"
           :style="{
             opacity: collapsed ? 0 : isCollapseVisible ? 0 : 0.7,
             cursor: collapsed ? 'default' : 'pointer'
           }"
      ><div class="cross" >
        <svg viewbox="0 0 30 30" width="30" height="30">
          <path d="M 10,10 L 20,20 M 20,10 L 10,20" />
        </svg>
      </div>
      </div>
    </slot>
    <div
      class="folder-container"
      :style="{ maxHeight: currentMaxHeight + 'px' }"
      ref="container"
    >
      <slot>
      </slot>
    </div>
    <slot
      name="readon"
      :toggle="toggle"
      :collapsed="collapsed"
    >
      <div
        class="folder-readon"
        :class="{ 'collapsed': collapsed }"
        @click="toggle"
        v-if="reachThreshold"
        v-observe-visibility="visibilityChanged"
      >
        <span class="folder-text">
          {{ collapsed ? 'Read on' : 'Collapse' }}
        </span>
      </div>
    </slot>
  </div>
</template>

<script>
const defaultHeight = 120;

export default {
  props: {
    articleIsHere: {
      type: Boolean,
      default: false
    },

    minHeight: {
      type: Number,
      default: defaultHeight
    },

    height: {
      type: [Number, String],
      default: defaultHeight
    },

    async: {
      type: Boolean,
      default: true
    },

    timeout: {
      type: Number,
      default: 5000
    }
  },

  data() {
    let height = this.height;
    if (typeof this.height === "number" && this.height < this.minHeight) {
      height = this.minHeight;
    }
    return {
      collapsed: true,
      currentMaxHeight: height,
      threshold: height,
      reachThreshold: true,
      percentageMode:
        typeof this.height === "string" && this.height.indexOf("%") !== -1,
      percentage: null,
      isCollapseVisible: false
    };
  },

  created() {
    if (this.percentageMode) {
      this.percentage = parseInt(this.threshold.replace("%", "").trim()) / 100;
    } else if (typeof this.height === "string") {
      this.currentMaxHeight = this.threshold = defaultHeight;
    }
  },

  mounted() {
    this.handleMount();

    setTimeout(this.handleMount, 50);

    if (this.async) {
      onElementHeightChange({
        el: this.$refs.container,
        callback: this.handleMount,
        timeout: this.timeout
      });
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.isCollapseVisible = true;
      } else {
        this.isCollapseVisible = false;
      }
    },

    handleMount() {
      const contentHeight = this.$refs.container.scrollHeight;
      this.calculateThreshold(contentHeight);
      this.checkReachThresfold(contentHeight);
    },

    checkReachThresfold(contentHeight) {
      this.reachThreshold = contentHeight > this.threshold;
    },

    calculateThreshold(contentHeight) {
      if (this.percentageMode) {
        let calculatedHeight = contentHeight * this.percentage;
        if (calculatedHeight < this.minHeight) {
          calculatedHeight = this.minHeight;
        }
        this.currentMaxHeight = calculatedHeight;
        this.threshold = calculatedHeight;
      }
    },

    toggle(event) {
      if (event.target.localName !== "span" && this.collapsed) {
        return;
      }
      this.collapsed = !this.collapsed;
      if (this.collapsed) {
        this.currentMaxHeight = this.threshold;
      } else {
        // explicitly set max height so that it can be transitioned
        this.currentMaxHeight = this.$refs.container.scrollHeight;
      }
    }
  }
};

function onElementHeightChange({ el, callback, timeout }) {
  let oldHeight = el.scrollHeight,
    newHeight;
  let poller;
  let interval = 100;
  let count = 0;
  let maxCount = timeout / interval;

  function unit() {
    count++;
    newHeight = el.scrollHeight;
    if (oldHeight !== newHeight) {
      callback(newHeight);
      if (poller) {
        clearTimeout(poller);
      }
    }
    oldHeight = newHeight;
    if (count <= maxCount) {
      poller = setTimeout(unit, interval);
    }
  }

  unit();
}
</script>

<style>
.folder {
  box-sizing: border-box;
  transform: translate(0, 0);
}
.folder .folder-container {
  transition: max-height 1s ease-in-out;
  overflow: hidden;
}
.folder .folder-readon {
  background-color: rgba(0, 0, 0, 0.123);
  padding-right: 20px;
  padding-top: 10px;
  height: 40px;
  text-align: right;
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
  color: rgba(255, 140, 0, 0.753);
}
.folder .folder-readon .folder-text {
  vertical-align: top;
  top: 0;
}
.sticky-button {
  position: sticky;
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  top: 0;
  color: white;
  background-image: radial-gradient(rgba(255, 0, 0, 0.329), rgba(255, 0, 0, 0));
  cursor: pointer;
  text-align: center;
  transition: opacity 0.7s ease-in-out;
  margin-left: auto;
  margin-right: 0;
  transform: translate(-20px, 55px);
}
.cross {
  stroke: white;
  stroke-linecap: round;
  stroke-width: 3;
  text-align: center;
  line-height: 30px;
}

code {
  font-size: 14px;
  overflow: auto;
  overflow-y: hidden;
  letter-spacing: 1px;
}

pre {
  background-color: rgba(73, 65, 65, 0.178);
  border-radius: 20px;
  padding: 10px;
  overflow: auto;
  line-height: 1;
  padding: 16px;
  box-shadow: inset 0 0 14px 2px rgba(0, 0, 0, 0.5);
  text-shadow: 1px 1px 0 rgb(0, 0, 0);
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #282828;
}

.hljs,
.hljs-subst {
  color: #ebdbb2;
}

/* Gruvbox Red */
.hljs-deletion,
.hljs-formula,
.hljs-keyword,
.hljs-link,
.hljs-selector-tag {
  color: #fb7d34;
}

/* Gruvbox Blue */
.hljs-built_in,
.hljs-emphasis,
.hljs-name,
.hljs-quote,
.hljs-strong,
.hljs-title,
.hljs-variable {
  color: #509b7e;
}

/* Gruvbox Yellow */
.hljs-attr,
.hljs-params,
.hljs-template-tag,
.hljs-type {
  color: #fabd2f;
}

/* Gruvbox Purple */
.hljs-builtin-name,
.hljs-doctag,
.hljs-literal,
.hljs-number {
  color: #8f3f71;
}

/* Gruvbox Orange */
.hljs-code,
.hljs-meta,
.hljs-regexp,
.hljs-selector-id,
.hljs-template-variable {
  color: #fe8019;
}

/* Gruvbox Green */
.hljs-addition,
.hljs-meta-string,
.hljs-section,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-string,
.hljs-symbol {
  color: #b8bb26;
}

/* Gruvbox Aqua */
.hljs-attribute,
.hljs-bullet,
.hljs-class,
.hljs-function,
.hljs-function .hljs-keyword,
.hljs-meta-keyword,
.hljs-selector-pseudo,
.hljs-tag {
  color: #8ec07c;
}

/* Gruvbox Gray */
.hljs-comment {
  color: #928374;
}

/* Gruvbox Purple */
.hljs-link_label,
.hljs-literal,
.hljs-number {
  color: #d3869b;
}

.hljs-comment,
.hljs-emphasis {
  font-style: italic;
}

.hljs-section,
.hljs-strong,
.hljs-tag {
  font-weight: bold;
}
</style>
