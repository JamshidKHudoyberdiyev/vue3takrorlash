import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const NotesStore = defineStore('notesStore', () => {
  const notes = ref([
    {
      id: 1,
      title: 'first title',
      content: 'first contets'
    },
    {
      id: 2,
      title: 'Second title   2',
      content: 'Second contets   2'
    },
    {
      id: 3,
      title: 'third  title 3 ',
      content: 'third  contets 3 '
    }
  ])

  const addNotes = (newContent) => {
    notes.value.unshift(newContent)
  }

  const getNotesById = computed(() => {
    return (id) => {
      return notes.value.find((item) => id == item.id)
    }
  })

  const DeleteNotes = (id) => {
    notes.value = notes.value.filter((note) => note.id != id)
  }

  const updateNotelist = (note) => {
    const index = notes.value.findIndex((item) => item.id == note.id)
    notes.value[index] = { ...note }
    // router.push('/notes')
  }

  return { notes, addNotes, DeleteNotes, getNotesById, updateNotelist }
})
