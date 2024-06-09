<template>
  <teleport to=".modals-container">
    <div class="modal bg-yellow-100 p-3 z-10 w-full h-full left-0 top-0 absolute">
      <h1 class="text-2xl"><slot name="title" /></h1>
      <slot />
      <button class="btnn">Hide Modals</button>
    </div>
  </teleport>
</template>
