import Composer from './Composer.ts'

export type MObject = { [k: string | number]: string | number }

export default class MObjectComposer extends Composer {
  constructor(origin: MObject) {
    super()
  }
}
