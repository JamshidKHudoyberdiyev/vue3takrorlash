<template>
  <div class="card mt-5">
    <header class="card-header">
      <p class="card-header-title">{{ note.title }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <p class="has-text-right has-text-right">{{ harflarsoni }} harfdan iborat</p>
      </div>
    </div>
    <footer class="card-footer columns is-gapless">
      <span class="is-info column"></span>
      <button class="button is-info column" @click="changeRoute(note.id)">Edit</button>
      <span class="is-info column"></span>
      <span class="is-info column"></span>
      <button @click="handleModelDelete" class="button is-danger is-normal column">Delete</button>
      <span class="is-info column"></span>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { NotesStore } from '../store/notesStore'
const useNotesStore = NotesStore()

const emit = defineEmits('update:toggleModel', 'update:id')
const router = useRouter()

const handleModelDelete = () => {
  emit('update:id', props.note?.id)
  emit('update:toggleModel', true)
}
const props = defineProps({
  note: {
    type: Object
  }
})

const harflarsoni = computed(() => {
  return props.note.content.length
})

const changeRoute = (id) => {
  router.push({ name: 'EditNote', params: { id: id } })
}
</script>

<style lang="scss" scoped></style>
