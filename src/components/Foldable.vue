<template>
  <div class="folder">
    <div
      class="folder-container"
      :style="{ maxHeight: currentMaxHeight + 'px' }"
      ref="container"
    >
      <slot/>
    </div>

    <div
      :class="{ 'collapsed': collapsed }"
    ></div>

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
      >
        <span class="folder-text">
          {{ collapsed ? 'Read on' : 'Collapse' }}
        </span>
      </div>
    </slot>
  </div>
</template>

<script>
const defaultHeight = 160;

export default {
  name: "foldable",

  props: {
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
      default: 3000
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
      percentage: null
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

    toggle() {
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
  position: relative;
}
.folder .folder-container {
  transition: max-height 0.7s ease-in-out;
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
}
</style>
