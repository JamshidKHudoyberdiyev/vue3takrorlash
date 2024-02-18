<template>
  <AddEditNotes
    @addNotes="AddNotes"
    v-model:content="content"
    ref="addEditNoteRef"
    v-model:title="title"
  />
  <DeleteModal v-if="toggleModel" :id="id" :toggleModel="toggleModel" v-model="toggleModel" />
  <SingleNote
    v-for="note in notes"
    :key="note.id"
    :note="note"
    v-model:id="id"
    v-model:toggleModel="toggleModel"
  />
</template>

<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { NotesStore } from '../store/notesStore'
import SingleNote from './SingleNote.vue'
import { ref } from 'vue'
import AddEditNotes from './AddEditNotes.vue'
import DeleteModal from './DeleteModal.vue'
const title = ref('')
const content = ref('')
const id = ref('')

const useNotesStore = NotesStore()

const { notes } = storeToRefs(useNotesStore)

const { addNotes } = NotesStore()

const addEditNoteRef = ref(null)

const toggleModel = ref(false)

const AddNotes = () => {
  console.log(content.value)
  let newNotes = {
    id: Math.random() * 100,
    title: title.value,
    content: content.value
  }
  if (title.value != '' && content.value != '') {
    addNotes(newNotes)
    title.value = ''
    content.value = ''
    addEditNoteRef.value.focus()
  } else {
    alert('maydolar bosh')
  }
}

watch(title, (newV) => {
  console.log(newV)
})
</script>

<style lang="scss" scoped></style>
