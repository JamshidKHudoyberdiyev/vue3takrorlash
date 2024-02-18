<template>
  <div class="modal" :class="{ 'is-active': props.toggleModel }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" @click="DeleteItem" aria-label="close"></button>
      </header>
      <section class="modal-card-body">Are you delete This notes?</section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="DeleteNote">Delete</button>
        <button class="button" @click="DeleteItem">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { NotesStore } from '../store/notesStore'
const useNotesStore = NotesStore()

const { DeleteNotes } = useNotesStore

const props = defineProps({
  id: {
    type: Number
  },
  toggleModel: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits('update:modelValue')

const DeleteNote = () => {
  DeleteNotes(props.id)
  DeleteItem()
}
const DeleteItem = () => {
  emit('update:modelValue', false)
}
</script>

<style lang="scss" scoped></style>
