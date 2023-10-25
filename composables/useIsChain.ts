import type { Prefix } from '@kodadot1/static'
import type { ComputedRef } from 'vue'

export default function (prefix: ComputedRef<Prefix>) {
  const isBasilisk = computed(
    () => prefix.value === 'bsx' || prefix.value === 'snek',
  )
  const isRemark = computed(
    () => prefix.value === 'rmrk' || prefix.value === 'ksm',
  )

  const isRmrk = computed(() => prefix.value === 'rmrk')

  const isAssetHub = computed(
    () => prefix.value === 'ahk' || prefix.value === 'ahp',
  )

  return {
    isBasilisk,
    isRemark,
    isKsm,
    isAssetHub,
    isRmrk,
  }
}
