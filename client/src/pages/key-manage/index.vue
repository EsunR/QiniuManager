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
              {{ item.domain }}
            </v-card-subtitle>
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="black--text">
              <div class="key-info">
                <strong>Bucket:</strong>
                {{ item.bucket }}
              </div>
              <div class="key-info">
                <strong>AK:</strong>
                {{ item.publicKey }}
              </div>
              <div class="key-info">
                <strong>SK:</strong>
                {{ item.privateKey }}
              </div>
            </v-card-text>
            <v-card-actions class="btn-wrapper">
              <v-btn text color="primary" @click="handleUpdateClick(item)"
                >修改内容</v-btn
              >
              <v-btn text @click="handleDelete(item.id)">删除</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </transition-group>
    </v-row>

    <!-- 占位框 -->
    <v-card
      v-if="qiniuKeys.length === 0"
      elevation="2"
      class="placeholder-card"
      outlined
    >
      这里什么都没有咩 (｀･ω･´) (´･ω･｀)
    </v-card>

    <!-- 模态框 -->
    <v-dialog v-model="dialogVisiable" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">修改信息</span>
        </v-card-title>
        <v-card-text>
          <QiniuKeyForm :defaultData="selectedItem" ref="updateForm" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialogVisiable = false">关闭</v-btn>
          <v-btn
            :loading="updateBtnLoading"
            color="blue darken-1"
            text
            @click="handleSubmitUpdate"
            >保存修改</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import QiniuKeyForm from "./subcomponents/QiniuKeyForm"
import { pick } from "@/utils"
export default {
  name: "keyManage",
  components: {
    QiniuKeyForm
  },
  data() {
    return {
      dialogVisiable: false,
      selectedItem: {},
      updateBtnLoading: false
    }
  },
  computed: {
    qiniuKeys() {
      return this.$store.getters.qiniuKeys
    }
  },
  methods: {
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
    handleAddQiniuKey() {
      let form = this.$refs.addForm
      let formData = form.formData
      if (form.validate()) {
        this.$store.dispatch("key/addQiniuKey", formData).then(() => {
          this.$message("添加成功")
          form.reset()
        })
      } else {
        this.$message({
          type: "error",
          message: "请输入完整表单内容"
        })
      }
    },
    handleDelete(id) {
      this.$alert({
        title: "确认操作",
        content: "您确定要删除当前的 Key 吗？",
        callback: () => {
          this.$store.dispatch("key/delQiniuKey", id).then(() => {
            this.$message("删除成功")
          })
        }
      })
    },
    handleUpdateClick(item) {
      const selectedItem = pick(item, [
        "id",
        "name",
        "publicKey",
        "privateKey",
        "bucket",
        "domain",
        "zone"
      ])
      this.selectedItem = selectedItem
      this.dialogVisiable = true
    },
    handleSubmitUpdate() {
      const form = this.$refs.updateForm
      console.log(form.formData)
      console.log(this.selectedItem)
      if (JSON.stringify(form.formData) === JSON.stringify(this.selectedItem)) {
        this.dialogVisiable = false
        this.$message("信息未修改")
        this.updateBtnLoading = false
      } else {
        this.$store
          .dispatch("key/updateQiniuKey", form.formData)
          .then(() => {
            this.dialogVisiable = false
            this.$message("修改成功")
          })
          .finally(() => {
            this.updateBtnLoading = false
          })
      }
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
    padding: 10px 0;
  }
  .btn-wrapper {
    margin-top: -15px;
  }
}

.placeholder-card {
  text-align: center;
  padding: 20px;
  margin-top: 10px;
  color: rgba($color: #000000, $alpha: 0.6);
}
</style>
