<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const emit = createEventDispatcher();
  let count: number = 0;
  const plusCount = () => {
    count++;
    emit('plusCount', count);
  };
</script>

<div>
  <span class="count">{count}</span>
  <button on:click={plusCount}>+1</button>
</div>

<style lang="less">
  .count {
    color: red;
  }
</style>
