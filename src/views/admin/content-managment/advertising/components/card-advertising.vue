<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-card-header class="px-1 py-1 border-bottom">
        إعلان صورة
      </b-card-header>
      <b-card-body class="px-1 py-1">
        <b-img
          block
          height="140"
          rounded
          style="object-fit: cover"
          class="w-100"
          src="https://i.pravatar.cc/150?img=58"
          alt="Image 1"
        ></b-img>
        <h5>
          <strong class="text-primary">SDSDDSD</strong>
        </h5>
        <div class="d-flex justify-content-between">
          <span> 2022/3/44 </span>
          <span> 2022/3/44 </span>
        </div>
      </b-card-body>
      <b-card-footer class="p-0">
        <b-button
          variant="primary"
          block
          squared
          @click="$emit('details', item)"
          >تعديل</b-button
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
