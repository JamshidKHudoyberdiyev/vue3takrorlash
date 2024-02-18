<template>
  <div class="p-4 has-background-danger-dark">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          v-Autofocus
          :value="props.title"
          @input="emit('update:title', $event.target.value)"
          type="text"
          ref="textariaRef"
          placeholder="Text input"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Notes</label>
      <div class="control">
        <textarea
          :value="props.content"
          class="textarea"
          v-Autofocus
          @input="emit('update:content', $event.target.value)"
          placeholder="Textarea"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button v-if="isEdit" class="button mx-3" @click="$router.push('/notes')" :class="btnColor">
          Back
        </button>
        <button class="button" @click="$emit('addNotes')" :class="btnColor">Add New Notes</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  content: {
    type: String
  },

  btnColor: {
    type: String,
    default: 'is-danger'
  },
  isEdit: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:title', 'update:content'])

const vAutofocus = {
  mounted(el) {
    el.focus()
    el.style = 'color:red'
  }
}
</script>

<style lang="scss" scoped></style>
