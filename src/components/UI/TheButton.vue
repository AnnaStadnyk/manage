<script>
export default {
  props: ['mode', 'isShadow', 'small']
}
</script>

<template>
  <button
    :class="
      ({
        brand: 'bg-brand text-white',
        inverted: 'bg-white text-brand'
      }[mode],
      { 'shadow-lg shadow-brand/50': isShadow, 'min-w-48 ': !small })
    "
    class="py-3 xl:py-3.5 px-8 rounded-full hover:opacity-90 xl:hover:-translate-y-1 transition ease-in-out duration-300 focus:outline-none"
  >
    <slot></slot>
  </button>
</template>
