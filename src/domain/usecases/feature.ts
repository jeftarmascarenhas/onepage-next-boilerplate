export interface LoadFeatures {
  getFeatures: () => LoadFeatures.Model[]
}

export namespace LoadFeatures {
  export type Model = {
    id: number
    title: string
    description: string
    src: string
  }
}
