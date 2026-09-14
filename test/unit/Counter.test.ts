import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Counter from "../../app/pages/Test.vue";

describe("Counter Component", () =>
{

    it("renders initial state and increments properly", async () =>
    {

        // Mount the component safely inside the simulated Nuxt environment
        const wrapper = await mountSuspended(Counter);

        // Assert initial state
        const text = wrapper.find("[data-testid=\"count-val\"]");
        expect(text.text()).toBe("Count: 0");

        // Simulate button click
        await wrapper.find("button").trigger("click");

        // Assert state update
        expect(text.text()).toBe("Count: 1");

    });

});