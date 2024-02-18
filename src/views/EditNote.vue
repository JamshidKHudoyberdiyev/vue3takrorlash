<template>
  <AddEditNotes
    @addNotes="onSaveNote"
    v-model:content="content"
    ref="addEditNoteRef"
    v-model:title="title"
    btnColor="is-info"
    :isEdit="true"
  />
</template>

<script setup>
import AddEditNotes from './AddEditNotes.vue'
import { NotesStore } from '../store/notesStore'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRoute()
const route = useRouter()
const useNotesStore = NotesStore()

const content = ref('')
const title = ref('')

content.value = useNotesStore.getNotesById(router.params.id).content
title.value = useNotesStore.getNotesById(router.params.id).title
const onSaveNote = () => {
  useNotesStore.updateNotelist({ id: router.params.id, title: title.value, content: content.value })
  route.push('/notes')
}
</script>

<style lang="scss" scoped></style>
