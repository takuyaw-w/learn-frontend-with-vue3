import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import OneMember from "@/components/OneMember.vue";

describe("OneMember.vueのテスト", () => {
  test("備考データあり", () => {
    const propsData = {
      id: 22458,
      name: "中野三郎",
      email: "mue@wow.com",
      points: 200,
      note: "すばらしい！",
    };

    const wrapper = mount(OneMember, { props: propsData });
    const actualText = wrapper.text();
    expect(actualText).toContain(String(propsData.id));
    expect(actualText).toContain(propsData.name);
    expect(actualText).toContain(propsData.email);
    expect(actualText).toContain(String(propsData.points));
    expect(actualText).toContain(propsData.note);
  });

  test("備考データなし", () => {
    const propsData = {
      id: 22458,
      name: "中野三郎",
      email: "mue@wow.com",
      points: 200,
    };

    const wrapper = mount(OneMember, { props: propsData });
    const actualText = wrapper.text();
    expect(actualText).toContain(String(propsData.id));
    expect(actualText).toContain(propsData.name);
    expect(actualText).toContain(propsData.email);
    expect(actualText).toContain(String(propsData.points));
    expect(actualText).toContain("--");
  });

  test("ポイント加算ボタンクリックのテスト", async () => {
    const propsData = {
      id: 22458,
      name: "中野三郎",
      email: "mue@wow.com",
      points: 200,
      note: "すばらしい！",
    };

    const wrapper = mount(OneMember, { props: propsData });
    await wrapper.get("button").trigger("click");
    const incrementPointEvent = wrapper.emitted("incrementPoint");
    expect(incrementPointEvent).toHaveLength(1);
    const expectedIncrementPointEvent = [[propsData.id]];
    expect(incrementPointEvent).toEqual(expectedIncrementPointEvent);
  });
});
