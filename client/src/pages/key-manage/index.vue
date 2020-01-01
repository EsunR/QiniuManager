<template>
  <div id="key-manage">
    <!-- 添加 From -->
    <v-card elevation="2" outlined class="add-key-form">
      <v-card-text class="header">
        <h1 class="display-1">添加七牛云密钥</h1>
      </v-card-text>
      <v-card-text>
        <QiniuKeyForm ref="addForm" />
      </v-card-text>
      <v-btn
        class="add-btn"
        color="primary"
        @click="handleAddQiniuKey"
        fab
        dark
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-card>

    <!-- 列表 -->
    <v-row>
      <transition-group
        style="width: 100%; display: inherit; flex-wrap: inherit"
        name="slideBottomToTop"
      >
        <v-col
          cols="12"
          :md="qiniuKeys.length > 1 ? 6 : 12"
          v-for="item in qiniuKeys"
          :key="item.id"
        >
          <v-card elevation="2" class="list-card" outlined>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>
              <span>{{ getZone(item.zone) }}</span>
              {{ item.domain }}</v-card-subtitle
            >
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="black--text">
              <div class="key-info">
                <strong>Bucket:</strong> {{ item.bucket }}
              </div>
              <div class="key-info">
                <strong>AK:</strong> {{ item.publicKey }}
              </div>
              <div class="key-info">
                <strong>SK:</strong> {{ item.privateKey }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>修改内容</v-btn>
              <v-btn text @click="handleDelete(item.id)">删除</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </transition-group>
    </v-row>
  </div>
</template>

<script>
import QiniuKeyForm from "./subcomponents/QiniuKeyForm"
export default {
  name: "keyManage",
  components: {
    QiniuKeyForm
  },
  data() {
    return {
      deleteDialog: false
    }
  },
  computed: {
    qiniuKeys() {
      return this.$store.getters.qiniuKeys
    }
  },
  methods: {
    handleAddQiniuKey() {
      let form = this.$refs.addForm.$refs.form
      let formData = this.$refs.addForm.formData
      if (form.validate()) {
        this.$store.dispatch("key/addQiniuKey", formData)
        this.$message("添加成功")
      } else {
        this.$message({
          type: "error",
          message: "请输入完整表单内容"
        })
      }
    },
    getZone(zondeCode) {
      switch (zondeCode) {
        case "z0":
          return "华东"
        case "z1":
          return "华北"
        case "z2":
          return "华南"
        case "na0":
          return "北美"
        default:
          return "unknow"
      }
    },
    handleDelete(id) {
      this.$alert({
        title: "确认操作",
        content: "您确定要删除当前的 Key 吗？",
        callback: () => {
          this.$store.dispatch("key/delQiniuKey", id)
          this.$message("删除成功")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
> ::v-deep .v-card {
  margin-bottom: 20px;
}

.add-key-form {
  position: relative;
  padding-bottom: 30px;
  .header {
    background-color: $color-primary;
    padding: 20px;
    h1 {
      font-weight: lighter;
      color: #fff;
    }
  }
  .add-btn {
    position: absolute;
    right: 20px;
  }
}

.list-card {
  padding: 10px;
  margin-bottom: 5px;
  .domain {
    padding: 10px 0;
  }
  .key-info {
    padding: 2px 0;
  }
}
</style>
