# Vue Player
---
## Props
| name               | type    | required | default |
|--------------------|---------|----------|---------|
| src                | String  | true     |         |
| controls           | Boolean | false    | false   |
| loop               | Boolean | false    | false   |
| width              | Number  | false    |         |
| height             | Number  | false    |         |
| autoplay           | Boolean | false    | false   |
| muted              | Boolean | false    | false   |
| poster             | String  | false    |         |
| preload            | String  | false    | "auto"  |
| showPlayerDuration | Boolean | false    | false   |
| showPlayerTrack    | Boolean | false    | false   |

```
<template>
    <VuePlayer :loop="true" />
    </VuePlayer>
</template>
```
---
## Events
- @play
- @pause
- @ended
- @loadeddata
- @waiting
- @playing
- @timeupdate
- @canplay
- @canplaythrough
- @statechanged

```
<script setup>
    const myCustomFunction = ({ event }) => {
        console.log(event)
    }
</script>

<template>
    <VuePlayer @play="myCustomFunction">
        <VuePlayerControls />
    </VuePlayer>
</template>
```

---
## Style