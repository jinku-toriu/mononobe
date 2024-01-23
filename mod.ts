import Composer from './src/Composer.ts'
import MObjectComposer, { MObject } from './src/MObjectComposer.ts'

export type MOriginValue = MObject

export function mononobe(origin: MOriginValue): Composer {
  return new MObjectComposer(origin)
}
