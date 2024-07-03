<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-card-header class="px-1 py-1 border-bottom">
         {{item.title}}
      </b-card-header>
      <b-card-body class="px-1 py-1">
        <b-img
          block
          height="140"
          rounded
          style="object-fit: cover"
          class="w-100"
          src="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg"
          alt="Image 1"
        ></b-img>
          <p class="my-4">{{item.description}}</p>
        <div class="d-flex justify-content-between">
            <span>
            {{new Date(item.startDate).toLocaleDateString('en-GB')}}
            </span>
            <span>
               {{new Date(item.endDate).toLocaleDateString('en-GB')}}
            </span>
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
