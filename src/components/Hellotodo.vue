<template>
  <div class="contianer">
    <v-contaoner class="">
      <h1>การบ้าน/งานที่ได้รับมอบหมาย</h1>
      <v-select
        v-model="subject"
        :items="items"
        label="--เลือกหัวข้อ--"
        solo
      ></v-select>
      <v-text-field v-model="work" label="รายการ" outlined></v-text-field>
      <v-btn color="success" class="mr-4" @click="addTodo()">เพิ่ม</v-btn>
      <v-contaoner class="">
        <h1>รายวิชาที่เพิ่ม</h1>
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in additems" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>

              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="bg-danger"
                @click="deleteTodo(i)"
              >
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-contaoner>
    </v-contaoner>
  </div>
</template>

<script>
export default {
  subject: "",
  work: "",
  data() {
    return {
      items: ["วิชา Web", " วิชา SA", " วิชา ML", "อื่นๆ"],
      selectedItem: 1,
      additems: [
        { text: "วิชา Web Assignment500" },
        { text: "วิชา ML Assignment1" },
        { text: "วิชา ML ออกแบบ" },
        { text: "วิชา Web Assignment501" },
      ],
    };
  },
  methods: {
    addTodo() {
      console.log(this.subject + this.work);
      this.additems.push({ text: this.subject + " " + this.work });
    },
    deleteTodo(index) {
      this.additems.splice(index, 1);
    },
  },
};
</script>

<style></style>
