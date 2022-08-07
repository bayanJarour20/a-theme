<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-card-header class="px-1 py-1 border-bottom">
         Announcement Add a question
      </b-card-header>
      <b-card-body class="px-1 py-1">
        <b-img
          block
          height="140"
          rounded
          style="object-fit: cover"
          class="w-100"
          src="~@/assets/images/images.png"
          alt="Image 1"
        ></b-img>
          <p class="my-4"> Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="d-flex justify-content-between">
          <span> 2022/3/44 </span>
          <span> 2022/3/44 </span>
        </div>
      </b-card-body>
      <b-card-footer class="p-0">
        <b-button
        style="display:flex;    justify-content: center;"

          variant="primary"
          block
          squared
          @click="$emit('details', item)"
          >edit</b-button
        >
      </b-card-footer>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
