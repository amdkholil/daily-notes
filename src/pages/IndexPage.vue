<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import MdEditor from 'md-editor-v3';
import { api } from 'boot/axios';
import 'md-editor-v3/lib/style.css';

const date = ref<string>(dayjs().format('YYYY/MM/DD'));
const note = ref<string>();
const isDisable = ref<boolean>(false);

function simpan() {
  api.post('/set', {
    date: dayjs(date.value).format('YYYY-MM-DD'),
    note: note.value,
  });
}

async function ambil() {
  isDisable.value = true;
  let resp: IResponse<INote> = await api.post('/get', {
    date: dayjs(date.value).format('YYYY-MM-DD'),
  });
  if (resp.status == 200) {
    note.value = resp.data == null ? '' : resp.data.note;
  }
  isDisable.value = false;
}

onMounted(() => {
  ambil();
});
</script>

<template>
  <div class="">
    <div class="row">
      <div class="col-xl-2 col-md-3 col-sm-6 q-pa-md">
        <div>
          <q-date
            v-model="date"
            style="width: 100%"
            @update:model-value="ambil"
          />
        </div>
        <div class="q-mt-lg">
          <q-btn style="width: 100%" color="primary" no-caps @click="simpan">
            Simpan (Ctrl+S)
          </q-btn>
        </div>
      </div>
      <div class="col-xl-10 col-md-9 col-sm-6 q-pa-md">
        <MdEditor
          v-model="note"
          language="en-US"
          preview-theme="github"
          code-theme="atom"
          :disabled="isDisable"
          no-mermaid
          style="height: 720px"
          :toolbars-exclude="['github', 'save']"
          :on-save="simpan"
        />
      </div>
    </div>
  </div>
</template>

<style>
.md-editor-toolbar-wrapper {
  background-color: #1976d2;
  color: white;
  font-weight: bold;
}
.md-editor {
  border-radius: 5px !important;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
}
</style>
