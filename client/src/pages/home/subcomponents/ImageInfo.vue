<template>
  <!-- <div class="image-info">{{ info.url }}</div> -->
  <v-card class="mx-auto image-info" max-width="100%" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div>
          <div class="overline mb-4">preview | 预览</div>
          <v-list-item-title class="headline mb-1">{{
            info.name
          }}</v-list-item-title>
        </div>
        <div class="input-wrapper">
          <ClipInput v-model="url" label="URL" />
          <ClipInput v-model="markdown" label="Mark Down" />
          <ClipInput v-model="bbcode" label="BBCode" />
          <ClipInput v-model="html" label="HTML" />
        </div>
      </v-list-item-content>

      <v-list-item-avatar tile size="350" color="grey">
        <v-img class="preview-img" :src="info.url"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <!-- <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import ClipInput from "./ClipInput"
export default {
  name: "ImageInfo",
  components: {
    ClipInput
  },
  data() {
    return {
      url: "",
      markdown: "",
      bbcode: "",
      html: ""
    }
  },
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({
        bucket: "",
        fsize: null,
        hash: "",
        key: "",
        name: "",
        url: ""
      })
    }
  },
  mounted() {
    let url = this.info.url
    this.url = url
    this.markdown = `![](${url})`
    this.bbcode = `[url=${url}][img]${url}[/img][/url]`
    this.html = `<a href="${url}" target="_blank"><img src="${url}" ></a>`
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.image-info {
  margin-bottom: 20px;
}
</style>
