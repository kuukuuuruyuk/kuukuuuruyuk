import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import JudulKepala from "../JudulKepala.vue";

describe("JudulKepala", () => {
  it("renders properly", () => {
    const wrapper = mount(JudulKepala, { props: { title: "Kuku Ruyuk" } });
    expect(wrapper.text()).toContain("Kuku Ruyuk");
  });
});
