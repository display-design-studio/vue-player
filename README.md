# Vue Player

## Introduction
Lightweight, customizable, and easy-to-implement vue video player.

## Installation
```bash
$ npm i @display-studio/vue-player
```

## Setup
```js
<script setup>
import { VuePlayer } from '@display-studio/vue-player'
</script>

<template>
    <div>
        <VuePlayer src="" poster="" @play="">
            // Your custom controls here
        </VuePlayer>
    </div>
</template>
```

## Custom Controls
You can disable the native video tag controls and use your own custom ones.

#### Example:
```App.vue```
```js
<script setup>
import { VuePlayer } from '@display-studio/vue-player'
</script>

<template>
    <div>
        <VuePlayer>
          <!--useVuePlayer() within a VuePlayer instance -->
            <MyControls />
        </VuePlayer>
    </div>
</template>
```

```MyControls.vue```
```js
<script setup>
import { useVuePlayer } from '@display-studio/vue-player'
const player = useVuePlayer()
</script>

<template>
  <div class="vue-player__controls">
    <button @click="player.togglePlay()" class="vue-player__controls-toggleplay">
      {{ player.playing ? "pause" : "play" }}
    </button>
    <button @click="player.toggleMute()" class="vue-player__controls-togglemute">
      {{ player.videoMuted ? "unmute" : "mute" }}
    </button>
  </div>
</template>

<style scoped>
.vue-player__controls {
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  width: fit-content;
  gap: 10px;
  padding: 10px;

}

.vue-player__controls-toggleplay,
.vue-player__controls-togglemute {
  flex: 0 0 auto;
  display: block;
  background-color: white;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 2px 5px;

}
</style>
```

## Props
| Name                     | Type          | Required       | Default       | Description |
|--------------------------|---------------|----------------|---------------|-------------|
| ```src```                | ```String```  | ```true```     |               | Video source |
| ```controls```          | ```Boolean``` | ```false```    | ```false```   | Enable native video controls            |
| ```loop```               | ```Boolean``` | ```false```    | ```false```   | Enable video loop            |
| ```width```              | ```Number```  | ```false```    |               | Video width           |
| ```height```             | ```Number```  | ```false```    |               | Video height            |
| ```autoplay```           | ```Boolean``` | ```false```    | ```false```   | Enable autoplay            |
| ```muted```              | ```Boolean``` | ```false```    | ```false```   | Mute video at the initialization            |
| ```poster```             | ```String```  | ```false```    |               | Source of the poster            |
| ```preload```            | ```String```  | ```false```    | ```"auto"```  | Manage video loading [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#preload)            |
| ```showPlayerDuration``` | ```Boolean``` | ```false```    | ```false```   | Enable video current time and total duration            |
| ```showPlayerTrack```    | ```Boolean``` | ```false```    | ```false```   | Enable video player track            |

#### Example:
```js
<template>
    <VuePlayer :loop="true" /></VuePlayer>
</template>
```
## Events
We have chosen the following events, but they may change. 

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#events) for more info.
| Event                 | Description          |
|-----------------------|---------------------------|
|```play```            | Triggered when the video starts |
|```pause```           | Triggered when the video pause  |
|```ended```           | Triggered when the video end    |
|```loadeddata```      | The loadeddata event is fired when the frame at the current playback position of the media has finished loading; often the first frame. |
|```waiting```         | The waiting event is fired when playback has stopped because of a temporary lack of data. |
|```playing```         | The playing event is fired after playback is first started, and whenever it is restarted. For example, it is fired when playback resumes after having been paused or delayed due to a lack of data. |
|```timeupdate```      | The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.|
|```canplay```         | The canplay event is fired when the user agent can play the media but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.                        |
|```canplaythrough```  | The canplaythrough event is fired when the user agent can play the media and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content. |
|```statechanged```    | Triggered when a state changed    |

#### Example:
```js
<script setup>
    import { VuePlayer } from '@display-studio/vue-player'

    const myCustomFunction = ({ event }) => {
        console.log(event)
    }
</script>

<template>
    <VuePlayer @play="myCustomFunction"></VuePlayer>
</template>
```

## Recommended CSS
These classes have already been included in the components.

```css
.vue-player {}

/* Player Timestamp */
.vue-player__timestamp {}

.vue-player__timestamp-inner {}

.vue-player__current-time {}

.vue-player__separator {}

.vue-player__duration {}

/* Player Track */
.vue-player__video-track {}

.vue-player__video-track input[type="range"] {}

.vue-player__video-track input[type="range"]:focus {}

.vue-player__video-track input[type="range"]::-webkit-slider-runnable-track {}

.vue-player__video-track input[type="range"]::-webkit-slider-thumb {}

```

## CSS Example
```css
.vue-player {
  width: 100%;
  position: relative;
  height: fit-content;
  line-height: 0;

  video {
    width: 100%;
    height: auto;
  }
}

/* Player Timestamp */
.vue-player__timestamp {
  flex: 2;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px;
}

.vue-player__timestamp-inner {
  background-color: white;
  border-radius: 5px;
  padding: 2px 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  user-select: none;

  p {
    display: inline-block;
    line-height: 100%;
  }
}

.vue-player__current-time {
  color: royalblue;
}

.vue-player__separator {
  color: royalblue;

}

.vue-player__duration {
  font-weight: bold;
  color: black;
}


/* Player Track */
.vue-player__video-track {
  padding: 0 0 10px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 25px;
  display: flex;
  align-items: center;
}

.vue-player__video-track input[type="range"] {
  position: relative;
  overflow: hidden;
  width: 100%;
  -webkit-appearance: none;
  background-color: white;
  border-radius: 5px;
  color: black;
}

.vue-player__video-track input[type="range"]:focus {
  outline: none;
}

.vue-player__video-track input[type="range"]::-webkit-slider-runnable-track {
  height: 6px;
  -webkit-appearance: none;
  color: black;

}

.vue-player__video-track input[type="range"]::-webkit-slider-thumb {
  width: 6px;
  -webkit-appearance: none;
  height: 6px;
  cursor: ew-resize;
  background: black;
  box-shadow: -100vw 0 0 100vw black;
}
```
