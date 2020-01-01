<template>
  <v-form class="qiniu-key-form" ref="form">
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="formData.name"
          label="备注名"
          :rules="[v => !!v || '请输入']"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="formData.domain"
          label="域名"
          :rules="[v => !!v || '请输入']"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="formData.bucket"
          label="bucket"
          :rules="[v => !!v || '请输入']"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-select
          :items="zoneList"
          v-model="formData.zone"
          label="Zone"
          :rules="[v => !!v || '请选择']"
        ></v-select>
      </v-col>
    </v-row>
    <v-text-field
      v-model="formData.publicKey"
      label="AK"
      :rules="[v => !!v || '请输入']"
    ></v-text-field>
    <v-text-field
      v-model="formData.privateKey"
      label="SK"
      :rules="[v => !!v || '请输入']"
      :append-icon="showSk ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showSk ? 'text' : 'password'"
      @click:append="showSk = !showSk"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: "QiniuKeyForm",
  data() {
    return {
      formData: {
        name: "",
        publicKey: "",
        privateKey: "",
        bucket: "",
        domain: "",
        zone: null
      },
      showSk: false,
      zoneList: [
        { text: "华东", value: "z0" },
        { text: "华北", value: "z1" },
        { text: "华南", value: "z2" },
        { text: "北美", value: "na0" }
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.$emit("onSubmit", this.formData)
    }
  }
}
</script>

<style lang="scss" scoped></style>
