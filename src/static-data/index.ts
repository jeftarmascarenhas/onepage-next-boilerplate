/* eslint-disable @typescript-eslint/no-empty-function */
import { LoadFeatures } from '@/domain/usecases'
import { features } from './data'

class FakerSingleton implements LoadFeatures {
  private static instance: FakerSingleton

  private constructor() {}

  public static getInstance(): FakerSingleton {
    if (!FakerSingleton.instance) {
      FakerSingleton.instance = new FakerSingleton()
    }
    return FakerSingleton.instance
  }

  public getFeatures(): LoadFeatures.Model[] {
    return features
  }
}

export const faker = FakerSingleton.getInstance()
