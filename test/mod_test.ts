import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { mononobe } from "../mod.ts";
import Composer from '../src/Composer.ts'
import MObjectComposer from '../src/MObjectComposer.ts'

Deno.test(function giveObject() {
  const mono = mononobe({ name: 'mononobe', age: 2024 })
  assertEquals(mono instanceof Composer, true);
  assertEquals(mono instanceof MObjectComposer, true);
});
