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
  /* background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMzAgMzAiPjxwYXRoIGQ9Ik0gMTAsMTAgTCAyMCwyMCBNIDIwLDEwIEwgMTAsMjAiIC8+PC9zdmc+"); */
  stroke: white;
  stroke-linecap: round;
  stroke-width: 3;
  text-align: center;
  line-height: 30px;
}
</style>
