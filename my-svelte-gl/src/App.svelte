<script>
  export let name;

  let count = 0;

  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 9;
  }

  function handleClick() {
    count += 1;
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name.toUpperCase()}!</h1>
<button on:click="{handleClick}">
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count}</p>
