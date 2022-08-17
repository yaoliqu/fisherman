<template>
  <div>
    <!-- <VirtualPage v-if="!isDefault" @changeStatus="changeStatus" />
    <RealPage v-else /> -->
    <RealPage  />
  </div>
</template>

<script>
import { getConfig } from '../../utils/utils'
export default {
  components: {
    RealPage: () => import('./RealPage'),
    // VirtualPage: () => import('./VirtualPage'),
  },
  data() {
    return {
      isDefault: getConfig().mode || false,
    }
  },
  methods:{
    changeStatus(status){
      this.isDefault=status
    }
  }
}
</script>

<style lang="scss" scoped></style>
