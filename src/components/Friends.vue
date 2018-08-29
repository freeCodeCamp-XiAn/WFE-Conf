<template>
    <title :config=config></title>
</template>

<script>

import Title from "@/components/Title";
export default {
  name: "Title",
  data() {
    return {
    };
  },
  props: ['config'],
   components: {
    Title,
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
  margin: 40px auto 20px;
}

.title span {
  display: block;
  text-align: center;
  margin-bottom: 15px;
  color: #006400;
}

@media (max-width: 768px) {
  .title {
    margin: 20px auto 20px;
    font-size: 18px;
  }
  .title span {
    margin-bottom: 5px;
  }
}
</style>